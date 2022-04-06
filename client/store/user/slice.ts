// store/modules/user.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserState } from "./type"

// 초기 상태
const initialState: UserState = {
  isLoggedIn: false,
  userData: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction(state: UserState, action: PayloadAction<string>) {
      state.isLoggedIn = true
      state.userData = action.payload
    },
    logoutAction(state: UserState) {
      state.isLoggedIn = false
      state.userData = null
    },
    registerAction(state: UserState) {
      state.isLoggedIn = false
      state.userData = null
    },
  },
})

// 리듀서 & 액션 리턴
const { reducer, actions } = userSlice
export const { loginAction, logoutAction, registerAction } = actions
export default reducer
