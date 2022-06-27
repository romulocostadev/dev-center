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
export interface SolutionsPost {
  Name: string;
  TemplateId: string;
}

export interface SolutionsDelete {
  Uid: string;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://stage10.beatrix.io/',
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState)?.auth;
      if (token) {
        headers.set('authorization', `${token}`);
      }
      return headers;
    },
  }),

  endpoints: builder => ({
    getSolutions: builder.query<SolutionsResponse[], void>({
      query: () => '/solution/api/solution',
    }),
    addSolution: builder.mutation<SolutionsResponse, Partial<SolutionsPost>>({
      query: body => ({
        url: '/solution/api/solution',
        method: 'POST',
        body,
      }),
    }),
    deleteSolution: builder.mutation<void, Partial<SolutionsDelete>>({
      query: body => ({
        url: `/solution/api/solution/${body.Uid}`,
        method: 'PATCH',
        body: {
          Enabled: false,
        },
      }),
    }),
  }),
});

export const {
  useGetSolutionsQuery,
  useAddSolutionMutation,
  useDeleteSolutionMutation,
} = api;
