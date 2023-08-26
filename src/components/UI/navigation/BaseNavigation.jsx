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
    <div className="navigation">
      {isAuth && <BaseButton onClick={logout}>Выйти</BaseButton>}

      <ul className="navigation__list">
        <li className="navigation__list-item">
          <Link to="/about">О сайте</Link>
        </li>

        <li className="navigation__list-item">
          <Link to="/posts">Посты</Link>
        </li>
      </ul>
    </div>
  );
}

export default BaseNavigation;
