import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../SearchForm/SearchForm.css';


function SearchForm(props) {
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  function handleChange(event) {
    setSearchText(event.target.value);
    setError('Нужно ввести ключевое слово');
    setIsFormValid(event.target.closest("form").checkValidity());
  }

  function handleSubmit(event) {
      event.preventDefault();
      if (isFormValid) {
          props.onShowMovies(searchText);
      } else {
          // показываем ошибку после сабмита формы
          setError('Нужно ввести ключевое слово');
      }
  };

  //checkbox
  const location = useLocation().pathname;
  const savedMovies = (location === "/saved-movies") ? true : false;

  const handleFilterCheckboxClick = () => {
      props.onCheckboxClick();
  }
  
  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate>
        <div className={`search__line ${!isFormValid && 'search__line_type_error'}`}>
          <input 
            className="search__input" 
            placeholder="Фильм" 
            type="text" 
            required
            value={searchText}
            onChange={handleChange}
            ></input>
          <button className="search__button" type="submit">Найти</button>
        </div>
      </form>
      <span className={`search__input-error ${!isFormValid && 'search__input-error_active'}`}>{error}</span>
      { savedMovies ? 
        (
          <div className="filter">
            <input 
              className="filter__input" 
              type="checkbox" 
              id="short-films"
              onChange={handleFilterCheckboxClick}
            ></input>
            <label className="filter__lable" htmlFor="short-films"></label>
            <p className="filter__text">Короткометражки</p>
          </div>
        ) : (
          <div className="filter">
            <input 
              className="filter__input" 
              type="checkbox" 
              id="short-films"
              onChange={handleFilterCheckboxClick}
              checked={props.isCheckboxActive}
            ></input>
            <label className="filter__lable" htmlFor="short-films"></label>
            <p className="filter__text">Короткометражки</p>
          </div>
        )
      }
    </section>
  )
}

export default SearchForm;