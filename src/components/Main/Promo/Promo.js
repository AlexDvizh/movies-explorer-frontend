import React from 'react';
import '../Promo/Promo.css';
import globus from '../../../images/web-earth.png'


function Promo() {
  
  return (
    <div className="promo">
      <section className="promo__content">
        <div className="promo__text">
          <h2 className="promo__text-title">Учебный проект студента факультета Веб-разработки.</h2>
          <p className="promo__text-subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <img className="promo__img" src={globus} alt="Картинка глобуса"></img>
      </section>
      <a className="promo__button-link" href="/">
        <button className="promo__button">Узнать больше</button>
      </a>
    </div>
  )
}

export default Promo;