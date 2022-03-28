// store/modules/userHook.ts

import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '..';
import { loginAction, logoutAction } from './slice';
import { LoginPayload } from './type';

const useUser = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  
  const login = useCallback((data: LoginPayload) => {
    try {
      dispatch(loginAction(data));
    } catch {
      dispatch(logoutAction())
    }
  }, []);
  
  const logout = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return { isLoggedIn, login, logout };
}

export default useUser