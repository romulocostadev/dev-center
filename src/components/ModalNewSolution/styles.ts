import styled from 'styled-components';

import { Form } from 'antd';
import GenericInput from '../Input';

export const InputsWrapper = styled.div`
  width: 306px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #ffffff;
  padding: 24px 24px;
`;
export const Frame = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 8px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const InputBasic = styled(GenericInput)`
  width: 320px;
`;
export const FormNewSolution = styled(Form)``;

export const FormFooter = styled.div`
  height: 73px;
  width: 345px;
  display: flex;
  box-sizing: border-box;
  gap: 8px;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 22px 24px 22px 24px;
`;
