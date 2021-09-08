import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css';
import logo from '../../images/logo.svg';
import Form from '../Form/Form';
import { useFormWithValidation } from '../../utils/FormValidation';


function Login(props) {
  const formValidation = useFormWithValidation();
  const {email, password} = formValidation.values;

  function handleLogin(evt) {
    evt.preventDefault();
    props.onLogin({email, password});
  }
  
  return (
    <section className="reg-login-page">
      <div className="reg-login-page__header">
        <Link to="/">
          <img className="reg-login-page__logo" src={logo} alt="Логотип"></img>
        </Link>
        <h1 className="reg-login-page__title">Рады видеть!</h1>
      </div>
      <Form 
        inputName={false}
        inputEmail={true}
        inputPass={true}
        validation={formValidation}
        onSubmit={handleLogin}
        buttonText={'Войти'}
        errMessage={props.errMessage}
      />
      <div>
        <p className="reg-login-page__login-page">Еще не зарегистрированы?
          <Link className="reg-login-page__login-link" to="/signup">Регистрация</Link>
        </p>
      </div>
    </section>
  )
}

export default Login;