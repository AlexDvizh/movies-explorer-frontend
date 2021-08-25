import React, { useState } from 'react';
import '../Form/Form.css';


function Form(props) {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // function handleSubmit(evt) {
  //   evt.preventDefault();
  //   props.onSubmit(name, email, password);
  // }

  // function handlerChangeName(evt) {
  //   setName(evt.target.value)
  // }
  // function handlerChangeEmail(evt) {
  //   setEmail(evt.target.value)
  // }
  // function handlerChangePass(evt) {
  //   setPassword(evt.target.value)
  // }
  
  return (
    <form className="register__form" onSubmit={props.onSubmit} noValidate>
      {props.inputName &&
        (<label>
          <p className="register__input-name">Имя</p>
          <input 
            className={`register__input ${!props.validation.isInputsValid.name && 'register__input_type_error'}`}
            required
            placeholder="Имя"
            type="text"
            name="name"
            minLength="2"
            maxLength="40"
            value={props.validation.values.name || ''}
            onChange={(evt) => props.validation.handleChange(evt)}
            ></input>
          <span className={`register__input-err ${!props.validation.isInputsValid.name && 'register__input-err_active'}`}>{props.validation.errors.name}</span>
        </label>)
      }
      <label>
        <p className="register__input-name">E-mail</p>
        <input 
          className="register__input" 
          required
          placeholder="Е-мейл"
          type="email"
          name="email"
          maxLength="40"
          value={props.validation.values.email || ''}
          onChange={(evt) => props.validation.handleChange(evt)}
          ></input>
        <span className={`register__input-err ${!props.validation.isInputsValid.email && 'register__input-err_active'}`}>{props.validation.errors.email}</span>
      </label>
      <label>
        <p className="register__input-name">Пароль</p>
        <input 
          className="register__input" 
          required
          placeholder="Пароль"
          type="password"
          name="password"
          minLength="2"
          maxLength="40"
          value={props.validation.values.password || ''}
          onChange={(evt) => props.validation.handleChange(evt)}
          ></input>
        <span className={`register__input-err ${!props.validation.isInputsValid.password && 'register__input-err_active'}`}>{props.validation.errors.password}</span>
      </label>
      {props.inputName &&
        (
        <button type="submit" className={`reg-login-page__button ${!props.validation.isFormValid && 'reg-login-page__button_disabled'}`}>Зарегистрироваться</button>
        )
      } 
    </form>
  )
}

export default Form;