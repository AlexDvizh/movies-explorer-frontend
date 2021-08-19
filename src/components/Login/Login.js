import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css';
import logo from '../../images/logo.svg';
import Form from '../Form/Form';


function Login() {
  
  return (
    <section className="reg-login-page">
      <div className="reg-login-page__header">
        <img className="reg-login-page__logo" src={logo} alt="Логотип"></img>
        <h1 className="reg-login-page__title">Рады видеть!</h1>
      </div>
      <Form 
        inputName={false}
      />
      <div>
        <button className="reg-login-page__button">Войти</button>
        <p className="reg-login-page__login-page">Еще не зарегистрированы?
          <Link className="reg-login-page__login-link" to="/signup">Регистрация</Link>
        </p>
      </div>
    </section>
  )
}

export default Login;