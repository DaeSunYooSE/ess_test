export interface registerUser {
  userId: string
  username: string
  password: string
}

export interface logInUser {
  userId: string
  password: string
}

export interface userTokenInfo {
  username: string
  userId: string
}
