import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import '../MoviesCardList/MoviesCardList.css';


function MoviesCardList() {
  
  return (
    <section className="movies-cards">
      <div className="movies-list">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <div className="more-movies">
        <button className="more-movies__button">Еще</button>
      </div>
    </section>
  )
}

export default MoviesCardList;