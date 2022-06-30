/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { FrownFilled, FrownOutlined, PlusOutlined } from '@ant-design/icons';
import Tree, { DataNode, TreeProps } from 'antd/lib/tree';
import { LayoutSider1 } from './styles';
import { useAppDispatch, useAppSelector } from '../../../store/reduxHooks';
import {
  updateActiveWorkSpace,
  updateCurrent,
} from '../../../store/solution/solutionSlice';

const findElementByTitleIntoNodes: any = (title: any, solution: any[]) => {
  let objectToReturn = {
    parent: null,
    properties: null,
    current: null,
    propertyType: null,
  };
  if (solution === undefined) return objectToReturn;

  if (!Array.isArray(solution)) {
    return findElementByTitleIntoNodes(title, [solution]);
  }

  for (let index = 0; index < solution.length; index++) {
    const element = solution[index];
    let finded = false;

    if (element?.nodes?.length > 0) {
      element.nodes.forEach((node: any) => {
        if (node.data[1].propertyValue === title) {
          finded = true;
          objectToReturn.properties = node.data;
          objectToReturn.propertyType = node.data[0].propertyValue;
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

    let objectRecursive = findElementByTitleIntoNodes(title, element?.children);
    if (objectRecursive.current !== null) {
      return objectRecursive;
    }
  }
};

const LayoutSiderPage = () => {
  const solution = useAppSelector(state => state.solutions.solution);

  const dispatch = useAppDispatch();

  const TesteItem = () => {
    const setCurrent = async (id: string, data: any[]) => {
      if (!Array.isArray(data)) {
        return setCurrent(id, [data]);
      }
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if (element?.children?.length > 0) {
          element.children.forEach((child: any) => {
            if (child.id === id) {
              dispatch(updateCurrent(child));
            }
          });
        }
      }
    };

    const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
      console.log('kairo info', info);
      console.log('kairo selectedKeys', selectedKeys);

      let finded = findElementByTitleIntoNodes(info?.node?.title, solution);

      if (finded.propertyType === 'entity') {
        let newCurrentNodes = [...finded.parent.nodes];

        for (let index = 0; index < newCurrentNodes.length; index++) {
          let nodeObject = { ...newCurrentNodes[index] };
          let nodeTitle = nodeObject.data[1].propertyValue;
          nodeObject.selected = info?.node?.title === nodeTitle;
          newCurrentNodes[index] = nodeObject;
        }

        Object.assign(finded, { nodes: newCurrentNodes });
        dispatch(updateActiveWorkSpace(finded));
      } else {
        Object.assign(finded, { nodes: info?.node?.nodes });
        dispatch(updateActiveWorkSpace(finded));
      }

      setCurrent(selectedKeys[0].toString(), solution);
    };

    const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
      console.log('onCheck', checkedKeys, info);
    };

    return (
      <Tree.DirectoryTree
        defaultExpandAll
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
