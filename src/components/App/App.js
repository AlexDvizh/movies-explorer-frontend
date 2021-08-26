import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation} from 'react-router-dom'
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import NavTab from '../NavTab/NavTab';
import { getMovies } from '../../utils/MoviesApi';
import { authorize, getUserInfo, register } from '../../utils/MainApi';
import { filterCards, filterCardsByText, filterCardsByCheckbox } from '../../utils/utils';




function App() {
  //авторизация
  const [loggedIn, setLoggedIn] = useState(false);
  //const [errorMessage, setErrorMessage] = useState('');

  const [currentUser, setCurrentUser] = useState('');

  //карточки фильмов
  const [isPreloaderOpen, setIsPreloaderOpen] = useState(false);
  const [isMoviesCardListOpen, setIsMoviesCardListOpen] = useState(false);
  const [isServerError, setIsServerError] = useState(false);
  //movies
  const [allCards, setAllCards] = useState([]);
  const [searchedCards, setSearchedCards] = useState([]);
  //saved-movies
  const [savedCards, setSavedCards] = useState([]);
  const [searchedSavedCards, setSearchedSavedCards] = useState(savedCards);
  const [isSearchButtonPressed, setIsSearchButtonPressed] = useState(false);
  //фильтр короткометражек
  const [isCheckboxActive, setIsCheckboxActive] = useState(false);
  const [isCheckboxSavedMoviesActive, setIsCheckboxSavedMoviesActive] = useState(false);
  const [oldSearchedCards, setOldSearchedCards] = useState(searchedCards);
  const [oldSearchedSavedCards, setOldSearchedSavedCards] = useState(searchedSavedCards);
  // вывод карточек по нескольку вряд
  const [numberOfInitialCards, setNumberOfInitialCards] = useState(0);
  const [maxNumberOfAddedCards, setMaxNumberOfAddedCards] = useState(0);
  const [shownCards, setShownCards] = useState([]);

  const history = useHistory();
  const location = useLocation().pathname;


  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect( () => {
    if (localStorage.getItem('movies')) {
      setAllCards(JSON.parse(localStorage.getItem('movies')));
    }
  }, []);

  function handleRegister(inputs) {
    register(inputs)
      .then(() => {
        //автоматическая авторизация
        const {email, password} = inputs;
        handleLogin({email, password})
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogin(inputs) {
    authorize(inputs)
        .then((data) => { 
          if (data.token) {
            localStorage.setItem('jwt', data.token);
            tokenCheck();
            history.push('/movies');
          }
        })
        .catch((err) => {
          console.log(err);
        });
  }

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) { 
      getUserInfo()
        .then((user) => {
          setCurrentUser(user);
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setLoggedIn(false);
    }
  }

  const handleShowMovies = (searchText) => {
    if (location === '/movies') {
       setIsMoviesCardListOpen(false);
       setIsServerError(false);
      if (allCards.length === 0) {
        setIsPreloaderOpen(true);
        getMovies()
          .then((movies) => {
            setIsPreloaderOpen(false);
            localStorage.setItem('movies', JSON.stringify(movies));
            const allMovies = JSON.parse(localStorage.getItem('movies'));
            setAllCards(allMovies);
            // подготовить то, что будем показывать при отмене фильтра по короткометражкам
            setOldSearchedCards(filterCardsByText(allMovies, searchText));
            localStorage.setItem('oldFilteredMovies', JSON.stringify(filterCardsByText(allMovies, searchText)));
            // отфильтровать запрос и отдать в MoviesCardList
            const filteredCards = filterCards(allMovies, searchText, isCheckboxActive);
            setSearchedCards(filteredCards);
            setShownCards(filteredCards.slice(0, numberOfInitialCards));
            setIsMoviesCardListOpen(true);
            // чтобы при рендере отображать ранее найденные и отфильтрованные фильмы
             localStorage.setItem('filteredMovies', JSON.stringify(filteredCards));
          })
          .catch((err) => {
            setIsPreloaderOpen(false);
            setIsServerError(true);
            setIsMoviesCardListOpen(true);
            console.log(err);
          });
      } else {
          // подготовить то, что будем показывать при отмене фильтра по короткометражкам
          setOldSearchedCards(filterCardsByText(allCards, searchText));
          localStorage.setItem('oldFilteredMovies', JSON.stringify(filterCardsByText(allCards, searchText)));
          // отфильтровать запрос и отдать в MoviesCardList
          const filteredCards = filterCards(allCards, searchText, isCheckboxActive);
          setSearchedCards(filteredCards);
          setShownCards(filteredCards.slice(0, numberOfInitialCards));
          setIsMoviesCardListOpen(true);
          // чтобы при рендере отображать ранее найденные и отфильтрованные фильмы
          localStorage.setItem('filteredMovies', JSON.stringify(filteredCards));

      }
    } else if (location === '/saved-movies') {
        // подготовить то, что будем показывать при отмене фильтра по короткометражкам
        setOldSearchedSavedCards(filterCardsByText(savedCards, searchText));
        // // отфильтровать запрос и отдать в MoviesCardList
        const filteredCards = filterCards(savedCards, searchText, isCheckboxSavedMoviesActive);
        setSearchedSavedCards(filteredCards);
        setIsSearchButtonPressed(true);
    }
  };

  const handleMoreClick = () => {
    setShownCards(searchedCards.slice(0, shownCards.length + maxNumberOfAddedCards));
  };

  const handleCheckboxClick = () => {
    setIsCheckboxActive(!isCheckboxActive);
    if (!isCheckboxActive) {
      // подготовить то, что будем показывать при отмене фильтра по короткометражкам
      setOldSearchedCards(searchedCards);
      localStorage.setItem('oldFilteredMovies', JSON.stringify(searchedCards));
      // отфильтровать запрос и отдать в MoviesCardList
      const shortFilms= filterCardsByCheckbox(searchedCards);
      setSearchedCards(shortFilms);
      setShownCards(shortFilms.slice(0, numberOfInitialCards));
      // чтобы при рендере отображать ранее найденные и отфильтрованные фильмы
      localStorage.setItem('filteredMovies', JSON.stringify(shortFilms));
    } else {
      setSearchedCards(oldSearchedCards);
      setShownCards(oldSearchedCards.slice(0, numberOfInitialCards));
      // чтобы при рендере отображать ранее найденные и отфильтрованные фильмы
      localStorage.setItem('filteredMovies', JSON.stringify(oldSearchedCards));
    } 
  };

  
  return (
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies 
              onShowMovies={handleShowMovies}
              onCheckboxClick={handleCheckboxClick}
              setSavedCards={setSavedCards}
              onMoreClick={handleMoreClick}
              isPreloaderOpen={isPreloaderOpen}
              isMoviesCardListOpen={isMoviesCardListOpen}
              isServerError={isServerError}
              searchedCards={searchedCards}
              savedCards={savedCards}
              shownCards={shownCards}
              isCheckboxActive={isCheckboxActive}
            />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signup">
            <Register 
              onRegister={handleRegister}
              />
          </Route>
          <Route path="/signin">
            <Login 
              onLogin={handleLogin}
            />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
        <NavTab />
      </div>
  )
}

export default App;