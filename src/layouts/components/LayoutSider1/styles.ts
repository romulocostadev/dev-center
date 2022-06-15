import styled from 'styled-components'

import IconOutlinedProjectImage from './assets/I1531_153732_918_110211.png' 
import IconOutlinedPartitionImage from './assets/I1531_153733_918_110211.png' 
import IconOutlinedDatabaseImage from './assets/I1531_153734_1189_126575.png' 
import IconOutlinedApiImage from './assets/I1531_153735_918_110211.png' 
import IconImage from './assets/I1531_153737_918_110211.png' 
import Icon1Image from './assets/I1531_153738_918_110211.png' 

export const LayoutSider = styled.div`
height: 100%;
width: 68px;
display: flex;
box-sizing: border-box;
justify-content: flex-start;
align-items: flex-start;
  background-color: #9A71FF;
`;
export const MenuGroup = styled.div`
height: 100%;
width: 68px;
display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: space-between;
align-items: flex-start;
  background-color: #FFFFFF;
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
gap: 8.0px;
justify-content: center;
align-items: center;
      padding: 10.0px;
  background-color: #FFFFFF;
`;
export const IconOutlinedProject = styled.div`
height: 16px;
width: 16px;
box-sizing: border-box;
  background: url(${IconOutlinedProjectImage});
  background-repeat: no-repeat;
`;
import GenericText from '../../../components/Text'
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
gap: 8.0px;
justify-content: center;
align-items: center;
    padding: 10.0px;
  background-color: #FFFFFF;
`;
export const IconOutlinedPartition = styled.div`
height: 16px;
width: 16px;
box-sizing: border-box;
  background: url(${IconOutlinedPartitionImage});
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
gap: 8.0px;
justify-content: center;
align-items: center;
  padding: 10.0px;
  background-color: #F7F1FF;
`;
export const IconOutlinedDatabase = styled.div`
height: 16px;
width: 16px;
box-sizing: border-box;
  background: url(${IconOutlinedDatabaseImage});
  background-repeat: no-repeat;
`;
export const Label2 = styled(GenericText)`
    font-size: 12px;
    color: #7447F9;
    margin: 0px;
  width: 26px;
`;

export const MenuItem3 = styled.div`
height: 64px;
width: 68px;
display: flex;
flex-direction: column;
box-sizing: border-box;
gap: 8.0px;
justify-content: center;
align-items: center;
padding: 10.0px;
  background-color: #FFFFFF;
`;
export const IconOutlinedApi = styled.div`
height: 16px;
width: 16px;
box-sizing: border-box;
  background: url(${IconOutlinedApiImage});
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
gap: 8.0px;
justify-content: center;
align-items: center;
    padding: 10.0px;
  background-color: #FFFFFF;
`;
export const Icon = styled.div`
height: 16px;
width: 16px;
box-sizing: border-box;
  background: url(${IconImage});
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
gap: 8.0px;
justify-content: center;
align-items: center;
  padding: 10.0px;
  background-color: #FFFFFF;
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
outline: 1px solid rgba(0, 0, 0, 0.1) ;
outline-offset: -0.5px;
`;
