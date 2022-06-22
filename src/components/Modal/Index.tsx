import React from 'react';
import { Modal as ModalAnt } from 'antd';

import { useAppDispatch, useAppSelector } from '../../store/reduxHooks';
import { setModalData } from '../../store/modal/modalSlice';
// import { Container } from './styles';

const Modal = () => {
  const { visible, title, content } = useAppSelector(state => state.modal);
  const dispatch = useAppDispatch();

  const handleOk = () => {
    dispatch(setModalData({ visible: false }));
    console.log(handleOk);
  };

  const handleCancel = () => {
    dispatch(setModalData({ visible: false }));
    console.log(handleCancel);
  };

  return (
    <>
      {visible && (
        <ModalAnt
          title={title}
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          width="370px"
        >
          {content}
        </ModalAnt>
      )}
    </>
  );
};

export default Modal;
