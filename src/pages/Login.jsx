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
    <div>
      <h1>Страница авторизации</h1>

      <form onSubmit={submit}>
        <BaseInput type="text" placeholder="Введите логин" />

        <BaseInput type="password" placeholder="Введите пароль" />

        <BaseButton>Войти</BaseButton>
      </form>
    </div>
  );
}

export default Login;
