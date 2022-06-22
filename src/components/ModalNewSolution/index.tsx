import { Form } from 'antd';
import React, { useState } from 'react';
import { setModalData } from '../../store/modal/modalSlice';
import { useAppDispatch } from '../../store/reduxHooks';
import { GenericButtonWithLoadingStyle } from '../ButtonWithLoading/styles';
import GenericFormItem from '../FormItem';

import {
  FormNewSolution,
  Frame26 as InputsWrapper,
  Frame32 as Frame,
  InputBasic5,
  Frame30 as FormFooter,
} from './styles';

const ModalNewSolution = () => {
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
          <GenericFormItem name="teste" rule>
            <InputBasic5 placeholder="Give me a nice name" />
          </GenericFormItem>
        </Frame>
      </InputsWrapper>
      <FormFooter className="ant-modal-footer">
        <GenericButtonWithLoadingStyle
          type="primary"
          htmlType="submit"
          loading={confirmLoading}
        >
          Create
        </GenericButtonWithLoadingStyle>
      </FormFooter>
    </FormNewSolution>
  );
};

export default ModalNewSolution;
