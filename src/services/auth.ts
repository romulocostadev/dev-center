import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface User {
  firstName: string;
  lastName: string;
}

export interface UserResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://stage10.beatrix.io/',
    // prepareHeaders: (headers, { getState }) => {
    //   // By default, if we have a token in the store, let's use that for authenticated requests
    //   // const { token } = (getState() as RootState)?.auth;
    //   // if (token) {
    //   //   headers.set('authorization', `Bearer ${token}`);
    //   // }
    //   return headers;
    // },
  }),
  endpoints: builder => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: credentials => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    user: builder.query({
      query: (name: string) => `user/${name}`,
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => 'protected',
    }),
  }),
});

export const { useLoginMutation, useProtectedMutation, useUserQuery } = api;
