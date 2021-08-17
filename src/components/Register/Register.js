import React from 'react';
import '../Register/Register.css';
import logo from '../../images/logo.svg';


function Register() {
  
  return (
    <section className="register">
      <div className="register__header">
        <img className="register__logo" src={logo} alt="Логотип"></img>
        <h1 className="register__title">Добро пожаловать!</h1>
      </div>
      <form className="register__form">
        <p></p>
        <input className="register__input"></input>
        <p></p>
        <input className="register__input"></input>
        <p></p>
        <input className="register__input"></input>
      </form>
      <div>
        <button>Зарегистрироваться</button>
        <p>Уже зарегистрированы?
          <a>Войти</a>
        </p>
      </div>
    </section>
  )
}

export default Register;