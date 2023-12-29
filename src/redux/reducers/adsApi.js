import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adsApi = createApi({
  reducerPath: 'adsApi',
  tagTypes: ['Comment', 'Adv', 'Update'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8090/' }),
  endpoints: (build) => ({
    getAds: build.query({
      query: () => 'ads',
      providesTags: ['Comment', 'Adv'],
    }),
    getAdvComments: build.query({
      query: (id) => `ads/${id}/comments`,
      providesTags: ['Comment'],
    }),
    getAdv: build.query({
      query: (id) => `ads/${id}`,
      providesTags: ['Comment', 'Update', 'Adv'],
    }),
    addComment: build.mutation({
      query: ({ id, body, token }) => ({
        url: `ads/${id}/comments`,

        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Comment'],
    }),
    addAdv: build.mutation({
      query: ({ body, token }) => ({
        url: `adstext`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Adv'],
    }),
    deleteAdv: build.mutation({
      query: ({ id, token }) => ({
        url: `ads/${id}`,
        headers: { Authorization: `Bearer ${token}` },
        method: 'DELETE',
      }),
      invalidatesTags: ['Adv'],
    }),
    updateAdv: build.mutation({
      query: ({ id, body, token }) => ({
        url: `ads/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Adv', 'Update'],
    }),
    addImg: build.mutation({
      query: ({ id, body, token }) => ({
        url: `ads/${id}/image`,
        headers: { Authorization: `Bearer ${token}`, formData: true },
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Adv'],
    }),

    deleteImg: build.mutation({
      query: ({ id, file_url, token }) => ({
        url: `ads/${id}/image`,
        params: file_url,
        headers: { Authorization: `Bearer ${token}` },
        method: 'DELETE',
      }),
      invalidatesTags: ['Adv'],
    }),
  }),
})

export const {
  useGetAdsQuery,
  useGetAdvCommentsQuery,
  useGetAdvQuery,
  useAddCommentMutation,
  useAddAdvMutation,
  useDeleteAdvMutation,
  useUpdateAdvMutation,
  useAddImgMutation,
  useDeleteImgMutation,
} = adsApi
