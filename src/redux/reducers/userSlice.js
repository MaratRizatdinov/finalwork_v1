import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    authorization: false,
    access_token: '',
    refresh_token: '',
  },
  reducers: {
    addTokens(state, action) {
      state.access_token = action.payload.access
      state.refresh_token = action.payload.refresh
      state.authorization =true
    },
    clearTokens(state) {
      state.authorization =false
      state.access_token = ''
      state.refresh_token = ''
    },
  },
})

export const { addTokens, clearTokens } = userSlice.actions

export default userSlice.reducer
