import { CustomLayout } from "components/layout"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import { Button } from "react-bootstrap"
import useUser from "../store/user/actionHooks"

const Register = () => {
  const { register } = useUser()
  const state = useSelector((state: RootState) => state.user)
  const [id, setID] = useState("")
  const [name, setName] = useState("")
  const [pw, setPW] = useState("")
  if (state.isLoggedIn) return (window.location.href = "/")

  const handleID = (e: any) => {
    setID(e.target.value)
  }
  const handleName = (e: any) => {
    setName(e.target.value)
  }
  const handlePW = (e: any) => {
    setPW(e.target.value)
  }

  const handleRegister = () => {
    register({ userId: id, username: name, password: pw })
  }

  return (
    <>
      <div>
        <p> 회원가입 페이지 입니다.</p>
        <div>
          Name : <input value={name} onInput={handleName} /> <br />
          ID : <input value={id} onInput={handleID} /> <br />
          PW : <input value={pw} type="password" onInput={handlePW} />
        </div>
        <Button size="sm" variant="primary" onClick={handleRegister}>
          Register
        </Button>
        &nbsp;
      </div>
      <CustomLayout />
    </>
  )
}

export default Register
