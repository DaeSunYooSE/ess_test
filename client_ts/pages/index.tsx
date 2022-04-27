import { CustomLayout } from "components/layout";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Button } from "react-bootstrap";
import useUser from "../store/user/actionHooks";

const Main = () => {
  const { login, logout } = useUser();
  const state = useSelector((state: RootState) => state.user);
  const [id, setID] = useState("");
  const [pw, setPW] = useState("");

  const handleID = (e: any) => {
    setID(e.target.value);
  };
  const handlePW = (e: any) => {
    setPW(e.target.value);
  };

  const handleLogIn = () => {
    login({ userId: id, password: pw });
  };

  return (
    <>
      <div>
        <p>
          {state.isLoggedIn
            ? state.userData?.userId + "님 환영합니다."
            : "Login을 해주세요"}
        </p>
        <p>Login State: {state.isLoggedIn ? "로그인중" : "로그아웃"}</p>
        <div>
          ID : <input value={id} onInput={handleID} /> <br />
          PW : <input value={pw} type="password" onInput={handlePW} />
        </div>
        <Button size="sm" variant="primary" onClick={handleLogIn}>
          Login
        </Button>
        &nbsp;
        <Button size="sm" onClick={() => logout()}>
          logout
        </Button>
      </div>
    </>
  );
};

export default Main;
