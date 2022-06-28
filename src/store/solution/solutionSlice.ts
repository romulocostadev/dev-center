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
                data: {
                  elementType: 'dbInstance',
                  title: 'PostgreSqlInstance',
                  type: 'PostgreSql',
                  isRelationalDb: true,
                },
                position: {
                  x: 0,
                  y: 50,
                },
                sourcePosition: 'right',
              },
              {
                id: 'dbi-2',
                type: 'customNode',
                data: {
                  elementType: 'dbInstance',
                  title: 'SqlServerInstance',
                  type: 'SqlServer',
                  isRelationalDb: true,
                },
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
                // properties: {
                //   elementType: 'dbInstance',
                //   title: 'SqlServerInstance',
                //   type: 'SqlServer',
                //   isRelationalDb: true,
                // },
                nodes: [
                  {
                    id: 'db-1',
                    type: 'customNode',
                    data: {
                      elementType: 'database',
                      title: 'OrderDb',
                      refDbInstanceId: 'dbi-1',
                      addIdentityTables: false,
                      defaultSchema: 'Order',
                    },
                    position: {
                      x: 0,
                      y: 50,
                    },
                    sourcePosition: 'right',
                  },
                  {
                    id: 'db-3',
                    type: 'customNode',
                    data: {
                      elementType: 'database',
                      title: 'CustomerDb',
                      refDbInstanceId: 'dbi-1',
                      addIdentityTables: false,
                      defaultSchema: null,
                    },
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
                        data: {
                          elementType: 'entity',
                          title: 'Order',
                          keyType: 'int',
                          entityType: 'Auditable',
                          refDatabaseId: 'db-1',
                          properties: [
                            {
                              title: 'key',
                              type: 'int',
                              isArray: false,
                              isNullable: false,
                              defaultValue: null,
                              checkReferencedEntityId: null,
                            },
                            {
                              title: 'ShippingCost',
                              type: 'double',
                              isArray: false,
                              isNullable: true,
                              defaultValue: 'Value(@ConstDouble::10)',
                              checkReferencedEntityId: null,
                            },
                            {
                              title: 'CustomerId',
                              type: 'int',
                              isArray: false,
                              isNullable: false,
                              defaultValue: null,
                              checkReferencedEntityId: null,
                            },
                            {
                              title: 'CreatedUtc',
                              type: 'DateTimeOffset',
                              isArray: false,
                              isNullable: false,
                              defaultValue: null,
                              checkReferencedEntityId: null,
                            },
                            {
                              title: 'ModifiedUtc',
                              type: 'DateTimeOffset',
                              isArray: false,
                              isNullable: false,
                              defaultValue: null,
                              checkReferencedEntityId: null,
                            },
                          ],
                        },
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
                        data: {
                          elementType: 'entity',
                          title: 'Customer',
                          keyType: 'int',
                          entityType: 'Auditable',
                          refDatabaseId: 'db-3',
                          properties: [
                            {
                              title: 'key',
                              type: 'int',
                              isArray: false,
                              isNullable: false,
                              defaultValue: null,
                              checkReferencedEntityId: null,
                            },
                            {
                              title: 'title',
                              type: 'string',
                              isArray: false,
                              isNullable: false,
                              defaultValue: null,
                              checkReferencedEntityId: null,
                            },
                            {
                              title: 'Metadata',
                              type: 'Metadata',
                              isArray: false,
                              isNullable: false,
                              defaultValue: null,
                              checkReferencedEntityId: null,
                            },
                            {
                              title: 'CustomerAddressId',
                              type: 'int',
                              isArray: false,
                              isNullable: false,
                              defaultValue: null,
                              checkReferencedEntityId: 'ent-4',
                            },
                            {
                              title: 'CustomerAddress',
                              type: 'CustomerAddress',
                              isArray: false,
                              isNullable: false,
                              defaultValue: null,
                              checkReferencedEntityId: null,
                            },
                            {
                              title: 'CreatedUtc',
                              type: 'DateTimeOffset',
                              isArray: false,
                              isNullable: false,
                              defaultValue: null,
                              checkReferencedEntityId: null,
                            },
                            {
                              title: 'ModifiedUtc',
                              type: 'DateTimeOffset',
                              isArray: false,
                              isNullable: false,
                              defaultValue: null,
                              checkReferencedEntityId: null,
                            },
                          ],
                        },
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
                        data: {
                          elementType: 'entity',
                          title: 'Metadata',
                          keyType: null,
                          entityType: 'Default',
                          refDatabaseId: null,
                          properties: [
                            {
                              title: 'Keywords',
                              type: 'string',
                              isArray: false,
                              isNullable: false,
                              defaultValue: null,
                              checkReferencedEntityId: null,
                            },
                            {
                              title: 'Description',
                              type: 'string',
                              isArray: false,
                              isNullable: false,
                              defaultValue: null,
                              checkReferencedEntityId: null,
                            },
                          ],
                        },
                        position: {
                          x: 650,
                          y: 25,
                        },
                        targetPosition: 'left',
                      },
                      {
                        id: 'ent-4',
                        type: 'customNode',
                        data: {
                          elementType: 'entity',
                          title: 'CustomerAddress',
                          keyType: 'int',
                          entityType: 'Persisted',
                          refDatabaseId: 'db-3',
                          properties: [
                            {
                              title: 'key',
                              type: 'int',
                              isArray: false,
                              isNullable: false,
                              defaultValue: null,
                              checkReferencedEntityId: null,
                            },
                            {
                              title: 'Address',
                              type: 'string',
                              isArray: true,
                              isNullable: false,
                              defaultValue: null,
                              checkReferencedEntityId: null,
                            },
                          ],
                        },
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
                    data: {
                      elementType: 'database',
                      title: 'IdentityDb',
                      refDbInstanceId: 'dbi-2',
                      addIdentityTables: true,
                      defaultSchema: null,
                    },
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
  },
};

export const counterSlice = createSlice({
  name: 'solutions',
  // `createSlice` will infer the state type from the `initialState` argument
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

export const { setSolutions, updateActiveWorkSpace } = counterSlice.actions;

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
