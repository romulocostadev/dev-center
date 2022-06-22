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
    'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjdGMTIyOTNCMzkyQUIzRDI4RTNGOTMxOTk3QjI4RTI4QTAxNjU3MDZSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6ImZ4SXBPemtxczlLT1A1TVpsN0tPS0tBV1Z3WSJ9.eyJuYmYiOjE2NTU5MTgyNjUsImV4cCI6MTY1NTk0NzA2NSwiaXNzIjoiaHR0cHM6Ly9sb2FkYmFsYW5jZXIuYmVhLmludGVybmFsL2lkZW50aXR5IiwiYXVkIjpbIkFjY291bnRBcGkiLCJEZWxpdmVyeUNvZGVBcGkiLCJEZXBsb3lBcGkiLCJJZGVudGl0eVNlcnZlckFwaSIsIlNvbHV0aW9uQXBpIiwiV2ViQXBpc0NzQXBpIl0sImNsaWVudF9pZCI6InBvc3RtYW4iLCJzdWIiOiJhOGRlNzg2Ny1kYWJhLTQ3YzctODAyMy1iZDA4Y2RiYWUyNzEiLCJhdXRoX3RpbWUiOjE2NTU5MTgyNjMsImlkcCI6ImxvY2FsIiwiZW1haWwiOiJhZG1pbmlzdHJhdG9yQGJlYXRyaXguaW8iLCJuYW1lIjoiYWRtaW4iLCJhY2NvdW50X2lkIjoiRjMwOEQ2RjAtM0QyOC00MzAzLUJENkItQTdGNjlBMzI0REVCIiwicm9sZSI6ImFkbWluIiwiRGVwSW5zU3BvTGV2IjoiMTAiLCJPYmZMZXYiOiIwIiwiQ29uRGVwIjoiNCIsIkFydERvd0xldiI6IjIwIiwianRpIjoiRjQyRjhGRkY2RDJCNjdDQ0Q1QTc2NjA0MjNFQzU4N0EiLCJpYXQiOjE2NTU5MTgyNjUsInNjb3BlIjpbIkFjY291bnRBcGkiLCJBcHBsaWNhdGlvblJvbGUiLCJCZWF0cml4QWNjb3VudCIsIkRlbGl2ZXJ5Q29kZUFwaSIsIkRlcGxveUFwaSIsImVtYWlsIiwiSWRlbnRpdHlTZXJ2ZXJBcGkiLCJvcGVuaWQiLCJwcm9maWxlIiwiU29sdXRpb25BcGkiLCJXZWJBcGlzQ3NBcGkiXSwiYW1yIjpbInB3ZCJdfQ.TWG1kZzPuFyqIcu1kcKZKYNT33ef3F27J3JraLkExnmNBpvZxaCEGI_-EHEKrw4gOKLk2rrHvdLlT_hPjPt4_VP-bp2ru2IeNjYFrGeuO2IrmdVbgvy_ILc-sCoHdrIemVdOyfmVCgoU7UQrQ-oTfehSNuAEb6A8M_e54Q3IBv2JbI7_ycXILHKXD-GT3zMq52b5KYOb1wfFMmRBIQAs5OnKf3I8QS_8ew7dY_KM5NqFQpI9K6iMpd2F5Uf5v9HLon10uEDSwoWGxt781KIQ_nGZLkvdGbVXenfHfl1tGItAKOM4EF6BgbNOCYeWM11xm8mE5gAAEQ001XoLzTbNaA',
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
