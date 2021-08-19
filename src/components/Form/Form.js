import React from 'react';
import '../Form/Form.css';


function Form(props) {
  
  return (
    <form className="register__form">
      {props.inputName &&
        (<div>
          <p className="register__input-name">Имя</p>
          <input className="register__input"></input>
          <span className="register__input-err"></span>
        </div>)
      }
      <div>
        <p className="register__input-name">E-mail</p>
        <input className="register__input"></input>
        <span className="register__input-err"></span>
      </div>
      <div>
        <p className="register__input-name">Пароль</p>
        <input className="register__input"></input>
        <span className="register__input-err">Что-то пошло не так...</span>
      </div>
    </form>
  )
}

export default Form;