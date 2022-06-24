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
    'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZEMkQyRUMzMEI2MUE5MjZDOUFCMjkzNDEzQkZDRUE1RTNDNkRDQzlSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6ImJTMHV3d3RocVNiSnF5azBFN19PcGVQRzNNayJ9.eyJuYmYiOjE2NTYwNzIxMzMsImV4cCI6MTY1NjEwMDkzMywiaXNzIjoiaHR0cHM6Ly9zdGFnZTEwLmJlYXRyaXguaW8vaWRlbnRpdHkiLCJhdWQiOlsiQWNjb3VudEFwaSIsIkRlbGl2ZXJ5Q29kZUFwaSIsIkRlcGxveUFwaSIsIklkZW50aXR5U2VydmVyQXBpIiwiU29sdXRpb25BcGkiLCJXZWJBcGlzQ3NBcGkiXSwiY2xpZW50X2lkIjoicG9zdG1hbiIsInN1YiI6IjZjNzE5YjQzLTc2ODctNDA5OC05Zjk1LTYzMDJmYzY5NzdhYSIsImF1dGhfdGltZSI6MTY1NjA3MjEzMiwiaWRwIjoibG9jYWwiLCJlbWFpbCI6ImFkbWluaXN0cmF0b3JAYmVhdHJpeC5pbyIsIm5hbWUiOiJhZG1pbiIsImFjY291bnRfaWQiOiJGMzA4RDZGMC0zRDI4LTQzMDMtQkQ2Qi1BN0Y2OUEzMjRERUIiLCJyb2xlIjoiYWRtaW4iLCJEZXBJbnNTcG9MZXYiOiIxMCIsIk9iZkxldiI6IjAiLCJDb25EZXAiOiI0IiwiQXJ0RG93TGV2IjoiMjAiLCJqdGkiOiI3OEM0MkRDQTQ2OTkzREVCMkNGMDBEN0U0MUU4MEY1MiIsImlhdCI6MTY1NjA3MjEzMywic2NvcGUiOlsiQWNjb3VudEFwaSIsIkFwcGxpY2F0aW9uUm9sZSIsIkJlYXRyaXhBY2NvdW50IiwiRGVsaXZlcnlDb2RlQXBpIiwiRGVwbG95QXBpIiwiZW1haWwiLCJJZGVudGl0eVNlcnZlckFwaSIsIm9wZW5pZCIsInByb2ZpbGUiLCJTb2x1dGlvbkFwaSIsIldlYkFwaXNDc0FwaSJdLCJhbXIiOlsicHdkIl19.FxBoHo5fVj6N98f95HZFXZkNgOHcKfX2d0Q8QtUeax1ZPgJm_K3_0xJGYCVWhADx6_MvU0xbEIyBaAv7sUjhy2xovVjhfoU976jZA1MQL0WhgdT0_uhJ52dUjJeUZV9Oo5dGCTUeRmlYVwRN-a_1sAxjydJeInks1vTBNbIVYceLuqojpAU4bdYhsPUrFBPRqhuIVeaPaacj23QypgGkWNSVjHaiU2zMfdesZKS7_6tWRo8tm3AOLbC7QxiBmtUEOnllOGCzoyMSv2-ABLHpivjggwwAOGCBGQer1KqOcoZJzZ3hb2XRw_NHk9wJuhZPjpimZIs2TEwtvxjke4zxKw',
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
