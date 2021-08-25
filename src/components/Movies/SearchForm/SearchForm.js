import React from 'react';
import '../SearchForm/SearchForm.css';


function SearchForm() {
  
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__line">
          <input className="search__input" placeholder="Фильм" type="text" required></input>
          <button className="search__button" type="submit">Найти</button>
        </div>
      </form>
      <div className="filter">
        <input className="filter__input" type="checkbox" id="short-films"></input>
        <label className="filter__lable" htmlFor="short-films"></label>
        <p className="filter__text">Короткометражки</p>
      </div>
    </section>
  )
}

export default SearchForm;