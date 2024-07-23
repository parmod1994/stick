import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
  name: 'userData',
  initialState: {
    userData: {},
    isLogin: false

  },
  reducers: {
    saveUserData: (state, action) => {
      state.isLogin = action.payload;
     },
  },
})

// Action creators are generated for each case reducer function
export const { saveUserData } = authSlice.actions

export default authSlice.reducer