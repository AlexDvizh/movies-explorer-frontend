import '../NavTab/NavTab.css';
import { Link } from 'react-router-dom';

function NavTab () {
  return (
    <div className="nav-menu">
      <div className="nav-menu__container">
        <button className="nav-menu__close-button"></button>
        <ul className="nav-menu__links">
          <li className="nav-menu__links-item">
              <Link to="/" className="nav-menu__link">Главная</Link>
          </li>
          <li className="nav-menu__links-item">
              <Link to="/movies" className="nav-menu__link">Фильмы</Link>
          </li>
          <li className="nav-menu__links-item">
              <Link to="/saved-movies" className="nav-menu__link">Сохранённые фильмы</Link>
          </li>
        </ul>
        <button className="account-button">
          <div className="account-button__icon"></div>
          <Link className="account-button__text" to="/profile">Аккаунт</Link>
        </button>
      </div>
    </div>
  );
}

export default NavTab;