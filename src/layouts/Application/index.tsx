import React from 'react';

import { Outlet } from 'react-router-dom';
import LayoutSider1 from '../components/LayoutSider1';
import LayoutHeader3 from '../components/LayoutHeader3';

import { Application, Content, Body, Sider, Header } from './styles';

const ApplicationPage = () => {
  return (
    <Application>
      <Header>
        <LayoutHeader3 />
      </Header>
      <Body>
        {/* <div> */}
        <Sider>
          <LayoutSider1 />
        </Sider>
        <Content>
          <Outlet />
        </Content>
        {/* </div> */}
      </Body>
    </Application>
  );
};

export default ApplicationPage;
