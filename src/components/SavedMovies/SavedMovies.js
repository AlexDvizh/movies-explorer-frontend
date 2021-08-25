import React from 'react';
import '../SavedMovies/SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import NavTab from '../NavTab/NavTab';



function SavedMovies() {
  
  return (
    <div className="saved-movies">
      <Navigation />
      <SearchForm />
      <MoviesCardList />
      <Footer />
      <NavTab />
    </div>
  )
}

export default SavedMovies;