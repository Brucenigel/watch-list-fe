import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const accountApi = createApi({
  reducerPath: 'accountApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_ORIGIN }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials ) => ({
        url: '/account/login/',
        method: 'POST',
        body: credentials
      }),
    }),
    register: builder.mutation({
      query: (user) => ({
        url: '/account/register/', // Replace with your registration endpoint
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = accountApi;
export { accountApi } 
