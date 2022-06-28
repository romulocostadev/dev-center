/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import { FrownFilled, FrownOutlined, PlusOutlined } from '@ant-design/icons';

import Tree, { DataNode, TreeProps } from 'antd/lib/tree';
import { LayoutSider1 } from './styles';
import { useAppDispatch, useAppSelector } from '../../../store/reduxHooks';
import {
  updateActiveWorkSpace,
  updateActiveWorkSpaceCurrentSelection,
} from '../../../store/solution/solutionSlice';

const LayoutSiderPage = () => {
  const solution = useAppSelector(state => state.solutions.solution);
  const dispatch = useAppDispatch();
  // const dataTeste = [
  //   {
  //     key: '1',
  //     title: 'SunChemical',
  //     rootNamespace: 'SunChemical.InkControl',
  //     children: [
  //       {
  //         key: '2',
  //         title: 'Database',
  //         children: [
  //           {
  //             key: '3',
  //             title: 'DbInstances',
  //             nodes: [
  //               {
  //                 key: 'dbi-1',
  //                 type: 'input',
  //                 data: {
  //                   elementType: 'dbInstance',
  //                   title: 'PostgreSqlInstance',
  //                   type: 'PostgreSql',
  //                   isRelationalDb: true,
  //                 },
  //                 position: {
  //                   x: 0,
  //                   y: 50,
  //                 },
  //                 sourcePosition: 'right',
  //               },
  //               {
  //                 key: 'dbi-2',
  //                 type: 'input',
  //                 data: {
  //                   elementType: 'dbInstance',
  //                   title: 'SqlServerInstance',
  //                   type: 'SqlServer',
  //                   isRelationalDb: true,
  //                 },
  //                 position: {
  //                   x: 0,
  //                   y: 50,
  //                 },
  //                 sourcePosition: 'right',
  //               },
  //             ],
  //             children: [
  //               {
  //                 key: '4',
  //                 title: 'PostgreSqlInstance',
  //                 nodes: [
  //                   {
  //                     key: 'db-1',
  //                     type: 'input',
  //                     data: {
  //                       elementType: 'database',
  //                       title: 'OrderDb',
  //                       refDbInstanceId: 'dbi-1',
  //                       addIdentityTables: false,
  //                       defaultSchema: 'Order',
  //                     },
  //                     position: {
  //                       x: 0,
  //                       y: 50,
  //                     },
  //                     sourcePosition: 'right',
  //                   },
  //                   {
  //                     key: 'db-3',
  //                     type: 'input',
  //                     data: {
  //                       elementType: 'database',
  //                       title: 'CustomerDb',
  //                       refDbInstanceId: 'dbi-1',
  //                       addIdentityTables: false,
  //                       defaultSchema: null,
  //                     },
  //                     position: {
  //                       x: 0,
  //                       y: 50,
  //                     },
  //                     sourcePosition: 'right',
  //                   },
  //                 ],
  //                 children: [
  //                   {
  //                     key: '5',
  //                     title: 'OrderDb',
  //                     nodes: [
  //                       {
  //                         key: 'ent-1',
  //                         type: 'selectorNode',
  //                         data: {
  //                           elementType: 'entity',
  //                           title: 'Order',
  //                           keyType: 'int',
  //                           entityType: 'Auditable',
  //                           refDatabaseId: 'db-1',
  //                           properties: [
  //                             {
  //                               title: 'key',
  //                               type: 'int',
  //                               isArray: false,
  //                               isNullable: false,
  //                               defaultValue: null,
  //                               checkReferencedEntityId: null,
  //                             },
  //                             {
  //                               title: 'ShippingCost',
  //                               type: 'double',
  //                               isArray: false,
  //                               isNullable: true,
  //                               defaultValue: 'Value(@ConstDouble::10)',
  //                               checkReferencedEntityId: null,
  //                             },
  //                             {
  //                               title: 'CustomerId',
  //                               type: 'int',
  //                               isArray: false,
  //                               isNullable: false,
  //                               defaultValue: null,
  //                               checkReferencedEntityId: null,
  //                             },
  //                             {
  //                               title: 'CreatedUtc',
  //                               type: 'DateTimeOffset',
  //                               isArray: false,
  //                               isNullable: false,
  //                               defaultValue: null,
  //                               checkReferencedEntityId: null,
  //                             },
  //                             {
  //                               title: 'ModifiedUtc',
  //                               type: 'DateTimeOffset',
  //                               isArray: false,
  //                               isNullable: false,
  //                               defaultValue: null,
  //                               checkReferencedEntityId: null,
  //                             },
  //                           ],
  //                         },
  //                         style: {
  //                           border: '1px solid #777',
  //                           padding: 10,
  //                         },
  //                         position: {
  //                           x: 300,
  //                           y: 50,
  //                         },
  //                       },
  //                     ],
  //                     children: [
  //                       {
  //                         key: '6',
  //                         title: 'Order',
  //                       },
  //                     ],
  //                   },
  //                   {
  //                     key: '7',
  //                     title: 'CustomerDb',
  //                     nodes: [
  //                       {
  //                         key: 'ent-2',
  //                         type: 'selectorNode',
  //                         data: {
  //                           elementType: 'entity',
  //                           title: 'Customer',
  //                           keyType: 'int',
  //                           entityType: 'Auditable',
  //                           refDatabaseId: 'db-3',
  //                           properties: [
  //                             {
  //                               title: 'key',
  //                               type: 'int',
  //                               isArray: false,
  //                               isNullable: false,
  //                               defaultValue: null,
  //                               checkReferencedEntityId: null,
  //                             },
  //                             {
  //                               title: 'title',
  //                               type: 'string',
  //                               isArray: false,
  //                               isNullable: false,
  //                               defaultValue: null,
  //                               checkReferencedEntityId: null,
  //                             },
  //                             {
  //                               title: 'Metadata',
  //                               type: 'Metadata',
  //                               isArray: false,
  //                               isNullable: false,
  //                               defaultValue: null,
  //                               checkReferencedEntityId: null,
  //                             },
  //                             {
  //                               title: 'CustomerAddressId',
  //                               type: 'int',
  //                               isArray: false,
  //                               isNullable: false,
  //                               defaultValue: null,
  //                               checkReferencedEntityId: 'ent-4',
  //                             },
  //                             {
  //                               title: 'CustomerAddress',
  //                               type: 'CustomerAddress',
  //                               isArray: false,
  //                               isNullable: false,
  //                               defaultValue: null,
  //                               checkReferencedEntityId: null,
  //                             },
  //                             {
  //                               title: 'CreatedUtc',
  //                               type: 'DateTimeOffset',
  //                               isArray: false,
  //                               isNullable: false,
  //                               defaultValue: null,
  //                               checkReferencedEntityId: null,
  //                             },
  //                             {
  //                               title: 'ModifiedUtc',
  //                               type: 'DateTimeOffset',
  //                               isArray: false,
  //                               isNullable: false,
  //                               defaultValue: null,
  //                               checkReferencedEntityId: null,
  //                             },
  //                           ],
  //                         },
  //                         style: {
  //                           border: '1px solid #777',
  //                           padding: 10,
  //                         },
  //                         position: {
  //                           x: 300,
  //                           y: 50,
  //                         },
  //                       },
  //                       {
  //                         key: 'ent-3',
  //                         type: 'output',
  //                         data: {
  //                           elementType: 'entity',
  //                           title: 'Metadata',
  //                           keyType: null,
  //                           entityType: 'Default',
  //                           refDatabaseId: null,
  //                           properties: [
  //                             {
  //                               title: 'Keywords',
  //                               type: 'string',
  //                               isArray: false,
  //                               isNullable: false,
  //                               defaultValue: null,
  //                               checkReferencedEntityId: null,
  //                             },
  //                             {
  //                               title: 'Description',
  //                               type: 'string',
  //                               isArray: false,
  //                               isNullable: false,
  //                               defaultValue: null,
  //                               checkReferencedEntityId: null,
  //                             },
  //                           ],
  //                         },
  //                         position: {
  //                           x: 650,
  //                           y: 25,
  //                         },
  //                         targetPosition: 'left',
  //                       },
  //                       {
  //                         key: 'ent-4',
  //                         type: 'output',
  //                         data: {
  //                           elementType: 'entity',
  //                           title: 'CustomerAddress',
  //                           keyType: 'int',
  //                           entityType: 'Persisted',
  //                           refDatabaseId: 'db-3',
  //                           properties: [
  //                             {
  //                               title: 'key',
  //                               type: 'int',
  //                               isArray: false,
  //                               isNullable: false,
  //                               defaultValue: null,
  //                               checkReferencedEntityId: null,
  //                             },
  //                             {
  //                               title: 'Address',
  //                               type: 'string',
  //                               isArray: true,
  //                               isNullable: false,
  //                               defaultValue: null,
  //                               checkReferencedEntityId: null,
  //                             },
  //                           ],
  //                         },
  //                         position: {
  //                           x: 650,
  //                           y: 100,
  //                         },
  //                         targetPosition: 'left',
  //                       },
  //                     ],
  //                     children: [
  //                       {
  //                         key: '8',
  //                         title: 'Customer',
  //                         icon: ({ selected }) =>
  //                           selected ? <FrownFilled /> : <FrownOutlined />,
  //                       },
  //                       {
  //                         key: '9',
  //                         title: 'MetaData',
  //                       },
  //                       {
  //                         key: '10',
  //                         title: 'Address',
  //                       },
  //                     ],
  //                   },
  //                 ],
  //               },
  //               {
  //                 key: '998',
  //                 title: 'SqlServerInstance',
  //                 nodes: [
  //                   {
  //                     key: 'db-2',
  //                     type: 'input',
  //                     data: {
  //                       elementType: 'database',
  //                       title: 'IdentityDb',
  //                       refDbInstanceId: 'dbi-2',
  //                       addIdentityTables: true,
  //                       defaultSchema: null,
  //                     },
  //                     position: {
  //                       x: 0,
  //                       y: 50,
  //                     },
  //                     sourcePosition: 'right',
  //                   },
  //                 ],
  //                 children: [
  //                   {
  //                     key: '999',
  //                     title: 'IdentityDb',
  //                   },
  //                 ],
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  const TesteItem = () => {
    const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
      console.log('selected', selectedKeys, info);
      dispatch(updateActiveWorkSpace(info?.node?.nodes));
      dispatch(updateActiveWorkSpaceCurrentSelection(info?.node));
    };

    const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
      console.log('onCheck', checkedKeys, info);
    };

    return (
      <Tree.DirectoryTree
        defaultExpandedKeys={['1']}
        onSelect={onSelect}
        onCheck={onCheck}
        onRightClick={foo => console.log(foo)}
        treeData={[solution] as DataNode}
      />
    );
  };

  return (
    <LayoutSider1>
      <TesteItem />
    </LayoutSider1>
  );
};;

export default LayoutSiderPage;
