import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModolProps {
  title: string;
  visible: boolean;
}

const initialState: ModolProps = {
  title: '',
  visible: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalData: (state, action: PayloadAction<any>) => {
      state.title = action.payload.title;
      state.visible = action.payload.visible;
    },
  },
});

export const { setModalData } = modalSlice.actions;

export default modalSlice.reducer;
