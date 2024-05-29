import { createSlice } from '@reduxjs/toolkit'
import { registerUser , userLogin } from './authAction'
const initialState = {
  loading: false,
  userInfo: JSON.parse(localStorage.getItem('userInfo')),
  error: null,
  success: false, 
}
console.log(initialState.userInfo)
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  signout: (state) => {
    state.userInfo = null
    state.loading = false
    state.error = false
    localStorage.removeItem('userInfo');
   },
   changesuccess: (state) =>{
    state.success=false;
   },
   changeinfo: (state, {payload})=>{
    console.log(payload)
    state.userInfo= payload;
   }
  }
  ,
extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
        
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log(payload);
        state.userInfo = payload;
        localStorage.setItem('userInfo', JSON.stringify(payload));
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
})
export const { signout, changesuccess, changeinfo } = authSlice.actions;
export default authSlice.reducer