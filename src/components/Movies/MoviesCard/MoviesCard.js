import { useLocation } from 'react-router-dom';
import '../MoviesCard/MoviesCard.css';
import movieImg from '../../../images/movie.jpg';

function MoviesCard() {
  const location = useLocation().pathname;
  const savedMovies = (location === '/saved-movies') ? true : false;

  return (
    <section className="card">
      <img className="card__img" src={movieImg} alt="Обложка фильма"></img>
      <div className="card__info">
        <h2 className="card__text">33 слова о дизайне</h2>
        { savedMovies ?
        (
          <button className="card__like card__like_delete"></button>
        ) : (
          <button className="card__like card__like_type_active"></button>
        )
        }   
      </div>
      <p className="card__time">1ч42м</p>
    </section>
  )
}

export default MoviesCard;