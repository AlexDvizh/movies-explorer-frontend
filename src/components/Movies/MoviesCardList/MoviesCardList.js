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
        <section className="movies-cards">
          <div className="movies-list">
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
          <div className="more-movies">
            <button className="more-movies__button">Еще</button>
          </div>
        </section>
      ) : (
        <div className="movies-list">
          {props.shownCards.map(card => 
            (<MoviesCard 
                card={card} 
                key={card.movieId} 
                savedCards={props.savedCards}
                onCardNotSave={props.onCardNotSave}
            />))
          }
        </div>
      )
    }
    </>
  )
}

export default MoviesCardList;