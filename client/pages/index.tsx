// 함수 실행할 컴포넌트 - components/Example.tsx
import React from "react";
import { useSelector} from "react-redux";
import { RootState } from "../store";

import useUser from "../store/user/actionHooks";

const Main = () => {
  
  const {login, logout} = useUser();
  const state = useSelector((state:RootState) => state.user);

  return (
    <div>
      <p>{state.isLoggedIn ?state.userData?.userId+"님 환영합니다." :"Login을 해주세요"}</p>
      <p>Login State: {state.isLoggedIn? "로그인중":"로그아웃"}</p>
      <button onClick={() => login({ userId: "id", password: "pw" })}>
        login
      </button>
      <button onClick={() => logout()}>
        logout
      </button>
    </div>
  );
}

export default Main