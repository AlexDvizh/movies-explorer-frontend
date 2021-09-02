import { useLocation } from 'react-router-dom';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
  const location = useLocation().pathname;
  const savedMovies = (location === "/saved-movies") ? true : false;

  const handleFilterCheckboxClick = () => {
      props.onFilterCheckboxClick();
  }
  
  return (
    <>
      { savedMovies ? 
        (
          <div className="filter">
            <input 
              className="filter__input" 
              name="short-films"
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
              name="short-films" 
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
    </>
  )
}

export default FilterCheckbox;