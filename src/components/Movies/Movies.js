import React, { useContext, useEffect, useState } from 'react';
import '../Movies/Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { CurrentUserContext } from '../../context/CurrentUserContext';


function Movies(props) {
  const currentUser = useContext(CurrentUserContext);
  const cardsSavedCurrentUser = props.savedCards.filter(item => item._id === currentUser._id);


  return (
    <div className="movies">
      <Navigation 
        isNavTabOpen={props.isNavTabOpen}
        onNavTabClick={props.onNavTabClick}
        isNavTabClose={props.isNavTabClose}
      />
      <SearchForm 
        onShowMovies={props.onShowMovies}
        onCheckboxClick={props.onCheckboxClick}
        isCheckboxActive={props.isCheckboxActive}
      />
      <Preloader 
        isOpen={props.isPreloaderOpen} 
      />
      <MoviesCardList
        isServerError={props.isServerError}
        searchedCards={props.searchedCards}
        isOpen={props.isMoviesCardListOpen}
        shownCards={props.shownCards}
        onMoreClick={props.onMoreClick}
        savedCards={cardsSavedCurrentUser}
        onCardSave={props.onCardSave}
      />
      <Footer />
    </div>
  )
}

export default Movies;