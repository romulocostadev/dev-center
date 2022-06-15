import React from 'react';

import Content01 from './components/Content01';
import Content02 from './components/Content02';

import {
  HomeContent,
  PageHeader,
  Home,
  TabGroupPane,
  TabGroup,
} from './styles';

const HomeContentPage = () => {
  return (
    <HomeContent>
      <PageHeader>
        <Home>Home</Home>
      </PageHeader>
      <TabGroup tabPosition="top" type="line" size="large">
        <TabGroupPane tab="Solutions" key="0">
          <Content01 />
        </TabGroupPane>
        <TabGroupPane tab="Templates" key="1">
          <Content02 />
        </TabGroupPane>
      </TabGroup>
    </HomeContent>
  );
};

export default HomeContentPage;
