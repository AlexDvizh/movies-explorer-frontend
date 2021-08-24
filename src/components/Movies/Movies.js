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
      <SearchForm />
      <MoviesCardList
         />
      <Preloader />
      <Footer />
      <NavTab />
    </div>
  )
}

export default Movies;