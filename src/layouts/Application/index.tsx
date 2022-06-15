import React from 'react';

import { Outlet } from 'react-router-dom';
import LayoutSider1 from '../components/LayoutSider1';
import LayoutHeader3 from '../components/LayoutHeader3';

import { Application, Content, Body, Sider, Header } from './styles';

const ApplicationPage = () => {
  return (
    <Application>
      <Sider>
        <LayoutSider1 />
      </Sider>
      <Body>
        <Header>
          <LayoutHeader3 />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Body>
    </Application>
  );
};

export default ApplicationPage;
