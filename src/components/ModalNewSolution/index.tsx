import { Form } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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

  const [confirmLoading, setConfirmLoading] = useState(false);
  const dispatch = useAppDispatch();
  const handleSubmit = (values: any) => {
    console.log('foo handle ok', values);
    setConfirmLoading(true);
    setTimeout(() => {
      dispatch(
        setModalData({
          visible: false,
        }),
      );
      setConfirmLoading(false);
    }, 4000);
  };

  return (
    <FormNewSolution onFinish={handleSubmit}>
      <InputsWrapper>
        <Frame>
          <GenericFormItem
            name="teste"
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
          loading={confirmLoading}
        >
          {t('button-create-title')}
        </GenericButtonWithLoadingStyle>
      </FormFooter>
    </FormNewSolution>
  );
};

export default ModalNewSolution;
