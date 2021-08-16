import React from 'react';
import '../Navigation/Navigation.css';
import logo from '../../images/logo.svg';


function Navigation() {
  
  return (
    <header className="navigation">
      <div className="navigation__wrap">
        <img className="navigation__logo" src={logo} alt="Логотип"></img>
        <div className="navigation__info">
          <a className="navigation__link navigation__link_movie" href="/">Фильмы</a>
          <a className="navigation__link navigation__link_save-movie" href="/">Сохраненные фильмы</a>
        </div>
        <button className="account-button">
          <div className="account-button__icon"></div>
          <p className="account-button__text">Аккаунт</p>
        </button>
      </div>
    </header>
  )
}

export default Navigation;