import React from 'react';
import BaseButton from '../components/UI/button/BaseButton';
import BaseInput from '../components/UI/input/BaseInput';

const Login = () => {
  return (
    <div>
      <h1>Страница авторизации</h1>

      <BaseInput type="text" placeholder="Введите логин" />

      <BaseInput type="password" placeholder="Введите пароль" />

      <BaseButton>Войти</BaseButton>

    </div>
  );
}

export default Login;
