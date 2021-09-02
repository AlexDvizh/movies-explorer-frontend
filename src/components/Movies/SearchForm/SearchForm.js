import React, { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import '../SearchForm/SearchForm.css';


function SearchForm(props) {
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  function handleChange(evt) {
    setSearchText(evt.target.value);
    setError('Нужно ввести ключевое слово');
    setIsFormValid(evt.target.closest("form").checkValidity());
  }

  function handleSubmit(evt) {
      evt.preventDefault();
      if (isFormValid) {
          props.onShowMovies(searchText);
      } else {
          setError('Нужно ввести ключевое слово');
      }
  };
  
  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate>
        <div className={`search__line ${!isFormValid && 'search__line_type_error'}`}>
          <input 
            className="search__input" 
            id="text-input"
            placeholder="Фильм" 
            type="text" 
            required
            value={searchText}
            onChange={handleChange}
            ></input>
          <button className="search__button" type="submit">Найти</button>
        </div>
      </form>
      <span className={`text-input-error ${!isFormValid && 'text-input-error_active'}`}>{error}</span>
      <FilterCheckbox 
        onFilterCheckboxClick={props.onCheckboxClick}
        isCheckboxActive={props.isCheckboxActive}
      />
    </section>
  )
}

export default SearchForm;