import React from 'react';
import '../Navigation/Navigation.css';
import logo from '../../images/logo.svg';


function Navigation() {
  
  return (
    <header className="navigation">
      <div className="navigation__wrap">
        <a href="/">
          <img className="navigation__logo" src={logo} alt="Логотип"></img>
        </a>
        <div className="navigation__info">
          <a className="navigation__link navigation__link_movie" href="/movies">Фильмы</a>
          <a className="navigation__link navigation__link_save-movie" href="/saved-movies">Сохраненные фильмы</a>
        </div>
        <button className="account-button">
          <div className="account-button__icon"></div>
          <a className="account-button__text" href="/profile">Аккаунт</a>
        </button>
      </div>
    </header>
  )
}

export default Navigation;