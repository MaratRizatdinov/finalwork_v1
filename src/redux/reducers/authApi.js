import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8090/',
  }),
  endpoints: (build) => ({
    addUser: build.mutation({
      query: (body) => ({
        url: 'auth/register',
        method: 'POST',
        body,
      }),
    }),
    getTokens: build.mutation({
      query: (body) => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
    }),
    updateTokens: build.mutation({
      query: () => ({
        url: 'auth/login',
        headers: {          
          'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: {
          access_token: localStorage.getItem('access'),
          refresh_token: localStorage.getItem('refresh'),
        },
      }),
    }),
  }),
})

export const { useAddUserMutation, useGetTokensMutation, useUpdateTokensMutation } = authApi
