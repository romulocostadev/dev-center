const getNewNode = (
  id: string,
  title: string,
  lastNode: any,
  serviceIdRef: string,
) => {
  let nodeObject = {
    id,
    type: 'customNode',
    position: {
      x: lastNode ? lastNode.position.x + 300 : 300,
      y: 50,
    },
    data: [
      {
        displayPropertyName: null,
        propertyName: 'elementType',
        propertyValue: 'serviceMetadata',
        formType: null,
        visible: false,
        readonly: false,
      },
      {
        displayPropertyName: 'Title',
        propertyName: 'name',
        propertyValue: 'OpenAPI Specification',
        formType: 'input',
        visible: true,
        readonly: false,
      },
      {
        displayPropertyName: 'Version',
        propertyName: 'version',
        propertyValue: null,
        formType: 'input',
        visible: true,
        readonly: false,
      },
      {
        displayPropertyName: 'Terms of service URL',
        propertyName: 'termsOfServiceUrl',
        propertyValue: null,
        formType: 'input',
        visible: true,
        readonly: false,
      },
      {
        displayPropertyName: 'Description',
        propertyName: 'description',
        propertyValue: title,
        formType: 'input',
        visible: true,
        readonly: false,
      },
      {
        displayPropertyName: 'License Info',
        propertyName: 'licenseInfo',
        propertyValue: null,
        formType: 'input',
        visible: true,
        readonly: false,
      },
      {
        displayPropertyName: 'Contact URL',
        propertyName: 'contactUrl',
        propertyValue: null,
        formType: 'input',
        visible: true,
        readonly: false,
      },
      {
        displayPropertyName: 'License URL',
        propertyName: 'licenseUrl',
        propertyValue: null,
        formType: 'input',
        visible: true,
        readonly: false,
      },
      {
        displayPropertyName: 'Contact Name',
        propertyName: 'contactName',
        propertyValue: null,
        formType: 'input',
        visible: true,
        readonly: false,
      },
      {
        displayPropertyName: 'Contact Email',
        propertyName: 'contactEmail',
        propertyValue: null,
        formType: 'input',
        visible: true,
        readonly: false,
      },
      {
        displayPropertyName: null,
        propertyName: 'refServiceId',
        propertyValue: serviceIdRef,
        formType: null,
        visible: false,
        readonly: false,
      },
    ],
    style: {
      border: '1px solid #777',
      padding: 10,
    },
  };

  return nodeObject;
};
export default getNewNode;
