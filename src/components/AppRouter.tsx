import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';

import { useTypedSelector } from '../hooks/useTypedSelector';

import Login from '../pages/Login';
import Event from '../pages/Event';

const AppRouter = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={<route.component />} key={route.path} />
      ))}
      <Route path="*" element={<Event />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={<route.component />} key={route.path} />
      ))}
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
