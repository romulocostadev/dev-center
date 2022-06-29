import styled from 'styled-components';

import { TableOutlined } from '@ant-design/icons';
import InConnector1Image from './assets/2043_176062.png';
import Vector2Image from './assets/I2043_176066_125_50204.png';
import IconOutlinedPlusImage from './assets/I2043_176069_125_68244.png';
import ExitConnector1Image from './assets/2043_176071.png';
import GenericCodeButton from '../Button';
import GenericText from '../Text';
import sqlServerIcon from './assets/sqlServer.png';
import postGresSqlIcon from './assets/post.svg';
import databaseIcon from './assets/database.svg';

export const CardsAuditableEntity = styled.div`
  /* height: 186px; */
  /* min-width: 224px; */
  display: flex;
  flex-direction: column;
  border: 1px solid #dadada;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 8px;
  background-color: #ffffff;

  &:active {
    border: 1px solid #9970ff;
  }

  &:hover {
    outline: 1px solid #9970ff;
    /* border-radius: 2px; */
  }
`;
export const MainInfo = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const InConnector = styled.div`
  height: 40px;
  width: 4px;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
`;
export const InConnector1 = styled.div`
  height: 8px;
  width: 4px;
  box-sizing: border-box;
  background-color: #dadada;
  background: url(${InConnector1Image});
  background-repeat: no-repeat;
`;
export const Title13 = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  gap: 12px;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: 9px 12px 9px 12px;
`;
export const Title14 = styled.div`
  height: 22px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;
export const Logo = styled.div`
  height: 22px;
  width: 16px;
  display: flex;
  box-sizing: border-box;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
`;
export const IconOutlinedTable = styled.div`
  height: 16px;
  width: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Vector2 = styled.div`
  height: 11px;
  width: 14px;
  /* left: 1px; */
  /* top: 2.5px; */
  /* position: inherit; */
  background: url(${Vector2Image});
`;
export const Name390 = styled(GenericText)`
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  margin: 0px;
  /* width: 39px; */
  font-size: 14px;
  width: 100%;
`;

export const AuditableEntity81 = styled(GenericText)`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
  margin: 0px;
  width: 100%;
  font-weight: 400;
`;

export const ButtonsButton26 = styled.div`
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
export const Content1 = styled.div`
  height: 16px;
  width: 16px;
  display: flex;
  box-sizing: border-box;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;
export const IconOutlinedPlus = styled.div`
  height: 16px;
  width: 16px;
  box-sizing: border-box;
  background: url(${IconOutlinedPlusImage});
  background-repeat: no-repeat;
`;
export const ExitConnector = styled.div`
  height: 40px;
  width: 4px;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
`;
export const ExitConnector1 = styled.div`
  height: 8px;
  width: 4px;
  box-sizing: border-box;
  background-color: #dadada;
  background: url(${ExitConnector1Image});
  background-repeat: no-repeat;
`;
export const Divider2 = styled.div`
  height: 2px;
  width: 224px;
  outline: 1px solid rgba(0, 0, 0, 0.1);
  outline-offset: -0.5px;
`;
export const SecondaryInfo = styled.div`
  /* height: 116px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 4px 8px 4px 8px;
  background-color: #ffffff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
export const CardsInfo = styled.div`
  /* height: 24px; */
  width: 100%;
  display: flex;
  gap: 4px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 2px;
  padding: 4px 8px 4px 8px;
  cursor: pointer;

  &:hover {
    outline: 1px solid #9970ff;
    border-radius: 2px;
  }

  &:active {
    background: #f6f0ff;
    border-radius: 2px;
  }
`;
export const Name391 = styled(GenericText)`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
  margin: 0px;
  font-weight: 400;
  width: auto;
`;

export const Value342 = styled(GenericText)`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.85);
  margin: 0px;
  font-weight: 400;
`;

export const CardsInfo1 = styled.div`
  height: 24px;
  width: 206px;
  display: flex;
  box-sizing: border-box;
  gap: 4px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 2px;
  padding: 2px 8px 2px 8px;
`;
export const Name392 = styled(GenericText)`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
  margin: 0px;
  width: 74px;
  font-weight: 400;
`;

export const Value343 = styled(GenericText)`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.85);
  margin: 0px;
  width: 26px;
  font-weight: 400;
`;

export const CardsInfo2 = styled.div`
  height: 24px;
  width: 206px;
  display: flex;
  box-sizing: border-box;
  gap: 4px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 2px;
  padding: 2px 8px 2px 8px;
`;
export const Name393 = styled(GenericText)`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
  margin: 0px;
  width: 14px;
  font-weight: 400;
`;

export const Value344 = styled(GenericText)`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.85);
  margin: 0px;
  width: 15px;
  font-weight: 400;
`;

export const CardsInfo3 = styled.div`
  height: 24px;
  width: 206px;
  display: flex;
  box-sizing: border-box;
  gap: 4px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 2px;
  padding: 2px 8px 2px 8px;
  cursor: pointer;
`;
export const Name394 = styled(GenericText)`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
  margin: 0px;
  width: 36px;
  font-weight: 400;
`;

export const Value345 = styled(GenericText)`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.85);
  margin: 0px;
  width: 33px;
  font-weight: 400;
`;

export const Action = styled.div`
  height: 28px;
  width: 222px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: center;
  padding: 4px 4px 8px 4px;
`;
export const ButtonsButton22 = styled(GenericCodeButton)`
  position: static;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  height: 16px;
`;

export const SqlServerIcon = styled.img.attrs({
  src: sqlServerIcon,
})`
  width: 16px;
  height: 16px;
`;

export const PostGreSQLIcon = styled.img.attrs({
  src: postGresSqlIcon,
})`
  width: 16px;
  height: 16px;
`;

export const EntityIcon = styled(TableOutlined)`
  width: 16px;
  height: 16px;
`;

export const DatabaseIcon = styled.img.attrs({
  src: databaseIcon,
})`
  width: 16px;
  height: 16px;
`;
