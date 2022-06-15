import styled from 'styled-components'

import {Tabs} from 'antd'

export const HomeContent = styled.div`
height: 100%;
width: 1920px;
box-sizing: border-box;
  background-color: #FFFFFF;
`;
export const PageHeader = styled.div`
height: 86px;
width: 1920px;
left: 0px;
top: 0px;
position: absolute;
display: flex;
box-sizing: border-box;
gap: 24.0px;
justify-content: flex-start;
align-items: flex-start;
  padding: 24.0px 360.0px 24.0px 360.0px;
  background-color: #FFFFFF;
`;
import GenericText from '../../components/Text'
export const Home = styled(GenericText)`
      font-size: 30px;
      margin: 0px;
    width: 82px;
`;

export const TabGroup = styled(Tabs).attrs({
  tabBarStyle: {
    padding:'0px 360.0px 0px 360.0px',
  }})`
  width: 1920px;
`;

export const TabGroupPane = styled((Tabs.TabPane))`
`;

