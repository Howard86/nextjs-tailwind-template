import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const localApi = createApi({
  reducerPath: 'local',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  endpoints: (builder) => ({
    getName: builder.query<Local.HelloApi, void>({ query: () => 'hello' }),
  }),
});

export const { useGetNameQuery } = localApi;
