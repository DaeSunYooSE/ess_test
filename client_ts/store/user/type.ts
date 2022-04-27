// 초기 상태 타입
export type UserState = {
  isLoggedIn: boolean
  userData: any
}

// 액션 Payload 타입
export type LoginPayload = {
  userId: string
  password: string
}

export type RegisterPayload = {
  userId: string
  username: string
  password: string
}
