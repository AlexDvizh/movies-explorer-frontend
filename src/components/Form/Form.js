import React from 'react';
import '../Form/Form.css';


function Form(props) {
  
  return (
    <form onSubmit={props.handleRegister} className="register__form">
      {props.inputName &&
        (<div>
          <p className="register__input-name">Имя</p>
          <input className="register__input" required></input>
          <span className="register__input-err"></span>
        </div>)
      }
      <div>
        <p className="register__input-name">E-mail</p>
        <input className="register__input" required></input>
        <span className="register__input-err"></span>
      </div>
      <div>
        <p className="register__input-name">Пароль</p>
        <input className="register__input" required></input>
        <span className="register__input-err">Что-то пошло не так...</span>
      </div>
      {props.inputName &&
        (
        <button type="submit" className="reg-login-page__button">Зарегистрироваться</button>
        )
      } 
    </form>
  )
}

export default Form;