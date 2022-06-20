import React from 'react';

import { Outlet } from 'react-router-dom';

import { Autorization, Content, Body } from './styles';

const AutorizationPage = () => {
  return (
    <Autorization>
      <Body>
        <Content>
          <Outlet />
        </Content>
      </Body>
    </Autorization>
  );
};

export default AutorizationPage;
