import styled from 'styled-components';
import { Select } from 'antd';

import VectorImage from './assets/I1074_122996_125_68244_125_49508.png';
import GenericInput from '../Input';
import GenericSelect from '../Select';
import Vector1Image from './assets/I1074_123003_125_50348.png';
import GenericCodeButton from '../Button';
import GenericText from '../Text';

export const ModalNewEntity = styled.div`
  height: 278px;
  width: 368px;
  left: 62px;
  top: 88px;
  position: absolute;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 8px;
  background-color: #ffffff;
`;
export const Frame25 = styled.div`
  height: 56px;
  width: 368px;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 24px 16px 24px;
`;
export const Newentity4 = styled(GenericText)`
  font-weight: 500;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
  margin: 0px;
  width: 305px;
`;

export const ButtonsButton25 = styled.div`
  height: 16px;
  width: 16px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 2px;
`;
export const Content = styled.div`
  height: 16px;
  width: 16px;
  display: flex;
  box-sizing: border-box;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;
export const IconOutlinedClose = styled.div`
  height: 16px;
  width: 16px;
  box-sizing: border-box;
`;
export const Vector = styled.div`
  height: 10px;
  width: 10px;
  left: 3.046875px;
  top: 2.90625px;
  position: inherit;
  box-sizing: border-box;
  background-color: #444444;
  background: url(${VectorImage});
  background-repeat: no-repeat;
`;
export const Divider = styled.div`
  height: 2px;
  width: 370px;
  outline: 1px solid rgba(0, 0, 0, 0.1);
  outline-offset: -0.5px;
`;
export const Frame26 = styled.div`
  height: 158px;
  width: 368px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px;
  background-color: #ffffff;
`;
export const Frame32 = styled.div`
  height: 72px;
  width: 320px;
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

export const SelectInput = styled(GenericSelect)`
  width: 320px;
  position: static;
`;

export const SelectInputOption = styled(Select.Option)``;

export const Frame31 = styled.div`
  height: 22px;
  width: 290px;
  display: flex;
  box-sizing: border-box;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
`;
export const IconFilledInfoCircle = styled.div`
  height: 16px;
  width: 16px;
  box-sizing: border-box;
`;
export const Vector1 = styled.div`
  height: 14px;
  width: 14px;
  left: 1px;
  top: 1px;
  position: inherit;
  box-sizing: border-box;
  background-color: #7447f9;
  background: url(${Vector1Image});
  background-repeat: no-repeat;
`;
export const TextComponentadditional18 = styled(GenericText)`
  color: rgba(0, 0, 0, 0.45);
  margin: 0px;
  width: 265px;
  font-weight: 400;
  font-size: 14px;
`;

export const Divider1 = styled.div`
  height: 2px;
  width: 370px;
  outline: 1px solid rgba(0, 0, 0, 0.1);
  outline-offset: -0.5px;
`;
export const Frame30 = styled.div`
  height: 64px;
  width: 368px;
  display: flex;
  box-sizing: border-box;
  gap: 8px;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 16px 24px 16px 24px;
`;
export const ButtonsButton21 = styled(GenericCodeButton)`
  width: 74px;
  height: 32px;
  border-radius: 2px;
  height: 32px;
`;
