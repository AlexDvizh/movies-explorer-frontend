import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Header/Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';



function Header(props) {
  const location = useLocation().pathname;
  const landing = (location === "/") ? true : false;
  
  return (
    <>
      { landing && props.loggedIn ?
      (
        <Navigation />
      ) : (
        <header className="header">
          <div className="header__wrap">
            <Link to="/">
              <img className="header__logo" src={logo} alt="Логотип"></img>
            </Link>
            <div className="header__auth">
              <Link className="header__link header__link_reg" to="/signup">Регистрация</Link>
              <Link className="header__link header__link_login" to="/signin">Войти</Link>
            </div>
          </div>
        </header>
        )
      }
    </>
  )
}

export default Header;