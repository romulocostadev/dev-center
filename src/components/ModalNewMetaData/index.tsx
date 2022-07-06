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
  ModalNewMetaData,
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
import getNewNode from '../../services/factories/serviceMetadata';

const ModalNewService = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const activeWorkSpace = useAppSelector(
    state => state.solutions.activeWorkSpace,
  );

  const getUpdatedChild = (parameterElement, current, values) => {
    let element = { ...parameterElement };
    let finded = false;
    let id = getUuid();
    if (element.key === current.key) {
      finded = true;
      if (!element.children) element.children = [];

      const params = new NewChildRequestParams();
      params.id = id;
      params.title = title;
      params.pathType = PathType.Service;
      let newChildItem = getNewChild(params);

      element.nodes = Object.assign([], element.nodes);
      element.children = Object.assign([], element.children);
      element.children.push(newChildItem);
      let lastNode =
        element.nodes.length > 0 ? element.nodes.slice(-1).pop() : null;
      let newNode = getNewNode(id, values, lastNode);
      element.nodes.push(newNode);

      let newActiveWorkSpace = { ...activeWorkSpace };
      newActiveWorkSpace.nodes = element.nodes;
      dispatch(updateActiveWorkSpace(newActiveWorkSpace));
      return element;
    }
    if (finded === false && element?.children?.length > 0) {
      element.children = element?.children?.map(recursiveElement =>
        getUpdatedChild(recursiveElement, current, values),
      );
    }
    return element;
  };
  const updateSolutionData = (solution, current, values) => {
    solution.children = solution?.children?.map(element =>
      getUpdatedChild(element, current, values),
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
      values,
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

  return (
    <ModalNewMetaData onFinish={handleSubmit}>
      <InputsWrapper>
        <Frame>
          <GenericFormItem
            name="title"
            rules={[{ required: true, message: t('required-field') }]}
          >
            <InputBasic placeholder={t('new-metadata-name-input-title')} />
          </GenericFormItem>
          <GenericFormItem name="version">
            <InputBasic placeholder={t('new-metadata-name-input-version')} />
          </GenericFormItem>
          <GenericFormItem name="termsOfServiceUrl">
            <InputBasic
              placeholder={t('new-metadata-name-input-terms-of-service-url')}
            />
          </GenericFormItem>
          <GenericFormItem name="description">
            <InputBasic
              placeholder={t('new-metadata-name-input-description')}
            />
          </GenericFormItem>
          <GenericFormItem name="licenseInfo">
            <InputBasic
              placeholder={t('new-metadata-name-input-license-info')}
            />
          </GenericFormItem>
          <GenericFormItem name="contactUrl">
            <InputBasic
              placeholder={t('new-metadata-name-input-contact-url')}
            />
          </GenericFormItem>

          <GenericFormItem name="licenseUrl">
            <InputBasic
              placeholder={t('new-metadata-name-input-license-url')}
            />
          </GenericFormItem>
          <GenericFormItem name="contactName">
            <InputBasic
              placeholder={t('new-metadata-name-input-contact-name')}
            />
          </GenericFormItem>
          <GenericFormItem name="contactEmail">
            <InputBasic
              placeholder={t('new-metadata-name-input-contact-email')}
            />
          </GenericFormItem>
        </Frame>
      </InputsWrapper>
      <FormFooter className="ant-modal-footer">
        <GenericButtonWithLoadingStyle type="primary" htmlType="submit">
          {t('button-create-title')}
        </GenericButtonWithLoadingStyle>
      </FormFooter>
    </ModalNewMetaData>
  );
};

export default ModalNewService;
