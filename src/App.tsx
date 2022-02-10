import { FC, useEffect } from 'react';
import { Layout } from 'antd';

import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { useActions } from './hooks/useActions';
import './App.css';
import { IUser } from './models/IUser';

const App: FC = () => {
  const { setUser, setIsAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username' || '') } as IUser);
      setIsAuth(true);
    }
  }, []);

  return (
    <div>
      <Layout>
        <Navbar />
        <Layout.Content>
          <AppRouter />
        </Layout.Content>
      </Layout>
    </div>
  );
};

export default App;
