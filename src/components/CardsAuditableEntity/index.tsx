import React from 'react';

import { useNavigate } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import GenericCodeButton from '../Button';

import {
  CardsAuditableEntity,
  MainInfo,
  InConnector,
  InConnector1,
  Title13,
  Title14,
  Logo,
  IconOutlinedTable,
  Vector2,
  Name390,
  AuditableEntity81,
  ButtonsButton26,
  Content1,
  IconOutlinedPlus,
  ExitConnector,
  ExitConnector1,
  Divider2,
  SecondaryInfo,
  CardsInfo,
  Name391,
  Value342,
  CardsInfo1,
  Name392,
  Value343,
  CardsInfo2,
  Name393,
  Value344,
  CardsInfo3,
  Name394,
  Value345,
  Action,
} from './styles';

const CardsAuditableEntityPage = () => {
  let navigate = useNavigate();

  const navigateToSelectingEntity = () => {
    navigate('/selecting-entity');
  };

  return (
    <CardsAuditableEntity>
      <MainInfo>
        <InConnector>
          <InConnector1 />
        </InConnector>
        <Title13 onClick={navigateToSelectingEntity}>
          <Title14>
            <Logo>
              <IconOutlinedTable>
                <Vector2 />
              </IconOutlinedTable>
            </Logo>
            <Name390>Name</Name390>
            <AuditableEntity81>(Auditable Entity)</AuditableEntity81>
          </Title14>
          <ButtonsButton26>
            <Content1>
              <IconOutlinedPlus />
            </Content1>
          </ButtonsButton26>
        </Title13>
        <ExitConnector>
          <ExitConnector1 />
        </ExitConnector>
      </MainInfo>
      <Divider2 />
      <SecondaryInfo>
        <CardsInfo>
          <Name391>CreatedUTC:</Name391>
          <Value342>Date</Value342>
        </CardsInfo>
        <CardsInfo1>
          <Name392>ModifiedUTC:</Name392>
          <Value343>Date</Value343>
        </CardsInfo1>
        <CardsInfo2>
          <Name393>Id:</Name393>
          <Value344>Int</Value344>
        </CardsInfo2>
        <CardsInfo3>
          <Name394>Name:</Name394>
          <Value345>String</Value345>
        </CardsInfo3>
      </SecondaryInfo>
      <Action>
        <GenericCodeButton type="text" icon={<PlusOutlined />} />
      </Action>
    </CardsAuditableEntity>
  );
};

export default CardsAuditableEntityPage;
