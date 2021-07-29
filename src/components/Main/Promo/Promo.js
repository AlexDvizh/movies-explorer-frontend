import React from 'react';
import '../Promo/Promo.css';


function Promo() {
  
  return (
    <div className="promo">
      <section className="promo__content">
        <div className="promo__text">
          <h2 className="promo__text-title">Учебный проект студента факультета <br />Веб-разработки.</h2>
          <p className="promo__text-subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <div className="promo__img"></div>
      </section>
      <button className="promo__button">Узнать больше</button>
    </div>
  )
}

export default Promo;