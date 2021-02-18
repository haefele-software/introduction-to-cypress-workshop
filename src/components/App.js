import React from 'react';
import 'antd/dist/antd.css';
import LoginForm from './LoginForm';
import { AuthContext } from '../context';
import Dashboard from './Dashboard';

export default function App() {
  const [authUser, setAuthUser] = React.useState(null);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {authUser
        ? <Dashboard />
        : <LoginForm />}
    </AuthContext.Provider>
  );
}
