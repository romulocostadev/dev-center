import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react';

interface ModalProps {
  title: string;
  visible: boolean;
  content: JSX.Element;
}

const initialState: ModalProps = {
  title: '',
  visible: false,
  content: React.createElement('<h1>Teste</h1>'),
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalData: (state, action: PayloadAction<any>) => {
      state.title = action.payload.title;
      state.visible = action.payload.visible;
      state.content = action.payload.content;
    },
  },
});

export const { setModalData } = modalSlice.actions;

export default modalSlice.reducer;
