import {
  ProjectOutlined,
  PartitionOutlined,
  DatabaseOutlined,
  ApiOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import styled from 'styled-components';
import GenericText from '../../../components/Text';

interface MenuItemProps {
  active: boolean;
}

export const MenuItemAnt = styled(Button)<MenuItemProps>`
  height: 64px;
  width: 68px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding-top: 10px !important;
  background-color: ${props => (props.active ? '#F6F0FF' : '#fff')};
  border: 0;
  margin-right: 2px;

  .anticon + span {
    margin-left: 0px !important;
  }

  &:active {
    background-color: #f6f0ff !important;
  }
`;

export const ProjectOutlinedIcon = styled(ProjectOutlined)`
  color: #444444;
  font-size: 16px;
`;

export const OutlinedPartitionIcon = styled(PartitionOutlined)`
  color: #444444;
  font-size: 16px;
`;

export const DatabaseOutlinedIcon = styled(DatabaseOutlined)`
  color: #444444;
  font-size: 16px;
`;

export const ApiOutlinedIcon = styled(ApiOutlined)`
  color: #444444;
  font-size: 16px;
`;

export const Label = styled(GenericText)`
  font-weight: ${props => (props.active ? '700' : '400')};
  font-size: 12px;
  margin: 0px;
  width: auto;
  color: ${props => (props.active ? '#7346F8' : 'black')};
`;
