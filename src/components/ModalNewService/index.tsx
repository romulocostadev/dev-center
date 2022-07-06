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
import getNewNode, { getServiceChild } from '../../services/factories/service';
import getMetadataNode from '../../services/factories/serviceMetadata';
import useWorkspace from '../../hooks/useWorkspace';

const ModalNewService = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const activeWorkSpace = useAppSelector(
    state => state.solutions.activeWorkSpace,
  );
  const [setCurrent] = useWorkspace();

  enum InsertionType {
    Service,
    Metadata,
  }

  let serviceId = '';

  const getUpdatedChild = (
    parameterElement,
    current,
    title,
    serviceTypes,
    allowedScopes,
  ) => {
    let element = { ...parameterElement };
    let finded = false;
    let id = getUuid();
    if (element.key === current.key) {
      finded = true;
      if (!element.children) element.children = [];

      let newNode = null;
      const params = new NewChildRequestParams();
      params.id = id;
      params.title = title;
      params.pathType = PathType.Service;
      let newChildItem = getServiceChild(params);
      // newChildItem.children = Object.assign([], element.children);
      element.nodes = Object.assign([], element.nodes);
      element.children = Object.assign([], element.children);
      element.children.push(newChildItem);
      let lastNode =
        element.nodes.length > 0 ? element.nodes.slice(-1).pop() : null;
      newNode = getNewNode(id, title, lastNode, serviceTypes, allowedScopes);
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
          serviceTypes,
          allowedScopes,
        ),
      );
    }
    return element;
  };
  const updateSolutionData = (
    solution,
    current,
    name,
    serviceType,
    allowedScopes,
  ) => {
    solution.children = solution?.children?.map(element =>
      getUpdatedChild(element, current, name, serviceType, allowedScopes),
    );
    return solution;
  };

  const solution = useAppSelector(state => state.solutions.solution);
  const dbInstanceTypes = useAppSelector(
    state => state.solutions.templateParams.DomainEntities.DbInstanceTypes,
  );
  const serviceTypes = useAppSelector(
    state => state.solutions.templateParams.DomainEntities.ServiceTypes,
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
      values.allowedScopes,
    );

    dispatch(
      createSolution({
        solution: newSolution,
      }),
    );
    dispatch(
      setModalData({
        visible: false,
      }),
    );
  };

  const { Option } = Select;

  const children: React.ReactNode[] = [];
  for (let i = 0; i < solution.children[1]?.children?.length; i++) {
    children.push(
      <Option key={solution.children[1]?.children[i]?.title}>
        {solution.children[1]?.children[i]?.title}
      </Option>,
    );
  }

  return (
    <FormNewSolution onFinish={handleSubmit}>
      <InputsWrapper>
        <Frame>
          <GenericFormItem
            name="name"
            rules={[{ required: true, message: t('required-field') }]}
          >
            <InputBasic placeholder={t('dbinstance-name-input-title')} />
          </GenericFormItem>
          <GenericFormItem
            name="type"
            rules={[{ required: true, message: t('required-field') }]}
          >
            <SelectDatabase
              placeholder={t('servicetype-placeholder-service')}
              style={{ width: '100%' }}
            >
              {serviceTypes.map(element => (
                <SelectOption key={element}>{element}</SelectOption>
              ))}
            </SelectDatabase>
          </GenericFormItem>
          <GenericFormItem name="allowedScopes">
            <SelectDatabase
              mode="tags"
              style={{ width: '100%' }}
              placeholder={t('allowed-scopes-placeholder-service')}
            >
              {children}
            </SelectDatabase>
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

export default ModalNewService;
