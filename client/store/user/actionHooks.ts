// store/modules/userHook.ts

import axios from "axios"
import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from ".."
import { loginAction, logoutAction, registerAction } from "./slice"
import { LoginPayload, RegisterPayload } from "./type"

const useUser = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const login = useCallback(
    async (data: LoginPayload) => {
      try {
        const res = (await axios.post("/api/auth/login", data)).data
          .access_token
        dispatch(loginAction(res))
      } catch {
        dispatch(logoutAction())
      }
    },
    [dispatch]
  )

  const logout = useCallback(() => {
    dispatch(logoutAction())
  }, [dispatch])

  const register = useCallback(
    async (data: RegisterPayload) => {
      try {
        await axios.post("/api/user", data)
        dispatch(registerAction())
        window.location.href = "/"
      } catch (e) {
        console.error(e)
        return
      }
    },
    [dispatch]
  )

  return { isLoggedIn, login, logout, register }
}

export default useUser
