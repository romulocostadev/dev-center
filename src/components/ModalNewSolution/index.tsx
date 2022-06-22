import { Form } from 'antd';
import React from 'react';
import GenericFormItem from '../FormItem';

import { FormNewSolution, Frame26, Frame32, InputBasic5 } from './styles';

const ModalNewSolution = ({ onFinish, form }: any) => {
  console.log('form no form', form);
  return (
    <Frame26>
      <Frame32>
        <FormNewSolution onFinish={onFinish} form={form}>
          <GenericFormItem name="teste">
            <InputBasic5 placeholder="Give me a nice name" />
          </GenericFormItem>
        </FormNewSolution>
      </Frame32>
    </Frame26>
  );
};

export default ModalNewSolution;
