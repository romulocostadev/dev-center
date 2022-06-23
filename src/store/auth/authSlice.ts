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
  token:
    'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZEMkQyRUMzMEI2MUE5MjZDOUFCMjkzNDEzQkZDRUE1RTNDNkRDQzlSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6ImJTMHV3d3RocVNiSnF5azBFN19PcGVQRzNNayJ9.eyJuYmYiOjE2NTYwMDEwNDksImV4cCI6MTY1NjAyOTg0OSwiaXNzIjoiaHR0cHM6Ly9zdGFnZTEwLmJlYXRyaXguaW8vaWRlbnRpdHkiLCJhdWQiOlsiQWNjb3VudEFwaSIsIkRlbGl2ZXJ5Q29kZUFwaSIsIkRlcGxveUFwaSIsIklkZW50aXR5U2VydmVyQXBpIiwiU29sdXRpb25BcGkiLCJXZWJBcGlzQ3NBcGkiXSwiY2xpZW50X2lkIjoicG9zdG1hbiIsInN1YiI6IjZjNzE5YjQzLTc2ODctNDA5OC05Zjk1LTYzMDJmYzY5NzdhYSIsImF1dGhfdGltZSI6MTY1NjAwMTA0OSwiaWRwIjoibG9jYWwiLCJlbWFpbCI6ImFkbWluaXN0cmF0b3JAYmVhdHJpeC5pbyIsIm5hbWUiOiJhZG1pbiIsImFjY291bnRfaWQiOiJGMzA4RDZGMC0zRDI4LTQzMDMtQkQ2Qi1BN0Y2OUEzMjRERUIiLCJyb2xlIjoiYWRtaW4iLCJEZXBJbnNTcG9MZXYiOiIxMCIsIk9iZkxldiI6IjAiLCJDb25EZXAiOiI0IiwiQXJ0RG93TGV2IjoiMjAiLCJqdGkiOiJBMjk1OUM2MEFEM0JBM0EyQUE0NTdDODZCN0NGQjQ1QyIsImlhdCI6MTY1NjAwMTA0OSwic2NvcGUiOlsiQWNjb3VudEFwaSIsIkFwcGxpY2F0aW9uUm9sZSIsIkJlYXRyaXhBY2NvdW50IiwiRGVsaXZlcnlDb2RlQXBpIiwiRGVwbG95QXBpIiwiZW1haWwiLCJJZGVudGl0eVNlcnZlckFwaSIsIm9wZW5pZCIsInByb2ZpbGUiLCJTb2x1dGlvbkFwaSIsIldlYkFwaXNDc0FwaSJdLCJhbXIiOlsicHdkIl19.HAqI5rAO8bWIdOJ-xRPWobnFx1C7IIfpEpukv9pAOP_I_-hNxm3OXPpsB96c0xDYUcZV7SRGBM_xcYTTcrVDSpEtXqXf3i6KQMiOMzTEKCEo7fVTASZQDY0eDoM3PMZ6SEJ8GiMiu_aQ88i4lkSwlSAZipId758xivEAZAELtsJYm-x0AvA2vFUMVaclgPDwEbY50dDcU9SKyxQbCFtQT92PJzZpZkFZABIZYziD5AwESRlWpD_TgSedRdt93VfqbCXnDLoWpqT7zGke_DrOGeCBAQ3aHFOMwPAEtBMXCCf0dv7VCYLBAGovKA3e2n6_1yNPKnH7SAbgnvhezbLrgQ',
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
