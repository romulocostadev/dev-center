import React from 'react';

import { Outlet } from 'react-router-dom';
import LayoutSider5 from '../components/LayoutSider5';
import LayoutHeader5 from '../components/LayoutHeader5';

import { ApplicationUpdated, Content, Body, Sider, Header } from './styles';

const ApplicationUpdatedPage = () => {
  return (
    <ApplicationUpdated>
      <Sider>
        <LayoutSider5 />
      </Sider>
      <Body>
        <Header>
          <LayoutHeader5 />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Body>
    </ApplicationUpdated>
  );
};

export default ApplicationUpdatedPage;
