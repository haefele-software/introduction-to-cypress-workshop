import React from 'react';
import { AuthContext } from '../context';
import useAuthService from '../services/useAuthService';

function useDashboard() {
  const { isLoading, signOut } = useAuthService();
  const [, setAuthUser] = React.useContext(AuthContext);
  const logout = () => {
    signOut()
      .then(() => setAuthUser(null));
  }

  return { isLoading, logout };
}

export default useDashboard;