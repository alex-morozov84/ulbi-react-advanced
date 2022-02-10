import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Row } from 'antd';

import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const Navbar: FC = () => {
  let navigate = useNavigate();
  const { logout } = useActions();
  const { isAuth, user } = useTypedSelector((state) => state.auth);

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: 'white' }}>{user.username}</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => logout()} key={1}>
                Выйти
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => navigate(RouteNames.LOGIN)} key={1}>
                Логин
              </Menu.Item>
            </Menu>
          </>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
