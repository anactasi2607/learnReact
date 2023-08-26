import React, { useContext } from 'react';
import BaseButton from '../components/UI/button/BaseButton';
import BaseInput from '../components/UI/input/BaseInput';
import { AuthContext } from '../context';

const Login = () => {
  const {setIsAuth} = useContext(AuthContext);

  function submit(event) {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div className="container">
      <h1>Страница авторизации</h1>

      <form className="login-form" onSubmit={submit}>
        <div className="login-form__row">
          <BaseInput type="text" placeholder="Введите логин" />
        </div>

        <div className="login-form__row">
          <BaseInput type="password" placeholder="Введите пароль" />
        </div>

        <div className="login-form__row">
          <BaseButton>Войти</BaseButton>
        </div>
      </form>
    </div>
  );
}

export default Login;
