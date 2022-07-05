const getNewNode = (
  id: string,
  title: string,
  lastNode: any,
  databaseEngine: string,
  relationalDatabase: boolean,
) => {
  let nodeObject = {
    id,
    type: 'customNode',
    data: [
      {
        displayPropertyName: null,
        propertyName: 'elementType',
        propertyValue: 'dbInstance',
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
        displayPropertyName: 'Type',
        propertyName: 'type',
        propertyValue: databaseEngine,
        formType: 'input',
        visible: true,
        readonly: true,
      },
      {
        displayPropertyName: null,
        propertyName: 'isRelationalDb',
        propertyValue: relationalDatabase,
        formType: null,
        visible: false,
        readonly: false,
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
export default getNewNode;
