import { v4 } from 'uuid';

const getNewChild = (id: string, title: string) => {
  return {
    key: id,
    title,
    nodes: [],
    children: null,
  };
};

const getUuid = () => {
  return v4();
};

export default getNewChild;
export { getUuid, getNewChild };
