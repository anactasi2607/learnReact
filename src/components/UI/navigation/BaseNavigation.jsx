import React, { useContext } from 'react';

import {Link} from 'react-router-dom';

import { AuthContext } from '../../../context';
import BaseButton from '../button/BaseButton';

const BaseNavigation = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  function logout() {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    // TODO: не согласна с тегами, поправить
    <div className="navigation">
      {isAuth && <BaseButton onClick={logout}>Выйти</BaseButton>}

      <div className="navigation__item">
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  );
}

export default BaseNavigation;
