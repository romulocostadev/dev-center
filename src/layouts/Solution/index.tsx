import React from 'react';

import { Outlet } from 'react-router-dom';
import LayoutHeader1 from '../components/LayoutHeader1';

import { Solution, Content, Body, Header, BackgroundLayout } from './styles';

const SolutionPage = () => {
  return (
    <Solution>
      <Body>
        <Header>
          <LayoutHeader1 />
        </Header>
        <Content>
          <BackgroundLayout />
          <Outlet />
        </Content>
      </Body>
    </Solution>
  );
};

export default SolutionPage;
