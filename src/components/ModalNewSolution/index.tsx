import { Form } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAddSolutionMutation } from '../../services/solution';
import { setModalData } from '../../store/modal/modalSlice';
import { useAppDispatch } from '../../store/reduxHooks';
import { GenericButtonWithLoadingStyle } from '../ButtonWithLoading/styles';
import GenericFormItem from '../FormItem';

import {
  FormNewSolution,
  InputsWrapper,
  Frame,
  InputBasic,
  FormFooter,
} from './styles';

const ModalNewSolution = () => {
  const { t } = useTranslation();
  const [
    addSolution, // This is the mutation trigger
    { isLoading }, // This is the destructured mutation result
  ] = useAddSolutionMutation();
  const dispatch = useAppDispatch();
  const handleSubmit = async (values: any) => {
    const res = await addSolution({
      Name: values.name,
      TemplateId: process.env.REACT_APP_TEMPLATE_ID,
    });
    console.log('foo handle ok', res, process.env);
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
            <InputBasic placeholder="Give me a nice name" />
          </GenericFormItem>
        </Frame>
      </InputsWrapper>
      <FormFooter className="ant-modal-footer">
        <GenericButtonWithLoadingStyle
          type="primary"
          htmlType="submit"
          loading={isLoading}
        >
          {t('button-create-title')}
        </GenericButtonWithLoadingStyle>
      </FormFooter>
    </FormNewSolution>
  );
};

export default ModalNewSolution;
