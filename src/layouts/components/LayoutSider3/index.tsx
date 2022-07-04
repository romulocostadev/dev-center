/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { FrownFilled, FrownOutlined, PlusOutlined } from '@ant-design/icons';
import Tree, { DataNode, TreeProps } from 'antd/lib/tree';
import { LayoutSider1 } from './styles';
import { useAppDispatch, useAppSelector } from '../../../store/reduxHooks';
import {
  updateCurrent,
  updateNodes,
  updateParentActiveWorkSpace,
  updatePropertiesActiveWorkSpace,
  updateProtertyTypeActiveWorkSpace,
} from '../../../store/solution/solutionSlice';
import { PathType } from '../../../services/factories/common';
import useWorkspace from '../../../hooks/useWorkspace';

const LayoutSiderPage = () => {
  const solution = useAppSelector(state => state.solutions.solution);
  const activeWorkSpace = useAppSelector(
    state => state.solutions.activeWorkSpace,
  );

  const dispatch = useAppDispatch();

  const TesteItem = () => {
    const [setCurrent, setSelectedAndNodes, setAttributes] = useWorkspace();

    const onSelect: TreeProps['onSelect'] = async (selectedKeys, info) => {
      const key = selectedKeys[0].toString();

      setCurrent(key, solution);
      setAttributes(key, solution);

      if (info?.node?.nodes?.length > 0) {
        dispatch(updateNodes(info?.node?.nodes));
      } else {
        setSelectedAndNodes(key, solution);
      }
    };

    const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {};

    return (
      <Tree.DirectoryTree
        height={500}
        defaultExpandAll
        onSelect={onSelect}
        onCheck={onCheck}
        treeData={[solution] as DataNode}
        defaultSelectedKeys={[activeWorkSpace?.current?.key]}
        selectedKeys={[activeWorkSpace?.current?.key]}
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
