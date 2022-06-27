import styled from 'styled-components';
import GenericText from '../Text';

export const SolutionCard = styled.div`
  height: 242px;
  width: 226px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 8px;
  padding: 12px;
  background-color: #ffffff;
  &:hover {
    -webkit-box-shadow: 2px 6px 20px 6px rgba(132, 93, 249, 0.068);
    box-shadow: 2px 6px 20px 6px rgba(132, 93, 249, 0.068);
    cursor: pointer;
  }
`;
export const ProjectLogo = styled.div`
  height: 100px;
  width: 200px;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 8px;
  background-color: #f6f6f6;
`;
export const CardTextContainer = styled.div`
  height: 100px;
  width: 200px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const CardTitle = styled(GenericText)`
  font-size: 14px;
  margin: 0px;
  width: 201px;
`;

export const CardData = styled(GenericText)`
  font-weight: 400;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
  margin: 0px;
  width: 201px;
`;
