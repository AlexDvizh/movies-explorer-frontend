import React from 'react';
import '../Portfolio/Portfolio.css';


function Portfolio() {
  
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="/">
            <p className="portfolio__link-text">Статичный сайт</p>
            <div className="portfolio__link-icon"></div>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="/">
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <div className="portfolio__link-icon"></div>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="/">
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <div className="portfolio__link-icon"></div>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;