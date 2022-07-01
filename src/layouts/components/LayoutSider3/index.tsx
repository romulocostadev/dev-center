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

const findElementByTitleIntoNodes: any = (key: any, solution: any[]) => {
  let objectToReturn = {
    parent: null,
    properties: null,
    propertyType: null,
  };
  if (solution === undefined) return objectToReturn;

  if (!Array.isArray(solution)) {
    return findElementByTitleIntoNodes(key, solution?.children);
  }

  for (let index = 0; index < solution.length; index++) {
    const element = solution[index];
    let finded = false;

    if (element?.nodes?.length > 0) {
      element.nodes.forEach((node: any) => {
        if (node.id === key) {
          finded = true;
          objectToReturn.properties = node.data;
          objectToReturn.propertyType = node.data[0].propertyValue;
          objectToReturn.parent = element;
        }
      });
    }

    if (finded) {
      return objectToReturn;
    }

    return findElementByTitleIntoNodes(key, element.children);
  }
};

const LayoutSiderPage = () => {
  const solution = useAppSelector(state => state.solutions.solution);
  const activeWorkSpace = useAppSelector(
    state => state.solutions.activeWorkSpace,
  );

  const dispatch = useAppDispatch();

  const TesteItem = () => {
    const setAttributes = async (id: string, data: any[]) => {
      if (!Array.isArray(data)) {
        return setAttributes(id, [data]);
      }

      for (let index = 0; index < data.length; index++) {
        const element = data[index];

        if (element?.children?.length > 0) {
          setAttributes(id, element.children);
        }

        element?.nodes?.forEach(node => {
          if (node.id === id) {
            dispatch(updatePropertiesActiveWorkSpace(node.data));
            dispatch(
              updateProtertyTypeActiveWorkSpace(node.data[0].propertyValue),
            );
            dispatch(updateParentActiveWorkSpace(element));
            return false;
          }
        });
      }
    };

    const setCurrent = async (id: string, data: any[]) => {
      if (!Array.isArray(data)) {
        return setCurrent(id, [data]);
      }
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if (element.key === id) {
          dispatch(updateCurrent(element));
          return false;
        }
        if (element?.children?.length > 0) {
          element.children.forEach((child: any) => {
            if (child.key === id) {
              dispatch(updateCurrent(child));
              return false;
            }
          });
          element.children.forEach((child: any) => {
            if (child.children) {
              setCurrent(id, child.children);
            }
          });
        }
      }
    };

    const setSelectedAndNodes = async (id: string, data: any[]) => {
      if (!Array.isArray(data)) {
        return setSelectedAndNodes(id, [data]);
      }

      for (let index = 0; index < data.length; index++) {
        const element = data[index];

        if (element?.children?.length > 0) {
          setSelectedAndNodes(id, element.children);
        }

        let found = false;

        let copyNodes = [];
        element?.nodes?.forEach(node => {
          let copyNode = { ...node };
          copyNodes.push(copyNode);
          if (node.id === id) {
            found = true;
            copyNode.selected = true;
          }
        });
        if (found) {
          dispatch(updateNodes(copyNodes));
        }
      }
    };

    const onSelect: TreeProps['onSelect'] = async (selectedKeys, info) => {
      const key = selectedKeys[0].toString();
      // let finded = findElementByTitleIntoNodes(key, solution);

      await setCurrent(key, solution);
      await setAttributes(key, solution);

      if (info?.node?.nodes?.length > 0) {
        dispatch(updateNodes(info?.node?.nodes));
      } else {
        setSelectedAndNodes(key, solution);
      }
    };

    const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {};

    return (
      <Tree.DirectoryTree
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
