import React from 'react';
import { Link } from 'react-router-dom';
import '../Register/Register.css';
import logo from '../../images/logo.svg';
import Form from '../Form/Form';
import { useFormWithValidation } from '../../utils/FormValidation';


function Register(props) {
  const formValidation = useFormWithValidation();
  const {name, email, password} = formValidation.values;

  function handleRegister(evt) {
    evt.preventDefault();
    props.onRegister({name, email, password});
  }
  
  return (
    <section className="reg-login-page">
      <div className="reg-login-page__header">
        <Link to="/">
          <img className="reg-login-page__logo" src={logo} alt="Логотип"></img>
        </Link>
        <h1 className="reg-login-page__title">Добро пожаловать!</h1>
      </div>
      <Form 
        inputName={true}
        inputEmail={true}
        inputPass={true}
        onSubmit={handleRegister}
        validation={formValidation}
        buttonText={'Зарегистрироваться'}
        errMessage={props.errMessage}
      />
      <p className="reg-login-page__login-page">Уже зарегистрированы?
        <Link className="reg-login-page__login-link" to="/signin">Войти</Link>
      </p>
    </section>
  )
}

export default Register;