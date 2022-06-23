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
    'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjdGMTIyOTNCMzkyQUIzRDI4RTNGOTMxOTk3QjI4RTI4QTAxNjU3MDZSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6ImZ4SXBPemtxczlLT1A1TVpsN0tPS0tBV1Z3WSJ9.eyJuYmYiOjE2NTU5ODY5NTIsImV4cCI6MTY1NjAxNTc1MiwiaXNzIjoiaHR0cHM6Ly9sb2FkYmFsYW5jZXIuYmVhLmludGVybmFsL2lkZW50aXR5IiwiYXVkIjpbIkFjY291bnRBcGkiLCJEZWxpdmVyeUNvZGVBcGkiLCJEZXBsb3lBcGkiLCJJZGVudGl0eVNlcnZlckFwaSIsIlNvbHV0aW9uQXBpIiwiV2ViQXBpc0NzQXBpIl0sImNsaWVudF9pZCI6InBvc3RtYW4iLCJzdWIiOiJhOGRlNzg2Ny1kYWJhLTQ3YzctODAyMy1iZDA4Y2RiYWUyNzEiLCJhdXRoX3RpbWUiOjE2NTU5ODY5NDksImlkcCI6ImxvY2FsIiwiZW1haWwiOiJhZG1pbmlzdHJhdG9yQGJlYXRyaXguaW8iLCJuYW1lIjoiYWRtaW4iLCJhY2NvdW50X2lkIjoiRjMwOEQ2RjAtM0QyOC00MzAzLUJENkItQTdGNjlBMzI0REVCIiwicm9sZSI6ImFkbWluIiwiRGVwSW5zU3BvTGV2IjoiMTAiLCJPYmZMZXYiOiIwIiwiQ29uRGVwIjoiNCIsIkFydERvd0xldiI6IjIwIiwianRpIjoiMkEwQzRFN0JGMEVGMzhDREJDQzkwNDQyNURDODQ1MkYiLCJpYXQiOjE2NTU5ODY5NTIsInNjb3BlIjpbIkFjY291bnRBcGkiLCJBcHBsaWNhdGlvblJvbGUiLCJCZWF0cml4QWNjb3VudCIsIkRlbGl2ZXJ5Q29kZUFwaSIsIkRlcGxveUFwaSIsImVtYWlsIiwiSWRlbnRpdHlTZXJ2ZXJBcGkiLCJvcGVuaWQiLCJwcm9maWxlIiwiU29sdXRpb25BcGkiLCJXZWJBcGlzQ3NBcGkiXSwiYW1yIjpbInB3ZCJdfQ.ZvjRhPmkC1ZjDI1ORhazFcY9f6HJNl0mz_VzqHrm1TeZOcpx3wOCKuTknRNpN9pVd1PvCDVNqCNHWWPutZ9llDH1SSkqLo1CyAAubky54WxV6G22JbsJxIzSUNg8G6B63H-VJ36E_bgCjuibNlpaiLOpPdSTaQNBhtmJ-P2D9PBkJtU1bLM_nrNH5cruTfCJiRQ2BeUES_nCURuNEyqttKc-I4oK2qrIz_jEng835G2YulwMfvptMaHfJLSz0sYJfHrpzwZ1jOXbFSiZLD3QmVj51c6ghKhN3FsTHoHmcVzZWn_Dqdlthe2wH4aI25UtObsw9OnBREtV68abnukUvg',
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
