import { createApi } from '@reduxjs/toolkit/query/react'
// import { addTokens, clearTokens } from './userSlice'
import { baseQueryWithReauth } from './baseQueryWithAuth'

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   const baseQuery = fetchBaseQuery({
//     baseUrl: 'http://localhost:8090/',
//     prepareHeaders: (headers) => {
//       const token = localStorage.getItem('access')
//       if (token) {
//         headers.set('Authorization', `Bearer ${token}`)
//       }
//       return headers
//     },
//   })

//   const result = await baseQuery(args, api, extraOptions)

//   if (result?.error?.status !== 401) {
//     return result
//   }
//   const logout = () => {
//     api.dispatch(clearTokens())
//     window.location.navigate('/login')
//   }
//   const refresh = localStorage.getItem('refresh')
//   if (!refresh) {
//     return logout()
//   }

//   const refreshResult = await baseQuery(
//     {
//       url: 'auth/login',
//       method: 'PUT',
//       body: {
//         access_token: localStorage.getItem('access'),
//         refresh_token: localStorage.getItem('refresh'),
//       },
//     },
//     api,
//     extraOptions,
//   )

//   if (!refreshResult.data.access_token) {
//     return logout()
//   }

//   api.dispatch(
//     addTokens({
//       access: refreshResult.data.access_token,
//       refresh: refreshResult.data.refresh_token,
//     }),
//   )
//   localStorage.setItem("access", refreshResult.data.access_token)
//   localStorage.setItem("refresh", refreshResult.data.refresh_token)

//   const retryResult = await baseQuery(args, api, extraOptions)

//   if (retryResult?.error?.status === 401) {
//     return logout()
//   }

//   return retryResult
// }

export const adsApi = createApi({
  reducerPath: 'adsApi',
  tagTypes: ['Comment', 'Adv', 'Update'],
  baseQuery: baseQueryWithReauth,

  // baseQuery: fetchBaseQuery({
  //   baseUrl: 'http://localhost:8090/',
  // }),
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
      query: ({ id, body }) => ({
        url: `ads/${id}/comments`,

        headers: {
          // Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Comment'],
    }),
    addAdv: build.mutation({
      query: ({ body }) => ({
        url: `adstext`,
        headers: {
          // Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Adv'],
    }),
    deleteAdv: build.mutation({
      query: ({ id }) => ({
        url: `ads/${id}`,
        // headers: { Authorization: `Bearer ${token}` },
        method: 'DELETE',
      }),
      invalidatesTags: ['Adv'],
    }),
    updateAdv: build.mutation({
      query: ({ id, body}) => ({
        url: `ads/${id}`,
        headers: {
          // Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Adv', 'Update'],
    }),
    addImg: build.mutation({
      query: ({ id, body }) => ({
        url: `ads/${id}/image`,
        headers: { formData: true },
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Adv'],
    }),

    deleteImg: build.mutation({
      query: ({ id, file_url}) => ({
        url: `ads/${id}/image`,
        params: file_url,
        // headers: { Authorization: `Bearer ${token}` },
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
