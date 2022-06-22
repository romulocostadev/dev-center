import { Form } from 'antd';
import React from 'react';
import { setModalData } from '../../store/modal/modalSlice';
import { useAppDispatch } from '../../store/reduxHooks';
import GenericFormItem from '../FormItem';

import {
  FormNewSolution,
  Frame26,
  Frame32,
  InputBasic5,
  Divider1,
  Frame30,
  ButtonsButton21,
} from './styles';

const ModalNewSolution = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (values: any) => {
    console.log('foo handle ok', values);
    dispatch(
      setModalData({
        visible: false,
      }),
    );
  };

  const handleCancel = (values: any) => {
    dispatch(
      setModalData({
        visible: false,
      }),
    );
  };
  return (
    <Frame26>
      <Frame32>
        <FormNewSolution onFinish={handleSubmit}>
          <GenericFormItem name="teste">
            <InputBasic5 placeholder="Give me a nice name" />
          </GenericFormItem>
          <Divider1 />
          <Frame30>
            <ButtonsButton21 onClick={handleCancel}>Cancel</ButtonsButton21>
            <ButtonsButton21 type="primary" htmlType="submit">
              Create
            </ButtonsButton21>
          </Frame30>
        </FormNewSolution>
      </Frame32>
    </Frame26>
  );
};

export default ModalNewSolution;
