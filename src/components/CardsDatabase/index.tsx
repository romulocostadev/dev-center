import React from 'react';

import { PlusOutlined } from '@ant-design/icons';
import GenericCodeButton from '../Button';

import {
  CardsDatabase,
  Title19,
  InConnector5,
  Title20,
  Logo2,
  PostGreSQL,
  Group2069859144864,
  Group,
  Vector8,
  Vector9,
  Vector10,
  Vector11,
  Customer243,
  Database681,
  ExitConnector4,
} from './styles';

const CardsDatabasePage = () => {
  return (
    <CardsDatabase>
      <Title19>
        <InConnector5 />
        <Title20>
          <Logo2>
            <PostGreSQL>
              <Group2069859144864>
                <Group>
                  <Vector8 />
                </Group>
                <Vector9 />
                <Vector10 />
                <Vector11 />
              </Group2069859144864>
            </PostGreSQL>
          </Logo2>
          <Customer243>Customer</Customer243>
          <Database681>(Database)</Database681>
        </Title20>
        <GenericCodeButton type="text" icon={<PlusOutlined />} />
        <ExitConnector4 />
      </Title19>
    </CardsDatabase>
  );
};

export default CardsDatabasePage;
