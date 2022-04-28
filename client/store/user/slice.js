// store/modules/user.ts

import { createSlice } from '@reduxjs/toolkit';

// 초기 상태
const initialState = {
  isLoggedIn: false,
  userData: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAction(state, action) {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    logoutAction(state) {
      state.isLoggedIn = false;
      state.userData = null;
    },
    registerAction(state) {
      state.isLoggedIn = false;
      state.userData = null;
    }
  }
});

// 리듀서 & 액션 리턴
const { reducer, actions } = userSlice;
export const { loginAction, logoutAction, registerAction } = actions;
export default reducer;
