import { ModalFuncProps } from 'antd';

const getConfig = ({
  title,
  onOk,
  onCancel,
  cancelText,
  content,
}: ModalFuncProps): ModalFuncProps => {
  return {
    title,
    closable: true,
    content,
    width: '368px',
    onOk,
    onCancel,
    cancelText,
    icon: null,
    bodyStyle: { padding: '24px' },
    maskStyle: { borderRadius: '15px' },
  };
};

export default getConfig;
