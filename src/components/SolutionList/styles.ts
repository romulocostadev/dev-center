import styled from 'styled-components';
import GenericText from '../Text';
import GenericCodeButton from '../Button';

export const MySolutions = styled.div`
  height: 240px;
  max-width: 1200px;
  display: flex;
  box-sizing: border-box;
  gap: 24px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const TitleContainer = styled.div`
  justify-content: space-between;
  height: 38px;
  width: 1200px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
`;
export const Solutions = styled(GenericText)`
  font-size: 30px;
  margin: 0px;
  width: 128px;
`;

export const NewSolutionButton = styled(GenericCodeButton)`
  width: 114px;
  height: 32px;
  border-radius: 2px;
  height: 32px;
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
  width: 45px;
`;

export const Name = styled(GenericText)`
  font-weight: 400;
  font-size: 14px;
  color: #7447f9;
  margin: 0px;
  width: 37px;
`;

export const Lastmodified = styled(GenericText)`
  font-weight: 400;
  font-size: 14px;
  margin: 0px;
  width: 82px;
`;
