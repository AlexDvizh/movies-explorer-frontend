import React from 'react';
import '../MoviesCard/MoviesCard.css';
import movieImg from '../../../images/movie.jpg';


function MoviesCard() {
  
  return (
    <section className="card">
      <img className="card__img" src={movieImg} alt="Обложка фильма"></img>
      <div className="card__info">
        <h2 className="card__text">33 слова о дизайне</h2>
        <button className="card__like"></button>
      </div>
      <p className="card__time">1ч42м</p>
    </section>
  )
}

export default MoviesCard;