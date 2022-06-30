import { Form, notification } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
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
} from './styles';

const ModalNewEntity = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const activeWorkSpace = useAppSelector(
    state => state.solutions.activeWorkSpace,
  );

  const solution = useAppSelector(state => state.solutions.solution);

  const dispatch = useAppDispatch();

  const getUpdatedChild = (parameterElement, current, title) => {
    let element = { ...parameterElement };
    let finded = false;
    if (element.title === current.title) {
      finded = true;
      if (!element.children) element.children = [];

      element.nodes = Object.assign([], element.nodes);
      element.children = Object.assign([], element.children);
      element.children.push({
        key: `${title}_${element.children.length + 1}`,
        title,
        nodes: [],
        children: null,
      });
      element.nodes.push({
        id: `ent-${element.nodes.length + 1}`,
        type: 'customNode',
        selectable: true,
        data: {
          elementType: 'entity',
          title,
          keyType: 'int',
          entityType: 'Auditable',
          refDatabaseId: 'db-3',
          properties: [
            {
              title: 'key',
              type: 'int',
              isArray: false,
              isNullable: false,
              defaultValue: null,
              checkReferencedEntityId: null,
            },
            {
              title: 'CreatedUtc',
              type: 'DateTimeOffset',
              isArray: false,
              isNullable: false,
              defaultValue: null,
              checkReferencedEntityId: null,
            },
            {
              title: 'ModifiedUtc',
              type: 'DateTimeOffset',
              isArray: false,
              isNullable: false,
              defaultValue: null,
              checkReferencedEntityId: null,
            },
          ],
        },
        style: {
          border: '1px solid #777',
          padding: 10,
        },
        position: {
          x:
            element.nodes.length > 0
              ? element.nodes.slice(-1).pop().position.x + 300
              : 300,
          y: 50,
        },
      });

      let newActiveWorkSpace = { ...activeWorkSpace };
      newActiveWorkSpace.nodes = element.nodes;
      dispatch(updateActiveWorkSpace(newActiveWorkSpace));
      return element;
    }
    if (finded === false && element?.children?.length > 0) {
      element.children = element?.children?.map(recursiveElement =>
        getUpdatedChild(recursiveElement, current, title),
      );
    }
    return element;
  };

  const updateSolutionData = (solution, current, databaseName) => {
    solution.children = solution?.children?.map(element =>
      getUpdatedChild(element, current, databaseName),
    );
    return solution;
  };

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

  return (
    <FormNewSolution onFinish={handleSubmit}>
      <InputsWrapper>
        <Frame>
          <GenericFormItem
            name="name"
            rules={[{ required: true, message: t('required-field') }]}
          >
            <InputBasic placeholder={t('entity-name-input-title')} />
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

export default ModalNewEntity;
