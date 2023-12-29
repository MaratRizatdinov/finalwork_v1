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
    addRefreshToken(state, action) {
      state.refresh_token = action.payload.value
    },
  },
})

export const { addTokens, addRefreshToken } = userSlice.actions

export default userSlice.reducer
