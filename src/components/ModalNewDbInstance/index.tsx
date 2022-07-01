import { Form, notification, Select } from 'antd';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { useAddSolutionMutation } from '../../services/solution';
import { setModalData } from '../../store/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '../../store/reduxHooks';
import { GenericButtonWithLoadingStyle } from '../ButtonWithLoading/styles';
import GenericFormItem from '../FormItem';

import {
  createSolution,
  updateActiveWorkSpace,
} from '../../store/solution/solutionSlice';

import {
  FormNewSolution,
  InputsWrapper,
  Frame,
  InputBasic,
  FormFooter,
  SelectDatabase,
  SelectOption,
} from './styles';
import getNewChild, {
  getUuid,
  NewChildRequestParams,
  PathType,
} from '../../services/factories/common';
import getNewNode from '../../services/factories/databaseInstance';

const ModalNewDbInstance = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const activeWorkSpace = useAppSelector(
    state => state.solutions.activeWorkSpace,
  );

  const getUpdatedChild = (
    parameterElement,
    current,
    title,
    databaseEngine,
    isRelational,
  ) => {
    let element = { ...parameterElement };
    let finded = false;
    let id = getUuid();
    if (element.title === 'DbInstances') {
      finded = true;
      if (!element.children) element.children = [];

      const params = new NewChildRequestParams();
      params.id = id;
      params.title = title;
      params.pathType = PathType.DatabaseInstance;
      let newChildItem = getNewChild(params);

      element.nodes = Object.assign([], element.nodes);
      element.children = Object.assign([], element.children);
      element.children.push(newChildItem);
      let lastNode =
        element.nodes.length > 0 ? element.nodes.slice(-1).pop() : null;
      let newNode = getNewNode(
        id,
        title,
        lastNode,
        databaseEngine,
        isRelational,
      );
      element.nodes.push(newNode);

      let newActiveWorkSpace = { ...activeWorkSpace };
      newActiveWorkSpace.nodes = element.nodes;
      dispatch(updateActiveWorkSpace(newActiveWorkSpace));
      return element;
    }
    if (finded === false && element?.children?.length > 0) {
      element.children = element?.children?.map(recursiveElement =>
        getUpdatedChild(
          recursiveElement,
          current,
          title,
          databaseEngine,
          isRelational,
        ),
      );
    }
    return element;
  };
  const updateSolutionData = (
    solution,
    current,
    databaseName,
    databaseEngine,
    isRelational,
  ) => {
    solution.children = solution?.children?.map(element =>
      getUpdatedChild(
        element,
        current,
        databaseName,
        databaseEngine,
        isRelational,
      ),
    );
    return solution;
  };
  const solution = useAppSelector(state => state.solutions.solution);
  const dbInstanceTypes = useAppSelector(
    state => state.solutions.templateParams.DomainEntities.DbInstanceTypes,
  );
  const relationalDbInstanceTypes = useAppSelector(
    state =>
      state.solutions.templateParams.DomainEntities.RelationalDbInstanceTypes,
  );

  const dispatch = useAppDispatch();
  const [isRelationalDatabase, setIsRelationalDatabase] = useState(false);

  const handleSubmit = (values: any) => {
    notification.success({
      message: t('sucess-title'),
      description: t('sucess-message'),
    });
    let newSolution = { ...solution };
    newSolution = updateSolutionData(
      newSolution,
      activeWorkSpace.current,
      values.name,
      values.type,
      isRelationalDatabase,
    );

    dispatch(
      createSolution({
        solution: newSolution,
      }),
    );
    // dispatch(
    //  createSolution({
    //    activeWorkSpace,
    //  }),
    // );
    dispatch(
      setModalData({
        visible: false,
      }),
    );
  };

  const handleChangeDbType = dbType => {
    setIsRelationalDatabase(relationalDbInstanceTypes.indexOf(dbType) >= 0);
  };

  return (
    <FormNewSolution onFinish={handleSubmit}>
      <InputsWrapper>
        <Frame>
          <GenericFormItem
            name="type"
            rules={[{ required: true, message: t('required-field') }]}
          >
            <SelectDatabase
              onChange={handleChangeDbType}
              placeholder={t('dbtype-placeholder-dbinstance')}
              style={{ width: '100%' }}
            >
              {dbInstanceTypes.map(element => (
                <SelectOption key={element}>{element}</SelectOption>
              ))}
            </SelectDatabase>
          </GenericFormItem>
          <GenericFormItem
            name="name"
            rules={[{ required: true, message: t('required-field') }]}
          >
            <InputBasic placeholder={t('dbinstance-name-input-title')} />
          </GenericFormItem>
          <GenericFormItem name="relationalDatabase">
            <Checkbox
              disabled
              checked={isRelationalDatabase}
              value={isRelationalDatabase}
            >
              {t('dbinstance-is-relational-database')}
            </Checkbox>
          </GenericFormItem>
        </Frame>
      </InputsWrapper>
      <FormFooter className="ant-modal-footer">
        <GenericButtonWithLoadingStyle type="primary" htmlType="submit">
          {t('button-create-title')}
        </GenericButtonWithLoadingStyle>
      </FormFooter>
    </FormNewSolution>
  );
};

export default ModalNewDbInstance;
