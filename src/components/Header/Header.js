import React from 'react';
import '../Header/Header.css';
import logo from '../../images/logo.svg';


function Header() {
  
  return (
    <header className="header">
      <div className="header__wrap">
        <img className="header__logo" src={logo} alt="Логотип"></img>
        <div className="header__auth">
          <a className="header__link header__link_reg" href="/">Регистрация</a>
          <a className="header__link header__link_login" href="/">Войти</a>
        </div>
      </div>
    </header>
  )
}

export default Header;