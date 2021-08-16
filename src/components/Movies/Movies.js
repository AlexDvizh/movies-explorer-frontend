import React from 'react';
import '../Movies/Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';



function Movies() {
  
  return (
    <div className="movies">
      <Navigation />
      <SearchForm />
      <MoviesCardList />
      <Preloader />
      <Footer />
    </div>
  )
}

export default Movies;