import React from 'react';

import { Outlet } from 'react-router-dom';
import LayoutHeader1 from '../components/LayoutHeader1';

import { Home1, Content, Body, Header } from './styles';

const HomePage = () => {
  return (
    <Home1>
      <Body>
        <Header>
          <LayoutHeader1 />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Body>
    </Home1>
  );
};

export default HomePage;
