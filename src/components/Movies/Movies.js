import React from 'react';
import '../Movies/Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';



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