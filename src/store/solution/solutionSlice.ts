import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import { CarryOutOutlined, CiOutlined } from '@ant-design/icons';
import type { RootState } from '../store';
import { api as solutionApi, SolutionsResponse } from '../../services/solution';
import rootReducer from '../rootReducer';

interface SolutionProps {
  solutions: SolutionsResponse[];
  solution: any;
  activeWorkSpace: any;
}

const initialState: SolutionProps = {
  solutions: [],
  solution: {
    key: '1',
    title: 'SunChemical',
    rootNamespace: 'SunChemical.InkControl',
    children: [
      {
        key: '2',
        title: 'Database',
        children: [
          {
            key: '3',
            title: 'DbInstances',
            nodes: [
              {
                id: 'dbi-1',
                type: 'customNode',
                data: [
                  {
                    displayPropertyName: null,
                    propertyName: 'elementType',
                    propertyValue: 'dbInstance',
                    formType: null,
                    visible: false,
                    readonly: false,
                  },
                  {
                    displayPropertyName: 'Title',
                    propertyName: 'name',
                    propertyValue: 'PostgreSqlInstance',
                    formType: 'input',
                    visible: true,
                    readonly: false,
                  },
                  {
                    displayPropertyName: 'Type',
                    propertyName: 'type',
                    propertyValue: 'PostgreSql',
                    formType: 'input',
                    visible: true,
                    readonly: true,
                  },
                  {
                    displayPropertyName: null,
                    propertyName: 'isRelationalDb',
                    propertyValue: true,
                    formType: null,
                    visible: false,
                    readonly: false,
                  },
                ],
                position: {
                  x: 0,
                  y: 50,
                },
                sourcePosition: 'right',
              },
              {
                id: 'dbi-2',
                type: 'customNode',
                data: [
                  {
                    displayPropertyName: null,
                    propertyName: 'elementType',
                    propertyValue: 'dbInstance',
                    formType: null,
                    visible: false,
                    readonly: false,
                  },
                  {
                    displayPropertyName: 'Title',
                    propertyName: 'name',
                    propertyValue: 'SqlServerInstance',
                    formType: 'input',
                    visible: true,
                    readonly: false,
                  },
                  {
                    displayPropertyName: 'Type',
                    propertyName: 'type',
                    propertyValue: 'SqlServer',
                    formType: 'input',
                    visible: true,
                    readonly: true,
                  },
                  {
                    displayPropertyName: null,
                    propertyName: 'isRelationalDb',
                    propertyValue: true,
                    formType: null,
                    visible: false,
                    readonly: false,
                  },
                ],
                position: {
                  x: 0,
                  y: 50,
                },
                sourcePosition: 'right',
              },
            ],
            children: [
              {
                key: '4',
                title: 'PostgreSqlInstance',
                nodes: [
                  {
                    id: 'db-1',
                    type: 'customNode',
                    data: [
                      {
                        displayPropertyName: null,
                        propertyName: 'elementType',
                        propertyValue: 'database',
                        formType: null,
                        visible: false,
                        readonly: false,
                      },
                      {
                        displayPropertyName: 'Title',
                        propertyName: 'name',
                        propertyValue: 'OrderDb',
                        formType: 'input',
                        visible: true,
                        readonly: false,
                      },
                      {
                        displayPropertyName: 'Default Schema',
                        propertyName: 'defaultSchema',
                        propertyValue: 'Order',
                        formType: 'input',
                        visible: true,
                        readonly: false,
                      },
                      {
                        displayPropertyName: 'Add Identity Tables?',
                        propertyName: 'addIdentityTables',
                        propertyValue: false,
                        formType: 'checkbox',
                        visible: true,
                        readonly: false,
                      },
                      {
                        displayPropertyName: null,
                        propertyName: 'refDbInstanceId',
                        propertyValue: 'dbi-1',
                        formType: null,
                        visible: false,
                        readonly: false,
                      },
                    ],
                    position: {
                      x: 0,
                      y: 50,
                    },
                    sourcePosition: 'right',
                  },
                  {
                    id: 'db-3',
                    type: 'customNode',
                    data: [
                      {
                        displayPropertyName: null,
                        propertyName: 'elementType',
                        propertyValue: 'database',
                        formType: null,
                        visible: false,
                        readonly: false,
                      },
                      {
                        displayPropertyName: 'Title',
                        propertyName: 'name',
                        propertyValue: 'CustomerDb',
                        formType: 'input',
                        visible: true,
                        readonly: false,
                      },
                      {
                        displayPropertyName: 'Default Schema',
                        propertyName: 'defaultSchema',
                        propertyValue: null,
                        formType: 'input',
                        visible: true,
                        readonly: false,
                      },
                      {
                        displayPropertyName: 'Add Identity Tables?',
                        propertyName: 'addIdentityTables',
                        propertyValue: false,
                        formType: 'checkbox',
                        visible: true,
                        readonly: false,
                      },
                      {
                        displayPropertyName: null,
                        propertyName: 'refDbInstanceId',
                        propertyValue: 'dbi-1',
                        formType: null,
                        visible: false,
                        readonly: false,
                      },
                    ],
                    position: {
                      x: 0,
                      y: 50,
                    },
                    sourcePosition: 'right',
                  },
                ],
                children: [
                  {
                    key: '5',
                    title: 'OrderDb',
                    nodes: [
                      {
                        id: 'ent-1',
                        type: 'customNode',
                        position: { x: 0, y: 0 },
                        data: [
                          {
                            displayPropertyName: null,
                            propertyName: 'elementType',
                            propertyValue: 'entity',
                            formType: null,
                            visible: false,
                            readonly: false,
                          },
                          {
                            displayPropertyName: 'Title',
                            propertyName: 'name',
                            propertyValue: 'Order',
                            formType: 'input',
                            visible: true,
                            readonly: false,
                          },
                          {
                            displayPropertyName: 'Key Type',
                            propertyName: 'keyType',
                            propertyValue: 'int',
                            formType: 'select',
                            visible: true,
                            readonly: false,
                          },
                          {
                            displayPropertyName: null,
                            propertyName: 'entityType',
                            propertyValue: 'Auditable',
                            formType: 'input',
                            visible: false,
                            readonly: false,
                          },
                          {
                            displayPropertyName: null,
                            propertyName: 'refDatabaseId',
                            propertyValue: 'db-1',
                            formType: null,
                            visible: false,
                            readonly: false,
                          },
                          {
                            displayPropertyName: 'Properties',
                            propertyName: 'properties',
                            propertyValue: [
                              [
                                {
                                  displayPropertyName: 'Title',
                                  propertyName: 'name',
                                  propertyValue: 'Id',
                                  formType: 'input',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Type',
                                  propertyName: 'type',
                                  propertyValue: 'int',
                                  formType: 'select',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Is Array?',
                                  propertyName: 'isArray',
                                  propertyValue: false,
                                  formType: 'checkbox',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Is Nullable?',
                                  propertyName: 'isNullable',
                                  propertyValue: false,
                                  formType: 'checkbox',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Default Value',
                                  propertyName: 'defaultValue',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName:
                                    'Check Exists Referenced Entity',
                                  propertyName: 'checkReferencedEntityId',
                                  propertyValue: null,
                                  formType: 'checkbox',
                                  visible: true,
                                  readonly: true,
                                },
                              ],
                              [
                                {
                                  displayPropertyName: 'Title',
                                  propertyName: 'name',
                                  propertyValue: 'ShippingCost',
                                  formType: 'input',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Type',
                                  propertyName: 'type',
                                  propertyValue: 'double',
                                  formType: 'select',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Is Array?',
                                  propertyName: 'isArray',
                                  propertyValue: false,
                                  formType: 'checkbox',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Is Nullable?',
                                  propertyName: 'isNullable',
                                  propertyValue: true,
                                  formType: 'checkbox',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Default Value',
                                  propertyName: 'defaultValue',
                                  propertyValue: 'Value(@ConstDouble::10)',
                                  formType: 'input',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName:
                                    'Check Exists Referenced Entity',
                                  propertyName: 'checkReferencedEntityId',
                                  propertyValue: null,
                                  formType: 'checkbox',
                                  visible: true,
                                  readonly: true,
                                },
                              ],
                              [
                                {
                                  displayPropertyName: 'Title',
                                  propertyName: 'name',
                                  propertyValue: 'CustomerId',
                                  formType: 'input',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Type',
                                  propertyName: 'type',
                                  propertyValue: 'int',
                                  formType: 'select',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Is Array?',
                                  propertyName: 'isArray',
                                  propertyValue: false,
                                  formType: 'checkbox',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Is Nullable?',
                                  propertyName: 'isNullable',
                                  propertyValue: false,
                                  formType: 'checkbox',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Default Value',
                                  propertyName: 'defaultValue',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName:
                                    'Check Exists Referenced Entity',
                                  propertyName: 'checkReferencedEntityId',
                                  propertyValue: null,
                                  formType: 'checkbox',
                                  visible: true,
                                  readonly: true,
                                },
                              ],
                              [
                                {
                                  displayPropertyName: 'Title',
                                  propertyName: 'name',
                                  propertyValue: 'CreatedUtc',
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Type',
                                  propertyName: 'type',
                                  propertyValue: 'DateTimeOffset',
                                  formType: 'select',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Is Array?',
                                  propertyName: 'isArray',
                                  propertyValue: false,
                                  formType: 'checkbox',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Is Nullable?',
                                  propertyName: 'isNullable',
                                  propertyValue: false,
                                  formType: 'checkbox',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Default Value',
                                  propertyName: 'defaultValue',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName:
                                    'Check Exists Referenced Entity',
                                  propertyName: 'checkReferencedEntityId',
                                  propertyValue: null,
                                  formType: 'checkbox',
                                  visible: true,
                                  readonly: true,
                                },
                              ],
                              [
                                {
                                  displayPropertyName: 'Title',
                                  propertyName: 'name',
                                  propertyValue: 'ModifiedUtc',
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Type',
                                  propertyName: 'type',
                                  propertyValue: 'DateTimeOffset',
                                  formType: 'select',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Is Array?',
                                  propertyName: 'isArray',
                                  propertyValue: false,
                                  formType: 'checkbox',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Is Nullable?',
                                  propertyName: 'isNullable',
                                  propertyValue: false,
                                  formType: 'checkbox',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Default Value',
                                  propertyName: 'defaultValue',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName:
                                    'Check Exists Referenced Entity',
                                  propertyName: 'checkReferencedEntityId',
                                  propertyValue: null,
                                  formType: 'checkbox',
                                  visible: true,
                                  readonly: true,
                                },
                              ],
                            ],
                            formType: null,
                            visible: false,
                            readonly: false,
                          },
                        ],
                        style: {
                          border: '1px solid #777',
                          padding: 10,
                        },
                      },
                    ],
                    children: [
                      {
                        id: '6',
                        title: 'Order',
                      },
                    ],
                  },
                  {
                    key: '7',
                    title: 'CustomerDb',
                    nodes: [
                      {
                        id: 'ent-2',
                        type: 'customNode',
                        data: [
                          {
                            displayPropertyName: null,
                            propertyName: 'elementType',
                            propertyValue: 'entity',
                            formType: null,
                            visible: false,
                            readonly: false,
                          },
                          {
                            displayPropertyName: 'Title',
                            propertyName: 'name',
                            propertyValue: 'Customer',
                            formType: 'input',
                            visible: true,
                            readonly: false,
                          },
                          {
                            displayPropertyName: 'Key Type',
                            propertyName: 'keyType',
                            propertyValue: 'int',
                            formType: 'select',
                            visible: true,
                            readonly: false,
                          },
                          {
                            displayPropertyName: null,
                            propertyName: 'entityType',
                            propertyValue: 'Auditable',
                            formType: 'input',
                            visible: false,
                            readonly: false,
                          },
                          {
                            displayPropertyName: null,
                            propertyName: 'refDatabaseId',
                            propertyValue: 'db-3',
                            formType: null,
                            visible: false,
                            readonly: false,
                          },
                          {
                            displayPropertyName: 'Properties',
                            propertyName: 'properties',
                            propertyValue: [
                              [
                                {
                                  displayPropertyName: 'Title',
                                  propertyName: 'name',
                                  propertyValue: 'Id',
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Type',
                                  propertyName: 'type',
                                  propertyValue: 'int',
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Is Array?',
                                  propertyName: 'isArray',
                                  propertyValue: false,
                                  formType: 'select',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Is Nullable?',
                                  propertyName: 'isNullable',
                                  propertyValue: false,
                                  formType: 'select',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Default Value',
                                  propertyName: 'defaultValue',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName:
                                    'Check Exists Referenced Entity',
                                  propertyName: 'checkReferencedEntityId',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                              ],
                              [
                                {
                                  displayPropertyName: 'Title',
                                  propertyName: 'name',
                                  propertyValue: 'Name',
                                  formType: 'input',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Type',
                                  propertyName: 'type',
                                  propertyValue: 'string',
                                  formType: 'checkbox',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Is Array?',
                                  propertyName: 'isArray',
                                  propertyValue: false,
                                  formType: 'select',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Is Nullable?',
                                  propertyName: 'isNullable',
                                  propertyValue: false,
                                  formType: 'select',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Default Value',
                                  propertyName: 'defaultValue',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName:
                                    'Check Exists Referenced Entity',
                                  propertyName: 'checkReferencedEntityId',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                              ],
                              [
                                {
                                  displayPropertyName: 'Title',
                                  propertyName: 'name',
                                  propertyValue: 'Metadata',
                                  formType: 'input',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Type',
                                  propertyName: 'type',
                                  propertyValue: 'Metadata',
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Is Array?',
                                  propertyName: 'isArray',
                                  propertyValue: false,
                                  formType: 'select',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Is Nullable?',
                                  propertyName: 'isNullable',
                                  propertyValue: false,
                                  formType: 'select',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Default Value',
                                  propertyName: 'defaultValue',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName:
                                    'Check Exists Referenced Entity',
                                  propertyName: 'checkReferencedEntityId',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                              ],
                              [
                                {
                                  displayPropertyName: 'Title',
                                  propertyName: 'name',
                                  propertyValue: 'CustomerAddressId',
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Type',
                                  propertyName: 'type',
                                  propertyValue: 'int',
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Is Array?',
                                  propertyName: 'isArray',
                                  propertyValue: false,
                                  formType: 'select',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Is Nullable?',
                                  propertyName: 'isNullable',
                                  propertyValue: false,
                                  formType: 'select',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Default Value',
                                  propertyName: 'defaultValue',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName:
                                    'Check Exists Referenced Entity',
                                  propertyName: 'checkReferencedEntityId',
                                  propertyValue: 'ent-4',
                                  formType: 'checkbox',
                                  visible: true,
                                  readonly: false,
                                },
                              ],
                              [
                                {
                                  displayPropertyName: 'Title',
                                  propertyName: 'name',
                                  propertyValue: 'CustomerAddress',
                                  formType: 'input',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Type',
                                  propertyName: 'type',
                                  propertyValue: 'CustomerAddress',
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Is Array?',
                                  propertyName: 'isArray',
                                  propertyValue: false,
                                  formType: 'select',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Is Nullable?',
                                  propertyName: 'isNullable',
                                  propertyValue: false,
                                  formType: 'select',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Default Value',
                                  propertyName: 'defaultValue',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName:
                                    'Check Exists Referenced Entity',
                                  propertyName: 'checkReferencedEntityId',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                              ],
                              [
                                {
                                  displayPropertyName: 'Title',
                                  propertyName: 'name',
                                  propertyValue: 'CreatedUtc',
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Type',
                                  propertyName: 'type',
                                  propertyValue: 'DateTimeOffset',
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Is Array?',
                                  propertyName: 'isArray',
                                  propertyValue: false,
                                  formType: 'select',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Is Nullable?',
                                  propertyName: 'isNullable',
                                  propertyValue: false,
                                  formType: 'select',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Default Value',
                                  propertyName: 'defaultValue',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName:
                                    'Check Exists Referenced Entity',
                                  propertyName: 'checkReferencedEntityId',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                              ],
                              [
                                {
                                  displayPropertyName: 'Title',
                                  propertyName: 'name',
                                  propertyValue: 'ModifiedUtc',
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Type',
                                  propertyName: 'type',
                                  propertyValue: 'DateTimeOffset',
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Is Array?',
                                  propertyName: 'isArray',
                                  propertyValue: false,
                                  formType: 'select',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Is Nullable?',
                                  propertyName: 'isNullable',
                                  propertyValue: false,
                                  formType: 'select',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Default Value',
                                  propertyName: 'defaultValue',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName:
                                    'Check Exists Referenced Entity',
                                  propertyName: 'checkReferencedEntityId',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                              ],
                            ],
                            formType: null,
                            visible: false,
                            readonly: false,
                          },
                        ],
                        style: {
                          border: '1px solid #777',
                          padding: 10,
                        },
                        position: {
                          x: 300,
                          y: 50,
                        },
                      },
                      {
                        id: 'ent-3',
                        type: 'customNode',
                        data: [
                          {
                            displayPropertyName: null,
                            propertyName: 'elementType',
                            propertyValue: 'entity',
                            formType: null,
                            visible: false,
                            readonly: false,
                          },
                          {
                            displayPropertyName: 'Title',
                            propertyName: 'name',
                            propertyValue: 'Metadata',
                            formType: 'input',
                            visible: true,
                            readonly: false,
                          },
                          {
                            displayPropertyName: 'Key Type',
                            propertyName: 'keyType',
                            propertyValue: null,
                            formType: 'select',
                            visible: true,
                            readonly: true,
                          },
                          {
                            displayPropertyName: null,
                            propertyName: 'entityType',
                            propertyValue: 'Default',
                            formType: 'input',
                            visible: false,
                            readonly: false,
                          },
                          {
                            displayPropertyName: null,
                            propertyName: 'refDatabaseId',
                            propertyValue: null,
                            formType: null,
                            visible: false,
                            readonly: false,
                          },
                          {
                            displayPropertyName: 'Properties',
                            propertyName: 'properties',
                            propertyValue: [
                              [
                                {
                                  displayPropertyName: 'Title',
                                  propertyName: 'name',
                                  propertyValue: 'Keywords',
                                  formType: 'input',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Type',
                                  propertyName: 'type',
                                  propertyValue: 'string',
                                  formType: 'checkbox',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Is Array?',
                                  propertyName: 'isArray',
                                  propertyValue: false,
                                  formType: 'select',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Is Nullable?',
                                  propertyName: 'isNullable',
                                  propertyValue: false,
                                  formType: 'select',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Default Value',
                                  propertyName: 'defaultValue',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName:
                                    'Check Exists Referenced Entity',
                                  propertyName: 'checkReferencedEntityId',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                              ],
                              [
                                {
                                  displayPropertyName: 'Title',
                                  propertyName: 'name',
                                  propertyValue: 'Description',
                                  formType: 'input',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Type',
                                  propertyName: 'type',
                                  propertyValue: 'string',
                                  formType: 'checkbox',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Is Array?',
                                  propertyName: 'isArray',
                                  propertyValue: false,
                                  formType: 'select',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Is Nullable?',
                                  propertyName: 'isNullable',
                                  propertyValue: false,
                                  formType: 'select',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Default Value',
                                  propertyName: 'defaultValue',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName:
                                    'Check Exists Referenced Entity',
                                  propertyName: 'checkReferencedEntityId',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                              ],
                            ],
                            formType: null,
                            visible: false,
                            readonly: false,
                          },
                        ],
                        position: {
                          x: 650,
                          y: 25,
                        },
                        targetPosition: 'left',
                      },
                      {
                        id: 'ent-4',
                        type: 'customNode',
                        data: [
                          {
                            displayPropertyName: null,
                            propertyName: 'elementType',
                            propertyValue: 'entity',
                            formType: null,
                            visible: false,
                            readonly: false,
                          },
                          {
                            displayPropertyName: 'Title',
                            propertyName: 'name',
                            propertyValue: 'CustomerAddress',
                            formType: 'input',
                            visible: true,
                            readonly: false,
                          },
                          {
                            displayPropertyName: 'Key Type',
                            propertyName: 'keyType',
                            propertyValue: 'int',
                            formType: 'select',
                            visible: true,
                            readonly: false,
                          },
                          {
                            displayPropertyName: null,
                            propertyName: 'entityType',
                            propertyValue: 'Persisted',
                            formType: 'input',
                            visible: false,
                            readonly: false,
                          },
                          {
                            displayPropertyName: null,
                            propertyName: 'refDatabaseId',
                            propertyValue: 'db-3',
                            formType: null,
                            visible: false,
                            readonly: false,
                          },
                          {
                            displayPropertyName: 'Properties',
                            propertyName: 'properties',
                            propertyValue: [
                              [
                                {
                                  displayPropertyName: 'Title',
                                  propertyName: 'name',
                                  propertyValue: 'Id',
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Type',
                                  propertyName: 'type',
                                  propertyValue: 'int',
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Is Array?',
                                  propertyName: 'isArray',
                                  propertyValue: false,
                                  formType: 'select',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Is Nullable?',
                                  propertyName: 'isNullable',
                                  propertyValue: false,
                                  formType: 'select',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName: 'Default Value',
                                  propertyName: 'defaultValue',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                                {
                                  displayPropertyName:
                                    'Check Exists Referenced Entity',
                                  propertyName: 'checkReferencedEntityId',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                              ],
                              [
                                {
                                  displayPropertyName: 'Title',
                                  propertyName: 'name',
                                  propertyValue: 'Address',
                                  formType: 'input',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Type',
                                  propertyName: 'type',
                                  propertyValue: 'string',
                                  formType: 'checkbox',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Is Array?',
                                  propertyName: 'isArray',
                                  propertyValue: true,
                                  formType: 'select',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Is Nullable?',
                                  propertyName: 'isNullable',
                                  propertyValue: false,
                                  formType: 'select',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName: 'Default Value',
                                  propertyName: 'defaultValue',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: false,
                                },
                                {
                                  displayPropertyName:
                                    'Check Exists Referenced Entity',
                                  propertyName: 'checkReferencedEntityId',
                                  propertyValue: null,
                                  formType: 'input',
                                  visible: true,
                                  readonly: true,
                                },
                              ],
                            ],
                            formType: null,
                            visible: false,
                            readonly: false,
                          },
                        ],
                        position: {
                          x: 650,
                          y: 100,
                        },
                        targetPosition: 'left',
                      },
                    ],
                    children: [
                      {
                        key: '8',
                        title: 'Customer',
                      },
                      {
                        key: '9',
                        title: 'MetaData',
                      },
                      {
                        key: '10',
                        title: 'Address',
                      },
                    ],
                  },
                ],
              },
              {
                key: '998',
                title: 'SqlServerInstance',
                nodes: [
                  {
                    id: 'db-2',
                    type: 'customNode',
                    data: [
                      {
                        displayPropertyName: null,
                        propertyName: 'elementType',
                        propertyValue: 'database',
                        formType: null,
                        visible: false,
                        readonly: false,
                      },
                      {
                        displayPropertyName: 'Title',
                        propertyName: 'name',
                        propertyValue: 'IdentityDb',
                        formType: 'input',
                        visible: true,
                        readonly: false,
                      },
                      {
                        displayPropertyName: 'Default Schema',
                        propertyName: 'defaultSchema',
                        propertyValue: null,
                        formType: 'input',
                        visible: true,
                        readonly: false,
                      },
                      {
                        displayPropertyName: 'Add Identity Tables?',
                        propertyName: 'addIdentityTables',
                        propertyValue: true,
                        formType: 'checkbox',
                        visible: true,
                        readonly: false,
                      },
                      {
                        displayPropertyName: null,
                        propertyName: 'refDbInstanceId',
                        propertyValue: 'dbi-2',
                        formType: null,
                        visible: false,
                        readonly: false,
                      },
                    ],
                    position: {
                      x: 0,
                      y: 50,
                    },
                    sourcePosition: 'right',
                  },
                ],
                children: [
                  {
                    key: '999',
                    title: 'IdentityDb',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  activeWorkSpace: {
    nodes: [],
    properties: null,
  },
};

export const counterSlice = createSlice({
  name: 'solutions',
  initialState,
  reducers: {
    setSolutions: (state, action: PayloadAction<any>) => {
      state.solutions = action.payload.solutions;
    },
    createSolution: (state, action: PayloadAction<any>) => {
      state.solution = action.payload.solution;
    },
    updateActiveWorkSpace: (state, action: PayloadAction<any[]>) => {
      state.activeWorkSpace = action.payload;
    },
    updatePropertiesActiveWorkSpace: (state, action: PayloadAction<any[]>) => {
      state.activeWorkSpace.properties = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      solutionApi.endpoints.getSolutions.matchFulfilled,
      (state, { payload }) => {
        state.solutions = payload;
      },
    );
    builder.addMatcher(
      solutionApi.endpoints.addSolution.matchFulfilled,
      (state, { payload }) => {
        state.solutions.push(payload);
        state.solution = {
          key: '1', // vai ser uuid
          title: payload.Name,
          rootNameSpace: payload.Name,
        };
      },
    );
    builder.addMatcher(
      solutionApi.endpoints.deleteSolution.matchFulfilled,
      (state, action) => {
        state.solutions = state.solutions.filter(
          x => x.Id !== action.meta.arg.originalArgs.Uid,
        );
      },
    );
  },
});

export const {
  setSolutions,
  createSolution,
  updateActiveWorkSpace,
  updatePropertiesActiveWorkSpace,
} = counterSlice.actions;

export const solutionsSortByName = (state: RootState) => {
  return state.solutions.solutions
    ?.slice()
    .sort((a, b) => a.Name.localeCompare(b.Name));
};

export const solutionsSortByDate = (state: RootState) => {
  return state.solutions.solutions
    ?.slice()
    .sort((a, b) => a.Name.localeCompare(b.Name));
};

export default counterSlice.reducer;
