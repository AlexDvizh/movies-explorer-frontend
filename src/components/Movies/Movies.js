import React, { useContext } from 'react';
import '../Movies/Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import NavTab from '../NavTab/NavTab';
import { CurrentUserContext } from '../../context/CurrentUserContext';


function Movies(props) {
  const currentUser = useContext(CurrentUserContext);
  const cardsSavedCurrentUser = props.savedCards.filter(item => item.owner._id === currentUser._id);
  
  return (
    <div className="movies">
      <Navigation />
      <SearchForm 
        onShowMovies={props.onShowMovies}
        onFilterCheckboxClick={props.onFilterCheckboxClick}
        isCheckboxActive={props.isCheckboxActive}
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
      <Preloader 
        isOpen={props.isPreloaderOpen} 
      />
      <Footer />
      <NavTab />
    </div>
  )
}

export default Movies;