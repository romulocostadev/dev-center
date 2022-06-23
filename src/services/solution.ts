import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/store';

export interface SolutionsResponse {
  AccountId: string;
  UserId: string;
  Name: string;
  TemplateId: string;
  Status: number;
  Enabled: boolean;
  Versions: Array<string>;
  CreatedUtc: Date;
  ModifiedUtc: Date;
  Id: string;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://b7f2-45-65-222-229.sa.ngrok.io/',
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState)?.auth;
      if (token) {
        headers.set('authorization', `${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    getSolution: builder.query<SolutionsResponse[], void>({
      query: () => '/solution/api/solution',
    }),
  }),
});

export const { useGetSolutionQuery } = api;
