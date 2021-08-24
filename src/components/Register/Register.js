import React from 'react';
import { Link } from 'react-router-dom';
import '../Register/Register.css';
import logo from '../../images/logo.svg';
import Form from '../Form/Form';


function Register(props) {
  
  return (
    <section className="reg-login-page">
      <div className="reg-login-page__header">
        <img className="reg-login-page__logo" src={logo} alt="Логотип"></img>
        <h1 className="reg-login-page__title">Добро пожаловать!</h1>
      </div>
      <Form 
        inputName={true}
        handleRegister={props.handleRegister}
      />
      <p className="reg-login-page__login-page">Уже зарегистрированы?
        <Link className="reg-login-page__login-link" to="/signin">Войти</Link>
      </p>
    </section>
  )
}

export default Register;