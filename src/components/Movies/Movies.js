import React from 'react';
import '../Movies/Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import NavTab from '../NavTab/NavTab';



function Movies(props) {
  
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