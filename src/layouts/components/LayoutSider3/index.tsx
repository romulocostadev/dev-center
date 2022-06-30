/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { FrownFilled, FrownOutlined, PlusOutlined } from '@ant-design/icons';
import Tree, { DataNode, TreeProps } from 'antd/lib/tree';
import { LayoutSider1 } from './styles';
import { useAppDispatch, useAppSelector } from '../../../store/reduxHooks';
import { updateActiveWorkSpace } from '../../../store/solution/solutionSlice';

const findElementByTitleIntoNodes: any = (title: any, solution: any[]) => {
  console.log(solution, 'solution');
  let objectToReturn = { parent: null, properties: null, current: null };
  if (solution === undefined) return objectToReturn;

  if (!Array.isArray(solution))
    return findElementByTitleIntoNodes(title, solution?.children);

  for (let index = 0; index < solution.length; index++) {
    const element = solution[index];
    let finded = false;

    if (element?.nodes?.length > 0) {
      element.nodes.forEach((node: any) => {
        // console.log(node, title, 'kairo');
        if (node.data[1].propertyValue === title) {
          // console.log(node.data[1].propertyValue, 'kairo2');
          finded = true;
          objectToReturn.properties = node.data;
          objectToReturn.parent = element;
        }
      });
    }

    if (element?.children?.length > 0) {
      element.children.forEach((child: any) => {
        if (child.title === title) {
          finded = true;
          objectToReturn.current = child;
        }
      });
    }

    if (finded) {
      return objectToReturn;
    }

    return findElementByTitleIntoNodes(title, element.children);
  }
};

const LayoutSiderPage = () => {
  const solution = useAppSelector(state => state.solutions.solution);
  const current = useAppSelector(
    state => state.solutions.activeWorkSpace.current,
  );

  const dispatch = useAppDispatch();

  const TesteItem = () => {
    const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
      let finded = findElementByTitleIntoNodes(info?.node?.title, solution);
      // console.log(finded, 'finded');
      Object.assign(finded, { nodes: info?.node?.nodes });
      dispatch(updateActiveWorkSpace(finded));
    };

    const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
      console.log('onCheck', checkedKeys, info);
    };

    return (
      <Tree.DirectoryTree
        defaultExpandAll
        defaultSelectedKeys={current?.key}
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
