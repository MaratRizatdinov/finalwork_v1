import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8090/',
  }),
  endpoints: (build) => ({
    getUser: build.query({
      query: (token) => ({
        url: 'user',
        headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: ['User'],
    }),
    getUsers: build.query({
      query:()=>({
        url:'user/all',
      }),
      providesTags: ['User'],
    }),
    updateUser: build.mutation({
      query: ({ body, token }) => ({
        url: 'user',
        headers: { Authorization: `Bearer ${token}` },
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['User'],
    }),
    updateAvatar: build.mutation({
      query: ({ body, token }) => ({
        url: 'user/avatar',
        headers: { Authorization: `Bearer ${token}`, formData: true },
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
})

export const {
  useGetUserQuery,
  useGetUsersQuery,
  useUpdateUserMutation,
  useUpdateAvatarMutation,
} = userApi
