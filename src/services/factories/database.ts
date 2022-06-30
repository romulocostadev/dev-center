const getNewNode = (id: string, title: string, lastNode: any) => {
  let nodeObject = {
    id,
    type: 'customNode',
    data: [
      {
        displayPropertyName: null,
        propertyName: 'elementType',
        propertyValue: 'database',
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
        displayPropertyName: 'Default Schema',
        propertyName: 'defaultSchema',
        propertyValue: null,
        formType: 'input',
        visible: true,
        readonly: false,
      },
      {
        displayPropertyName: 'Add Identity Tables?',
        propertyName: 'addIdentityTables',
        propertyValue: false,
        formType: 'checkbox',
        visible: true,
        readonly: false,
      },
      {
        displayPropertyName: null,
        propertyName: 'refDbInstanceId',
        propertyValue: id,
        formType: null,
        visible: false,
        readonly: false,
      },
    ],
    position: { x: 0, y: lastNode ? lastNode.position.y + 50 : 0 },
    sourcePosition: 'right',
  };

  return nodeObject;
};
export default getNewNode;
