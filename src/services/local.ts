import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SuccessApiResponse } from 'next-api-handler';

export const localApi = createApi({
  reducerPath: 'local',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  endpoints: (builder) => ({
    getName: builder.query<SuccessApiResponse<Local.HelloApi>, void>({
      query: () => 'hello',
    }),
  }),
});

export const { useGetNameQuery } = localApi;
