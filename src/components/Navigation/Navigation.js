import React from 'react';
import { Link } from 'react-router-dom';
import '../Navigation/Navigation.css';
import logo from '../../images/logo.svg';
import NavTab from '../NavTab/NavTab';



function Navigation(props) {
  
  return (
    <header className="navigation">
      <div className="navigation__wrap">
        <Link to="/">
          <img className="navigation__logo" src={logo} alt="Логотип"></img>
        </Link>
        <div className="navigation__info">
          <Link className="navigation__link navigation__link_movie" to="/movies">Фильмы</Link>
          <Link className="navigation__link navigation__link_save-movie" to="/saved-movies">Сохраненные фильмы</Link>
        </div>
        <button className="account-button">
          <div className="account-button__icon"></div>
          <Link className="account-button__text" to="/profile">Аккаунт</Link>
        </button>
        <button className="navigation__hamburger-menu" onClick={props.onNavTabClick}></button>
        <NavTab isOpen={props.isNavTabOpen} onClose={props.isNavTabClose}/>
      </div>
    </header>
  )
}

export default Navigation;