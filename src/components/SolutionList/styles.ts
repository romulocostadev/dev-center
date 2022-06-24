import styled from 'styled-components';
import GenericText from '../Text';
import GenericCodeButton from '../Button';

export const MySolutions = styled.div`
  max-width: 1200px;
  display: flex;
  box-sizing: border-box;
  gap: 17px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const TitleContainer = styled.div`
  justify-content: space-between;
  height: 38px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
`;
export const Solutions = styled(GenericText)`
  font-size: 30px;
  margin: 0px;
  width: 128px;
  align-items: flex-start;
`;

export const NewSolutionButton = styled(GenericCodeButton)`
  width: 114px;
  height: 32px;
  border-radius: 2px;
  height: 32px;
  align-items: flex-end;
`;

export const Sorter = styled.div`
  height: 22px;
  width: 1200px;
  display: flex;
  box-sizing: border-box;
  gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const Sortby = styled(GenericText)`
  font-weight: 400;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  margin: 0px;
  width: 50px;
`;
interface SortItemProps {
  active: boolean;
}
export const Name = styled(GenericText)<SortItemProps>`
  font-weight: 400;
  font-size: 14px;
  margin: 0px;
  width: 40px;
  &:hover {
    cursor: pointer;
  }
  color: ${props => (props.active ? '#7447f9' : 'black')};
`;

export const Creation = styled(GenericText)<SortItemProps>`
  font-weight: 400;
  font-size: 14px;
  margin: 0px;
  width: 55px;
  &:hover {
    cursor: pointer;
  }
  color: ${props => (props.active ? '#7447f9' : 'black')};
`;

export const Lastmodified = styled(GenericText)<SortItemProps>`
  font-weight: 400;
  font-size: 14px;
  margin: 0px;
  width: 82px;
  &:hover {
    cursor: pointer;
  }
  color: ${props => (props.active ? '#7447f9' : 'black')};
`;
