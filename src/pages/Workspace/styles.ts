import styled from 'styled-components';

import { DownOutlined, MenuOutlined } from '@ant-design/icons';

import CreatingAStructureVectorImage from './assets/1702_147631.png';
import GenericCodeButton from '../../components/Button';
import GenericText from '../../components/Text';

export const DataCanvas = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background: rgba(115, 70, 248, 0.02);
  flex-direction: row;

  /* padding-left: 200px; */
`;

export const ButtonWrapper = styled.div`
  right: 240px;
  z-index: 4;
  position: absolute;
  margin: 15px;
`;

export const ReactFlowWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 100;
`;
export const CardCreatingAStructure = styled.div`
  height: 402px;
  /* width: 322px; */
  margin-right: 20%;

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
export const VectorFrame = styled.div`
  height: 200px;
  width: 272px;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;
export const CreatingAStructureVector = styled.div`
  height: 195px;
  width: 272px;
  box-sizing: border-box;
  background: url(${CreatingAStructureVectorImage});
  background-repeat: no-repeat;
`;
export const CreatingaStructure = styled(GenericText)`
  color: #7447f9;
  margin: 0px;
  width: 145px;
`;

export const Asolutionneedsainstance = styled(GenericText)`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.45);
  margin: 0px;
  width: 202px;
`;

export const HandleNewInstance = styled(GenericCodeButton)`
  width: 117px;
  height: 32px;
  border-radius: 2px;
`;

export const MenuGroup2 = styled.div`
  /* height: 100%; */
  /* width: 240px;
  left: 1184px;
  top: 0px;
  position: absolute; */
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #ffffff;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
`;
export const CollapseProperties = styled.div`
  height: 104px;
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #dadada;
`;
export const CollapseItem = styled.div`
  height: 104px;
  width: 240px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const CollapseHead = styled.div`
  height: 40px;
  width: 240px;
  display: flex;
  box-sizing: border-box;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 16px 10px 16px;
  background-color: #ffffff;
`;

export const DownOutlinedIcon = styled(DownOutlined)`
  color: #000000;
  font-size: 12px;
`;

export const Properties = styled(GenericText)`
  font-weight: 400;
  font-size: 12px;
  margin: 0px;
  width: 169px;
`;

export const MenuOutlinedIcon = styled(MenuOutlined)`
  color: #000000;
  font-size: 12px;
`;

export const Divider2 = styled.div`
  height: 2px;
  width: 242px;
  outline: 1px solid rgba(0, 0, 0, 0.1);
  outline-offset: -0.5px;
`;
export const CollapseBody = styled.div`
  height: 64px;
  width: 240px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 8px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 8px 16px 8px;
  background-color: #ffffff;
`;
export const Input3 = styled.div`
  height: 32px;
  width: 224px;
  display: flex;
  box-sizing: border-box;
  gap: 4px;
  justify-content: flex-start;
  align-items: center;
`;
export const InputBasic3 = styled.div`
  height: 32px;
  width: 224px;
  display: flex;
  box-sizing: border-box;
  gap: 4px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 2px;
  padding: 2px 8px 2px 8px;
`;
export const Prefix = styled(GenericText)`
  font-weight: 400;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
  margin: 0px;
  width: 36px;
`;

export const Input = styled(GenericText)`
  font-weight: 400;
  font-size: 12px;
  margin: 0px;
  width: 72px;
`;

// export const Divider3 = styled.div`
//   height: 2px;
//   width: 242px;
//   outline: 1px solid rgba(0, 0, 0, 0.1);
//   outline-offset: -0.5px;
// `;
