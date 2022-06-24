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
  const handleSubmit = (values: any) => {
    const res = addSolution({
      Name: values.name,
      TemplateId: '83E96851-D5FC-4290-8D37-B6625363174F',
    });
    console.log('foo handle ok', res);
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
