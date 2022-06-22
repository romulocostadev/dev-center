import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react';

interface ModolProps {
  title: string;
  visible: boolean;
  nodes: JSX.Element;
}

const initialState: ModolProps = {
  title: '',
  visible: false,
  nodes: React.createElement('<h1>Teste</h1>'),
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalData: (state, action: PayloadAction<any>) => {
      state.title = action.payload.title;
      state.visible = action.payload.visible;
      state.nodes = action.payload.nodes;
    },
  },
});

export const { setModalData } = modalSlice.actions;

export default modalSlice.reducer;
