import { v4 } from 'uuid';

enum PathType {
  SolutionFolder = 'solution-folder',
  DatabaseFolder = 'database-folder',
  DBinstanceFolder = 'dbinstance-folder',
  DatabaseInstance = 'database-instance',
  Database = 'database',
  Entity = 'entity',
}
class NewChildRequestParams {
  id: string;

  title: string;

  pathType: PathType;
}

const getNewChild = (requestParams: NewChildRequestParams) => {
  return {
    key: requestParams.id,
    title: requestParams.title,
    pathType: requestParams.pathType,
  };
};

const getUuid = () => {
  return v4();
};

export default getNewChild;
export { getUuid, getNewChild, NewChildRequestParams, PathType };
