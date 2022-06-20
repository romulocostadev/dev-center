import styled from 'styled-components';

import { ProjectOutlined } from '@ant-design/icons';
import VectorImage from './assets/I1531_153733_918_110211_125_50130.png';
import Vector1Image from './assets/I1531_153734_1189_126575_125_49873.png';
import Vector2Image from './assets/I1531_153735_918_110211_125_49772.png';
import Vector3Image from './assets/I1531_153737_918_110211_125_50172.png';
import Icon1Image from './assets/I1531_153738_918_110211.png';

import GenericText from '../../../components/Text';

export const LayoutSider = styled.div`
  height: 100%;
  width: 68px;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #9a71ff;
`;
export const MenuGroup = styled.div`
  height: 100%;
  width: 68px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #ffffff;
`;
export const FirstSection = styled.div`
  height: 256px;
  width: 68px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
`;
export const MenuItem = styled.div`
  height: 64px;
  width: 68px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
`;

export const ProjectOutlinedIcon = styled(ProjectOutlined)`
  color: #444444;
  font-size: 16px;
`;
export const Label = styled(GenericText)`
  font-weight: 400;
  font-size: 12px;
  margin: 0px;
  width: 38px;
`;

export const MenuItem1 = styled.div`
  height: 64px;
  width: 68px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
`;
export const IconOutlinedPartition = styled.div`
  height: 16px;
  width: 16px;
  box-sizing: border-box;
`;
export const Vector = styled.div`
  height: 11px;
  width: 12px;
  left: 1.75px;
  top: 2.25px;
  position: inherit;
  box-sizing: border-box;
  background-color: #444444;
  background: url(${VectorImage});
  background-repeat: no-repeat;
`;
export const Label1 = styled(GenericText)`
  font-weight: 400;
  font-size: 12px;
  margin: 0px;
  width: 52px;
`;

export const MenuItem2 = styled.div`
  height: 64px;
  width: 68px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #f7f1ff;
`;
export const IconOutlinedDatabase = styled.div`
  height: 16px;
  width: 16px;
  box-sizing: border-box;
`;
export const Vector1 = styled.div`
  height: 14px;
  width: 11px;
  left: 2.5px;
  top: 1px;
  position: inherit;
  box-sizing: border-box;
  background-color: #7447f9;
  background: url(${Vector1Image});
  background-repeat: no-repeat;
`;
export const Label2 = styled(GenericText)`
  font-size: 12px;
  color: #7447f9;
  margin: 0px;
  width: 26px;
`;

export const MenuItem3 = styled.div`
  height: 64px;
  width: 68px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
`;
export const IconOutlinedApi = styled.div`
  height: 16px;
  width: 16px;
  box-sizing: border-box;
`;
export const Vector2 = styled.div`
  height: 13px;
  width: 13px;
  left: 1.626953125px;
  top: 1.6268157958984375px;
  position: inherit;
  box-sizing: border-box;
  background-color: #444444;
  background: url(${Vector2Image});
  background-repeat: no-repeat;
`;
export const Label3 = styled(GenericText)`
  font-weight: 400;
  font-size: 12px;
  margin: 0px;
  width: 41px;
`;

export const SecondSection = styled.div`
  height: 128px;
  width: 68px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const MenuItem4 = styled.div`
  height: 64px;
  width: 68px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
`;
export const Icon = styled.div`
  height: 16px;
  width: 16px;
  box-sizing: border-box;
`;
export const Vector3 = styled.div`
  height: 14px;
  width: 13px;
  left: 1.373046875px;
  top: 0.99664306640625px;
  position: inherit;
  box-sizing: border-box;
  background-color: #444444;
  background: url(${Vector3Image});
  background-repeat: no-repeat;
`;
export const Label4 = styled(GenericText)`
  font-weight: 400;
  font-size: 12px;
  margin: 0px;
  width: 45px;
`;

export const MenuItem5 = styled.div`
  height: 64px;
  width: 68px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
`;
export const Icon1 = styled.div`
  height: 16px;
  width: 16px;
  box-sizing: border-box;
  background: url(${Icon1Image});
  background-repeat: no-repeat;
`;
export const Label5 = styled(GenericText)`
  font-weight: 400;
  font-size: 12px;
  margin: 0px;
  width: 26px;
`;

export const Divider = styled.div`
  height: 100%;
  width: 2px;
  outline: 1px solid rgba(0, 0, 0, 0.1);
  outline-offset: -0.5px;
`;
