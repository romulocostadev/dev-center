import { Button } from 'antd';
import styled from 'styled-components';
import GenericText from '../Text';

export const SolutionCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  width: 287px;
  height: 64px;
  &:hover {
    -webkit-box-shadow: 2px 8px 20px 6px rgba(132, 93, 249, 0.068);
    box-shadow: 2px 6px 20px 6px rgba(132, 93, 249, 0.068);
    cursor: pointer;
  }
  border-radius: 8px;
`;

export const CardTextContainer = styled.div`
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  padding-right: 0px;
  padding-left: 15px;

  width: 287px;
  height: 64px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
export const CardTitle = styled(GenericText)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  width: 100%;
`;

export const CardData = styled(GenericText)`
  /* Footnote/Regular */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  /* identical to box height, or 167% */

  /* Character/Secondary */

  color: rgba(0, 0, 0, 0.45);
`;

export const CardDropDown = styled.div`
  position: absolute;
  margin-left: 215px;
  margin-bottom: 8px;
  border: 'none' !important;
  transform: rotate(270deg);
`;

export const ButtonDropDown = styled(Button)`
  border: 'none' !important;
  border: 0px;
  font-size: 20px;
  padding: 20px;
  box-shadow: none !important;
`;
