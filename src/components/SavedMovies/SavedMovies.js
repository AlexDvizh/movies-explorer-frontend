import React, { useContext } from 'react';
import '../SavedMovies/SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { CurrentUserContext } from '../../context/CurrentUserContext';


function SavedMovies(props) {
  const currentUser = useContext(CurrentUserContext);
  const cardsSavedCurrentUser = props.savedCards.filter(item => item.owner._id === currentUser._id);
  const searchedCardsSavedCurrentUser = props.searchedSavedCards.filter(item => item.owner._id === currentUser._id);

  return (
    <div className="saved-movies">
      <Navigation 
        isNavTabOpen={props.isNavTabOpen}
        onNavTabClick={props.onNavTabClick}
        isNavTabClose={props.isNavTabClose}
      />
      <SearchForm 
        onShowMovies={props.onShowMovies} 
        onCheckboxClick={props.onCheckboxClick}
        onCardNotSave={props.onCardNotSave}
      />
      <MoviesCardList 
        isSearchButtonPressed={props.isSearchButtonPressed}
        onCardNotSave={props.onCardNotSave}
        savedCards={cardsSavedCurrentUser}
        searchedSavedCards={searchedCardsSavedCurrentUser}
        setSavedCards={props.setSavedCards}
      />
      <Footer />
    </div>
  )
}

export default SavedMovies;