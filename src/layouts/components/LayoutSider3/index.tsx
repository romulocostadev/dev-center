/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import { FrownFilled, FrownOutlined, PlusOutlined } from '@ant-design/icons';

import Tree, { DataNode, TreeProps } from 'antd/lib/tree';
import { LayoutSider1 } from './styles';
import { useAppDispatch, useAppSelector } from '../../../store/reduxHooks';
import { updateActiveWorkSpace } from '../../../store/solution/solutionSlice';

const LayoutSiderPage = () => {
  const solution = useAppSelector(state => state.solutions.solution);
  const dispatch = useAppDispatch();

  const TesteItem = () => {
    const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
      console.log('selected', selectedKeys, info);
      dispatch(updateActiveWorkSpace(info?.node?.nodes));
    };

    const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
      console.log('onCheck', checkedKeys, info);
    };

    return (
      <Tree.DirectoryTree
        defaultExpandedKeys={['1']}
        onSelect={onSelect}
        onCheck={onCheck}
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
