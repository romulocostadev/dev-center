import React from 'react';

import {
  LayoutHeader1,
  Header1,
  Beatrix1,
  Vector14840549090884,
  File,
  TypeWrapper,
  DBInstances,
  DividerWrapper,
  TextComponent,
  Icon2,
  PostGreSQL,
  Group2069859144864,
  Group,
  Vector4,
  Vector5,
  Vector6,
  Vector7,
  FileWrapper,
  PostgreSQL,
  InstanceComponenticonoutlineddir,
  Vector8,
  Publish,
  Divider1,
} from './styles';

const LayoutHeaderPage = () => {
  function handlePublish() {
    console.log('foo');
  }

  return (
    <LayoutHeader1>
      <Header1>
        <Beatrix1>
          <Vector14840549090884 />
        </Beatrix1>
        <File>
          <TypeWrapper>
            <DBInstances>DBInstances</DBInstances>
          </TypeWrapper>
          <DividerWrapper>
            <TextComponent>/</TextComponent>
          </DividerWrapper>
          <Icon2>
            <PostGreSQL>
              <Group2069859144864>
                <Group>
                  <Vector4 />
                </Group>
                <Vector5 />
                <Vector6 />
                <Vector7 />
              </Group2069859144864>
            </PostGreSQL>
          </Icon2>
          <FileWrapper>
            <PostgreSQL>PostgreSQL</PostgreSQL>
            <InstanceComponenticonoutlineddir>
              <Vector8 />
            </InstanceComponenticonoutlineddir>
          </FileWrapper>
        </File>
        <Publish type="primary">Publish</Publish>
      </Header1>
      <Divider1 />
    </LayoutHeader1>
  );
};

export default LayoutHeaderPage;
