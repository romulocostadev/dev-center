import { useAppDispatch } from '../store/reduxHooks';
import {
  updateCurrent,
  updateNodes,
  updateParentActiveWorkSpace,
  updatePropertiesActiveWorkSpace,
  updateProtertyTypeActiveWorkSpace,
} from '../store/solution/solutionSlice';

const useWorkspace = () => {
  const dispatch = useAppDispatch();

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

  const setSelected = async (id: string, data: any[]) => {
    if (!Array.isArray(data)) {
      return setSelected(id, [data]);
    }

    for (let index = 0; index < data.length; index++) {
      const element = data[index];

      if (element?.children?.length > 0) {
        setSelected(id, element.children);
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

  const deleteNode = async (id: string, data: any[]) => {
    if (!Array.isArray(data)) {
      return deleteNode(id, [data]);
    }

    // someArray.splice(x, 1);

    for (let index = 0; index < data.length; index++) {
      const element = data[index];

      if (element?.children?.length > 0) {
        deleteNode(id, element.children);
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

  const deleteChildren = (parameterElement, key) => {
    let element = { ...parameterElement };
    let finded = false;
    if (element.key === key) {
      return undefined;
    }
    if (finded === false && element?.children?.length > 0) {
      element.children = element?.children?.map(recursiveElement =>
        deleteChildren(recursiveElement, key),
      );
    }
    return element;
  };

  const updateSolutionData = (solution, key) => {
    solution.children = solution?.children?.map(element =>
      deleteChildren(element, key),
    );
    return solution;
  };

  return [setCurrent, setSelected, setAttributes, updateSolutionData];
};

export default useWorkspace;
