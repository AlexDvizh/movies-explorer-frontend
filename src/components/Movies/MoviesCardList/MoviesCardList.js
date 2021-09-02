import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import '../MoviesCardList/MoviesCardList.css';


function MoviesCardList(props) {
  const location = useLocation().pathname;
  const savedMovies = (location === "/saved-movies") ? true : false;
  
  return (
    <>
    { savedMovies ?
      (
        <section className="movies-cards movies-card_open" style={{ paddingBottom: "110px" }}>
          <p className="movies__not-found-text">Ничего не найдено</p>
          <div className="movies-list movies-list_open">
            {props.isSearchButtonPressed ?
              (props.searchedSavedCards.map(card => 
                (<MoviesCard 
                    card={card} 
                    key={card.movieId} 
                    savedCards={props.savedCards}
                    onCardNotSave={props.onCardNotSave}
                />))
              ) : (
                props.savedCards.map(card => 
                  (<MoviesCard 
                      card={card} 
                      key={card.movieId} 
                      savedCards={props.savedCards}
                      onCardNotSave={props.onCardNotSave}
                  />))
              )
            }
          </div>
        </section>
      ) : (
        <section className={`movies-cards ${props.isOpen && 'movies-card_open'}`}>
          <p className={`movies__not-found-text ${(props.searchedCards.length === 0) && 'movies__not-found-text_opened'}`}>Ничего не найдено</p>
          <p className={`movies__error-text ${props.isServerError && 'movies__error-text_opened'}`}>
              Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. 
              Подождите немного и попробуйте ещё раз.
          </p>
          <div className={`movies__list ${(props.searchedCards.length !== 0) && 'movies-list_open'}`}>
            {props.shownCards.map(card => 
              (<MoviesCard 
                  card={card} 
                  key={card.movieId} 
                  savedCards={props.savedCards}
                  onCardSave={props.onCardSave}
              />))
            }
          </div>
          <div className={`more-movies ${(props.searchedCards.length > props.shownCards.length) && 'more-movies_opened'}`}>
            <button className="more-movies__button" onClick={props.onMoreClick}>Еще</button>
          </div>
        </section>
      )
    }
    </>
  )
}

export default MoviesCardList;