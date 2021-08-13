import React from 'react';
import '../Footer/Footer.css';


function Footer() {
  
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <nav className="footer__contacts">
        <p className="footer__copyright">&copy; 2021</p>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a className="footer__list-link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          </li>
          <li className="footer__list-item">
            <a className="footer__list-link" href="https://github.com/AlexDvizh" target="_blank" rel="noreferrer">Github</a>
          </li>
          <li className="footer__list-item">
            <a className="footer__list-link" href="https://t.me/alex_dvizh" target="_blank" rel="noreferrer">Telegram</a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;