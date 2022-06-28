import React, { memo } from 'react';

import { useNavigate } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import { Handle, Position } from 'react-flow-renderer';
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
  SqlServerIcon,
  PostGreSQLIcon,
  EntityIcon,
  DatabaseIcon,
} from './styles';

function CardsAuditableEntityPage({ data }: any) {
  console.log(data, 'fff');

  const handleIcon = () => {
    if (data.elementType === 'dbInstance') {
      if (data.type === 'PostgreSql') {
        return (
          <IconOutlinedTable>
            <PostGreSQLIcon />
          </IconOutlinedTable>
        );
      }

      if (data.type === 'SqlServer') {
        return (
          <IconOutlinedTable>
            <SqlServerIcon />
          </IconOutlinedTable>
        );
      }
    }

    if (data.elementType === 'entity' && data.entityType !== 'default') {
      return (
        <IconOutlinedTable>
          <EntityIcon />
        </IconOutlinedTable>
      );
    }

    if (data.elementType === 'database') {
      return (
        <IconOutlinedTable>
          <DatabaseIcon />
        </IconOutlinedTable>
      );
    }
  };

  return (
    <CardsAuditableEntity>
      <Handle type="target" position={Position.Top} />
      <MainInfo>
        <InConnector>
          <InConnector1 />
        </InConnector>
        <Title13 onClick={() => console.log(data)}>
          <Title14>
            <Logo>{handleIcon()}</Logo>
            <Name390>{data.title}</Name390>
            {data.elementType === 'entity' && (
              <AuditableEntity81>{data?.entityType} Entity</AuditableEntity81>
            )}
          </Title14>
        </Title13>
        <ExitConnector>
          <ExitConnector1 />
        </ExitConnector>
      </MainInfo>
      {data.properties && (
        <SecondaryInfo style={{ zIndex: 10000000 }}>
          {data?.properties?.map((column: any) => {
            return (
              <CardsInfo onClick={() => console.log('coluna', column)}>
                <Name391>{column.title}:</Name391>
                <Value342>{column.type}</Value342>
              </CardsInfo>
            );
          })}
          {/* <CardsInfo1>
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
          </CardsInfo3> */}
        </SecondaryInfo>
      )}
      {/* <Action>
        <GenericCodeButton type="text" icon={<PlusOutlined />} />
      </Action> */}
    </CardsAuditableEntity>
  );
}

export default CardsAuditableEntityPage;
