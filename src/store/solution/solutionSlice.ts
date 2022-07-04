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
import { getUuid, PathType } from '../../services/factories/common';

interface SolutionProps {
  solutions: SolutionsResponse[];
  solution: any;
  activeWorkSpace: any;
  templateParams: any;
}

const initialState: SolutionProps = {
  solutions: [],
  solution: {
    key: 'eca944ca-f1a0-43a1-9d97-19cf5b6d4462',
    title: 'SunChemical',
    rootNamespace: 'SunChemical',
    pathType: 'solution-folder',
    children: [
      {
        key: '8abc7ee6-c8ae-4009-9cc5-1af5bdf330ad',
        title: 'Database',
        pathType: 'database-folder',
        children: [
          {
            key: '77709814-c781-4a85-bc8c-a2cd95858e38',
            title: 'DbInstances',
            pathType: 'dbinstance-folder',
            children: [
              {
                key: '241f8faf-0cb3-4081-bc22-add8cf95d4ff',
                title: 'PgInstance',
                nodes: [
                  {
                    id: '01ce2c2a-4e21-4ad7-8a82-b287a343b4b0',
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
                        propertyValue: 'SunchemicalOficial',
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
                        propertyValue: '01ce2c2a-4e21-4ad7-8a82-b287a343b4b0',
                        formType: null,
                        visible: false,
                        readonly: false,
                      },
                    ],
                    position: {
                      x: 0,
                      y: 0,
                    },
                    sourcePosition: 'right',
                  },
                  {
                    id: '0d95fef8-a33a-4949-9589-7f514745f129',
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
                        propertyValue: 'DevDatabase',
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
                        propertyValue: '0d95fef8-a33a-4949-9589-7f514745f129',
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
                    key: '01ce2c2a-4e21-4ad7-8a82-b287a343b4b0',
                    title: 'SunchemicalOficial',
                    nodes: [
                      {
                        id: '55f0ded3-a365-441c-87e3-ba0b301184d2',
                        type: 'customNode',
                        position: {
                          x: 300,
                          y: 50,
                        },
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
                            propertyValue:
                              '2e559128-ad9d-42e6-9e1f-5e0c604c4f2a',
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
                      {
                        id: '731b1ad3-8eb0-4992-a27a-5f29b3fa727a',
                        type: 'customNode',
                        position: {
                          x: 600,
                          y: 50,
                        },
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
                            propertyValue: 'Users',
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
                            propertyValue:
                              'd0a90802-180d-4e75-930a-10403004de31',
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
                        key: '55f0ded3-a365-441c-87e3-ba0b301184d2',
                        title: 'Customer',
                        nodes: [],
                        children: null,
                        pathType: 'entity',
                      },
                      {
                        key: '731b1ad3-8eb0-4992-a27a-5f29b3fa727a',
                        title: 'Users',
                        nodes: [],
                        children: null,
                        pathType: 'entity',
                      },
                    ],
                    pathType: 'database',
                  },
                  {
                    key: '0d95fef8-a33a-4949-9589-7f514745f129',
                    title: 'DevDatabase',
                    nodes: [
                      {
                        id: '7f04478b-ccac-4258-afcf-53d15953628e',
                        type: 'customNode',
                        position: {
                          x: 300,
                          y: 50,
                        },
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
                            propertyValue: 'Errors',
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
                            propertyValue:
                              '0a078fe6-ef03-468f-a84c-f047f44015a0',
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
                        key: '7f04478b-ccac-4258-afcf-53d15953628e',
                        title: 'Errors',
                        nodes: [],
                        children: null,
                        pathType: 'entity',
                      },
                    ],
                    pathType: 'database',
                  },
                ],
                pathType: 'database-instance',
              },
              {
                key: 'a32d8047-251b-4d1e-8fb6-788211a0258b',
                title: 'SqlServerInstance',
                nodes: [
                  {
                    id: '5073a993-7fbc-41c9-90a9-e3c0f597e1a1',
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
                        propertyValue: 'MigrationDatabase',
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
                        propertyValue: '5073a993-7fbc-41c9-90a9-e3c0f597e1a1',
                        formType: null,
                        visible: false,
                        readonly: false,
                      },
                    ],
                    position: {
                      x: 0,
                      y: 0,
                    },
                    sourcePosition: 'right',
                  },
                ],
                children: [
                  {
                    key: '5073a993-7fbc-41c9-90a9-e3c0f597e1a1',
                    title: 'MigrationDatabase',
                    nodes: [
                      {
                        id: '4fdf6b80-67e7-4b56-bf91-bbbb11c06457',
                        type: 'customNode',
                        position: {
                          x: 300,
                          y: 50,
                        },
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
                            propertyValue: 'Users',
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
                            propertyValue:
                              'fe53a140-7a29-4a0d-a538-c9621d2ac501',
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
                      {
                        id: '133f3365-e0ce-4211-b49e-e5e70a5ff94e',
                        type: 'customNode',
                        position: {
                          x: 600,
                          y: 50,
                        },
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
                            propertyValue: 'Colors',
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
                            propertyValue:
                              '39063dc4-f5a6-476b-b1f9-afed6592f03d',
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
                        key: '4fdf6b80-67e7-4b56-bf91-bbbb11c06457',
                        title: 'Users',
                        nodes: [],
                        children: null,
                        pathType: 'entity',
                      },
                      {
                        key: '133f3365-e0ce-4211-b49e-e5e70a5ff94e',
                        title: 'Colors',
                        nodes: [],
                        children: null,
                        pathType: 'entity',
                      },
                    ],
                    pathType: 'database',
                  },
                ],
                pathType: 'database-instance',
              },
            ],
            nodes: [
              {
                id: '241f8faf-0cb3-4081-bc22-add8cf95d4ff',
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
                    propertyValue: 'PgInstance',
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
                    propertyName: true,
                    propertyValue: true,
                    formType: null,
                    visible: false,
                    readonly: false,
                  },
                ],
                position: {
                  x: 0,
                  y: 0,
                },
                sourcePosition: 'right',
              },
              {
                id: 'a32d8047-251b-4d1e-8fb6-788211a0258b',
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
                    propertyName: true,
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
          },
        ],
      },
    ],
  },
  activeWorkSpace: {
    nodes: [],
    properties: null,
    current: { pathType: PathType.SolutionFolder },
  },
  templateParams: {
    DomainEntities: {
      DbInstanceTypes: ['MongoDb', 'MySql', 'PostgreSql', 'SqlServer'],
      RelationalDbInstanceTypes: ['MySql', 'PostgreSql', 'SqlServer'],
      EntityTypes: ['Auditable', 'Persisted', 'Default'],
      EntityPropertyTypes: [
        'bool',
        'byte',
        'sbyte',
        'char',
        'decimal',
        'double',
        'float',
        'int',
        'uint',
        'long',
        'ulong',
        'short',
        'ushort',
        'string',
        'Guid',
        'DateTimeOffset',
      ],
      PropertyValidationRuleTypes: [
        'IsCreditCard',
        'IsEmailAddress',
        'IsEmpty',
        'IsNotEmpty',
        'IsEqual',
        'IsNotEqual',
        'IsBetween',
        'IsGreaterThan',
        'IsGreaterThanOrEqual',
        'IsLengthBetween',
        'IsLessThan',
        'IsLessThanOrEqual',
        'IsMatchesTo',
        'IsNull',
        'IsNotNull',
        'IsCpf',
        'IsCnpj',
        'IsValidation',
      ],
      RuleReplacementTypes: ['Always', 'IfIsEmpty'],
      ServiceTypes: ['WebApi'],
      ControllerTypes: ['Crud', 'Query'],
      ControllerContextTypes: [
        'Create',
        'Update',
        'UpdatePartial',
        'Delete',
        'ReadAll',
        'ReadByKey',
      ],
      ContextValidationTypes: [
        'PropertyValidation',
        'ExistsReferenceById',
        'BlankValidation',
      ],
      ContextRuleTypes: [
        'WriteOperationRule',
        'ReadOperationRule',
        'BlankRule',
        'SetPropertyValue',
      ],
    },
    DomainEntityProperties: {
      Base: {
        displayPropertyName: 'string',
        propertyName: 'string',
        visible: 'bool',
        propertyValue: 'any',
        readonly: 'bool',
        formType: 'string',
      },
      DbInstance: {
        isRelationalDb: 'bool',
        name: 'string',
        type: 'RefDbInstanceType',
        elementType: 'string',
      },
      Database: {
        addIdentityTables: 'bool',
        name: 'string',
        refDbInstanceId: 'RefDbInstanceNode',
        elementType: 'string',
        defaultSchema: 'string',
      },
      Entity: {
        refDatabaseId: 'RefDatabaseNode',
        properties: 'EntityPropertyArray',
        name: 'string',
        keyType: 'RefEntityPropertyType',
        elementType: 'string',
        entityType: 'RefEntityType',
      },
      EntityProperty: {
        checkReferencedEntityId: 'RefEntityNode',
        isNullable: 'bool',
        name: 'string',
        type: 'RefEntityPropertyType',
        defaultValue: 'string',
        isArray: 'bool',
      },
      EntityValidation: {
        name: 'string',
        type: 'string',
        elementType: 'string',
        refEntityId: 'RefEntityNode',
      },
      PropertyValidation: {
        forEachRule: 'bool',
        refValidationId: 'RefEntityValidationNode',
        propertyName: 'RefEntityPropertyNode',
        elementType: 'string',
        stopOnFirstRuleFailure: 'bool',
      },
      PropertyValidationRule: {
        errorCode: 'string',
        refPropertyValidationId: 'RefPropertyValidationNode',
        type: 'RefPropertyValidationRuleType',
        expressions: 'stringArray',
        message: 'string',
        elementType: 'string',
      },
      ExistsReferenceValidation: {
        errorCode: 'string',
        refValidationId: 'RefEntityValidationNode',
        propertyName: 'RefEntityPropertyNode',
        message: 'string',
        elementType: 'string',
      },
      EntityRule: {
        name: 'string',
        type: 'string',
        elementType: 'string',
        refEntityId: 'RefEntityNode',
      },
      SetPropertyValue: {
        expression: 'string',
        propertyName: 'RefEntityPropertyNode',
        refRuleId: 'RefEntityRuleNode',
        elementType: 'string',
        replacementType: 'RefRuleReplacementType',
      },
      Service: {
        name: 'string',
        type: 'RefServiceType',
        metadata: 'ServiceMetadataObject',
        elementType: 'string',
        allowedScopes: 'stringArray',
      },
      ServiceMetadata: {
        termsOfServiceUrl: 'string',
        licenseInfo: 'string',
        contactUrl: 'string',
        title: 'string',
        version: 'string',
        description: 'string',
        licenseUrl: 'string',
        contactName: 'string',
        contactEmail: 'string',
      },
      Controller: {
        name: 'string',
        type: 'RefControllerType',
        refServiceId: 'RefServiceNode',
        elementType: 'string',
        refEntityId: 'RefEntityNode',
      },
      ControllerContext: {
        refControllerId: 'RefControllerNode',
        name: 'string',
        elementType: 'string',
      },
      ContextValidation: {
        name: 'string',
        type: 'RefContextValidationType',
        execValidationId: 'RefEntityValidationNode',
        conditionalValidationId: 'RefEntityValidationNode',
        elementType: 'string',
        order: 'number',
        refContextId: 'RefControllerContextNode',
      },
      ContextRule: {
        name: 'string',
        type: 'RefContextRuleType',
        elementType: 'string',
        order: 'number',
        refContextId: 'RefControllerContextNode',
        execRuleId: 'RefEntityRuleNode',
      },
    },
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
    updateParentActiveWorkSpace: (state, action: PayloadAction<any[]>) => {
      state.activeWorkSpace.parent = action.payload;
    },
    updateProtertyTypeActiveWorkSpace: (
      state,
      action: PayloadAction<any[]>,
    ) => {
      state.activeWorkSpace.propertyType = action.payload;
    },
    updateCurrent: (state, action: PayloadAction<any>) => {
      state.activeWorkSpace.current = action.payload;
    },
    updateNodes: (state, action: PayloadAction<any>) => {
      state.activeWorkSpace.nodes = action.payload;
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
        state.activeWorkSpace = {
          nodes: [],
          properties: null,
          current: { pathType: PathType.SolutionFolder },
        };
        state.solution = {
          key: getUuid(),
          title: payload.Name,
          rootNamespace: payload.Name,
          pathType: PathType.SolutionFolder,
          children: [
            {
              key: getUuid(),
              title: 'Database',
              pathType: PathType.DatabaseFolder,
              children: [
                {
                  key: getUuid(),
                  title: 'DbInstances',
                  pathType: PathType.DBinstanceFolder,
                },
              ],
            },
          ],
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
  updateCurrent,
  updateNodes,
  updateProtertyTypeActiveWorkSpace,
  updateParentActiveWorkSpace,
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
