import React from 'react';

import { ApartmentOutlined } from '@ant-design/icons';
import GenericCodeButton from '../Button';

import {
  CardsCrud,
  MainInfo1,
  InConnector3,
  InConnector4,
  Title17,
  Title18,
  Logo1,
  IconOutlinedControl,
  Vector7,
  Name395,
  CRUD3,
  ButtonsButton28,
  Content3,
  IconOutlinedPlus2,
  ExitConnector2,
  ExitConnector3,
  Divider6,
  SecondaryInfo1,
  CardsInfo4,
  Name396,
  Value346,
  CardsInfo5,
  Name397,
  Value347,
  Action1,
} from './styles';

const CardsCrudPage = () => {
  return (
    <CardsCrud>
      <MainInfo1>
        <InConnector3>
          <InConnector4 />
        </InConnector3>
        <Title17>
          <Title18>
            <Logo1>
              <IconOutlinedControl>
                <Vector7 />
              </IconOutlinedControl>
            </Logo1>
            <Name395>Name</Name395>
            <CRUD3>(CRUD)</CRUD3>
          </Title18>
          <ButtonsButton28>
            <Content3>
              <IconOutlinedPlus2 />
            </Content3>
          </ButtonsButton28>
        </Title17>
        <ExitConnector2>
          <ExitConnector3 />
        </ExitConnector2>
      </MainInfo1>
      <Divider6 />
      <SecondaryInfo1>
        <CardsInfo4>
          <Name396>EntityName:</Name396>
          <Value346>Null</Value346>
        </CardsInfo4>
        <CardsInfo5>
          <Name397>RepositoryName:</Name397>
          <Value347>Null</Value347>
        </CardsInfo5>
      </SecondaryInfo1>
      <Action1>
        <GenericCodeButton type="text" icon={<ApartmentOutlined />} />
      </Action1>
    </CardsCrud>
  );
};

export default CardsCrudPage;
