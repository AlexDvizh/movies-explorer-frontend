import { useLocation } from 'react-router-dom';
import '../MoviesCard/MoviesCard.css';
import * as MoviesApi from '../../../utils/MoviesApi';


function MoviesCard(props) {
  const location = useLocation().pathname;
  const savedMovies = (location === '/saved-movies') ? true : false;
  const isCardSaved = props.savedCards.map(item => item.movieId).includes(props.card.id);

  const handleCardSave = () => {
    props.onCardSave(props.card);
  };

  const handleCardNotSave = () => {
      props.onCardNotSave(props.card);
  };

  function timeConversion(minutes) {
    if (Number(minutes) >= 60) {
      if (Number(minutes)%60 === 0) {
        return String(Math.trunc(Number(minutes)/60)) + 'ч';
      }
      return String(Math.trunc(Number(minutes)/60)) + 'ч '+ String(Number(minutes)%60) + 'м';
    } 
    return minutes + 'м';
  };

  return (
    <section className="card">
      { savedMovies ?
        (
          <a href={props.card.trailer} target="_blank" rel="noreferrer">
            <img className="card__img" src={props.card.image} alt="Постер"></img>
          </a>
        ) : (
          <a href={props.card.trailerLink} target="_blank" rel="noreferrer">
            <img className="card__img" src={ MoviesApi.MOVIES_URL + props.card.image.url} alt="Постер"></img>
          </a>
        )
      }
      <div className="card__info">
        <h2 className="card__text">{props.card.nameRU}</h2>
        { savedMovies ?
        (
          <button className="card__like card__like_delete" onClick={handleCardNotSave}></button>
        ) : (
          <button className={`card__like ${isCardSaved && 'card__like_type_active'}`} onClick={handleCardSave}></button>
        )
        }   
      </div>
      <p className="card__time">{timeConversion(props.card.duration)}</p>
    </section>
  )
}

export default MoviesCard;