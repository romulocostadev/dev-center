import styled from 'styled-components';

import { DownOutlined } from '@ant-design/icons';
import Vector13Image from './assets/I1702_154363_125_50061.png';
import Vector14Image from './assets/I1702_154366_918_110189_1_4801.png';
import DataVectorImage from './assets/1702_150552.png';
import GenericCodeButton from '../../components/Button';

import GenericText from '../../components/Text';

export const DataCanvasDatabase = styled.div`
  box-sizing: border-box;
  justify-content: center;
  display: flex;
  flex: 100;
`;
export const AInstanceNeedsADatabase = styled.div`
  height: 402px;
  width: 322px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 24px;
  background-color: #ffffff;
`;
export const VectorFrame1 = styled.div`
  height: 200px;
  width: 272px;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;
export const DataVector = styled.div`
  height: 174px;
  width: 272px;
  box-sizing: border-box;
  background: url(${DataVectorImage});
  background-repeat: no-repeat;
`;
export const AInstanceNeedsaDatabase = styled(GenericText)`
  color: #7447f9;
  margin: 0px;
  width: auto;
  text-align: center;
`;

export const TextComponentdont = styled(GenericText)`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.45);
  margin: 0px;
  width: auto;
  text-align: center;
`;

export const HandleNewDatabase = styled(GenericCodeButton)`
  position: static;
  height: 32px;
  border-radius: 2px;
  height: 32px;
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  padding: 40px 30px 40px 30px;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  min-height: 200px;
`;
