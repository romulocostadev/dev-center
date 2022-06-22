import styled from 'styled-components';

import { Button, Form } from 'antd';
import GenericInput from '../Input';
import GenericCodeButton from '../Button';
import { GenericButtonWithLoadingStyle } from '../ButtonWithLoading/styles';

export const Frame26 = styled.div`
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
export const Frame32 = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 8px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const InputBasic5 = styled(GenericInput)`
  width: 320px;
`;
export const FormNewSolution = styled(Form)``;

export const Frame30 = styled.div`
  height: 73px;
  width: 345px;
  display: flex;
  box-sizing: border-box;
  gap: 8px;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 22px 24px 22px 24px;
`;
