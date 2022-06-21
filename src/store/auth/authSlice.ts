import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api, User } from '../../services/auth';
import type { RootState } from '../store';

interface AuthState {
  user: User;
  token: string;
}

const initialState: AuthState = {
  user: {
    firstName: '',
    lastName: '',
  },
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      api.endpoints.user.matchFulfilled,
      (state, { payload }) => {
        state.user.firstName = payload.name;
      },
    );
  },
});

// export const {} = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
