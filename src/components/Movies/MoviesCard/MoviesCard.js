import { useLocation } from 'react-router-dom';
import '../MoviesCard/MoviesCard.css';
import movieImg from '../../../images/movie.jpg';
const cardLike = document.querySelector('.card__like');
const cardLikeActive = document.querySelector('.card__like_type_active');

function MoviesCard(props) {
  const location = useLocation().pathname;
  const savedMovies = (location === '/saved-movies') ? true : false;

  const likeClassName = (`card__like ${cardLike ? 'card__like_type_active' : ''}`);

  return (
    <section className="card">
      <img className="card__img" src={movieImg} alt="Обложка фильма"></img>
      <div className="card__info">
        <h2 className="card__text">33 слова о дизайне</h2>
        { savedMovies ?
        (
          <button className="card__like card__like_delete"></button>
        ) : (
          <button className={likeClassName}></button>
        )
        }   
      </div>
      <p className="card__time">1ч42м</p>
    </section>
  )
}

export default MoviesCard;