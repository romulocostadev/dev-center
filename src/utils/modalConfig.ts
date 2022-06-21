const getConfig = ({
  title,
  handleOk,
  handleCancel,
  modalContent,
  modalHeader,
}: any) => {
  return {
    title,
    header: modalHeader,
    closable: true,
    content: modalContent,
    width: '500px',
    onOk: handleOk,
    onCancel: handleCancel,
    cancelText: 'text',
  };
};

export default getConfig;
