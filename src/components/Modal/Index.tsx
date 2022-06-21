import React from 'react';
import { Modal as ModalAnt } from 'antd';

import { useAppDispatch, useAppSelector } from '../../store/reduxHooks';
import { setModalData } from '../../store/modal/modalSlice';
// import { Container } from './styles';

const Modal = () => {
  const { visible, title } = useAppSelector(state => state.modal);
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
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </ModalAnt>
      )}
    </>
  );
};

export default Modal;
