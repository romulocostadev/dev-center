/* eslint-disable no-shadow */
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
  Name390,
  AuditableEntity81,
  ExitConnector,
  ExitConnector1,
  SecondaryInfo,
  CardsInfo,
  Name391,
  Value342,
  SqlServerIcon,
  PostGreSQLIcon,
  EntityIcon,
  DatabaseIcon,
} from './styles';
import { useAppDispatch } from '../../store/reduxHooks';
import { updatePropertiesActiveWorkSpace } from '../../store/solution/solutionSlice';

function CardsAuditableEntityPage({ data }: any) {
  let elementType = '';
  let elementName = '';
  let type = '';
  let entityType = '';

  const properties = data.find(a => a.propertyName === 'properties');
  const dispatch = useAppDispatch();

  data.map(foo => {
    if (foo.propertyName === 'name') {
      elementName = foo.propertyValue;
    }
    if (foo.propertyName === 'elementType') {
      elementType = foo.propertyValue;
    }
    if (foo.propertyName === 'type') {
      type = foo.propertyValue;
    }
    if (foo.propertyName === 'entityType') {
      entityType = foo.propertyValue;
    }
  });

  const handleIcon = () => {
    if (elementType === 'dbInstance') {
      if (type === 'PostgreSql') {
        return (
          <IconOutlinedTable>
            <PostGreSQLIcon />
          </IconOutlinedTable>
        );
      }

      if (type === 'SqlServer') {
        return (
          <IconOutlinedTable>
            <SqlServerIcon />
          </IconOutlinedTable>
        );
      }
    }

    if (elementType === 'entity' && entityType !== 'default') {
      return (
        <IconOutlinedTable>
          <EntityIcon />
        </IconOutlinedTable>
      );
    }

    if (elementType === 'database') {
      return (
        <IconOutlinedTable>
          <DatabaseIcon />
        </IconOutlinedTable>
      );
    }
  };

  const handleColumns = (columns): any => {
    let name = '';
    let type = '';

    const column: { name: string; type: string }[] = [];

    columns.map((prop): any => {
      if (prop.propertyName === 'name') {
        name = prop.propertyValue;
      }
      if (prop.propertyName === 'type') {
        type = prop.propertyValue;
      }
      if (name && type) {
        column.push({ name, type });
        name = '';
        type = '';
      }
    });
    return column;
  };

  const handleSelectedColumn = column => {
    const properties = data.find(a => a.propertyName === 'properties');
    let columnProps = [];
    const teste = properties.propertyValue.map(prop => {
      prop.map(propColumn => {
        if (propColumn.propertyValue === column.name) {
          columnProps = prop;
        }
      });
    });
    dispatch(updatePropertiesActiveWorkSpace(columnProps));
  };

  return (
    <CardsAuditableEntity>
      <Handle type="target" position={Position.Top} />
      <MainInfo>
        <InConnector>
          <InConnector1 />
        </InConnector>
        <Title13>
          <Title14>
            <Logo>{handleIcon()}</Logo>
            <Name390>{elementName}</Name390>
            {elementType === 'entity' && (
              <AuditableEntity81>({entityType} Entity)</AuditableEntity81>
            )}
          </Title14>
        </Title13>
        <ExitConnector>
          <ExitConnector1 />
        </ExitConnector>
      </MainInfo>
      {properties && (
        <SecondaryInfo style={{ zIndex: 10000000 }}>
          {properties?.propertyValue?.map((propValue): any => {
            const columns = handleColumns(propValue);
            return columns.map(column => {
              if (column) {
                return (
                  <CardsInfo onClick={() => handleSelectedColumn(column)}>
                    <Name391>{column?.name}: </Name391>
                    <Value342>{column?.type}</Value342>
                  </CardsInfo>
                );
              }
            });
          })}
        </SecondaryInfo>
      )}
    </CardsAuditableEntity>
  );
}

export default CardsAuditableEntityPage;
