// store/modules/index.ts

import { combineReducers } from "redux"
import user from "./user/slice"
import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"

const rootReducer = combineReducers({ user })

const store = () => {
  const store = configureStore({ reducer: rootReducer })
  return store
}

export const wrapper = createWrapper(store, {
  debug: process.env.NODE_ENV === "development",
})

export type RootState = ReturnType<typeof rootReducer>
