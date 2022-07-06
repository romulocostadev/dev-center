import { getUuid, NewChildRequestParams, PathType } from './common';
import getMetadataNode from './serviceMetadata';

const getNewNode = (
  id: string,
  title: string,
  lastNode: any,
  serviceType: string,
  allowedScopes: string[],
) => {
  let nodeObject = {
    id,
    type: 'customNode',
    data: [
      {
        displayPropertyName: null,
        propertyName: 'elementType',
        propertyValue: 'service',
        formType: null,
        visible: false,
        readonly: false,
      },
      {
        displayPropertyName: 'Title',
        propertyName: 'name',
        propertyValue: title,
        formType: 'input',
        visible: true,
        readonly: false,
      },
      {
        displayPropertyName: 'Service Type',
        propertyName: 'type',
        propertyValue: serviceType,
        formType: 'select',
        visible: true,
        readonly: true,
      },
      {
        displayPropertyName: 'Allowed Scopes',
        propertyName: 'allowedScopes',
        propertyValue: allowedScopes,
        formType: 'select',
        visible: true,
        readonly: true,
      },
    ],
    position: {
      x: 0,
      y: lastNode ? lastNode.position.y + 50 : 0,
    },
    sourcePosition: 'right',
  };
  return nodeObject;
};

const getServiceChild = (requestParams: NewChildRequestParams) => {
  const metadataId = getUuid();
  return {
    key: requestParams.id,
    title: requestParams.title,
    pathType: requestParams.pathType,
    nodes: [
      getMetadataNode(metadataId, requestParams.title, null, requestParams.id),
    ],
    children: [
      {
        key: metadataId,
        title: 'OpenAPI Specification',
        pathType: PathType.ServiceMetadata,
      },
    ],
  };
};
export default getNewNode;
export { getServiceChild };
