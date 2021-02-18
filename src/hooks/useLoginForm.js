import React from 'react';
import { message } from 'antd';
import { AuthContext } from "../context";
import useAuthService from '../services/useAuthService';

export default function useLoginForm() {
  const [, setAuthUser] = React.useContext(AuthContext);
  const { isLoading, signIn } = useAuthService();

  const login = (data) => {
    signIn(data.email, data.password)
      .then((res) => setAuthUser(res))
      .catch((err) => message.error(err.message));
  }

  return { isLoading, login };
}
