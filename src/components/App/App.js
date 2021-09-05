import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation} from 'react-router-dom'

import { CurrentUserContext } from '../../context/CurrentUserContext';
import * as MoviesApi from '../../utils/MoviesApi';
import * as MainApi from '../../utils/MainApi';
// import { getMovies } from '../../utils/MoviesApi';
// import { authorize, deleteSavedMovie, getSavedMovies, getUserInfo, register, saveMovie, setUserInfo } from '../../utils/MainApi';
import { filterCards, filterCardsByText, filterCardsByCheckbox, showCardsParameters } from '../../utils/utils';

import './App.css';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import NavTab from '../NavTab/NavTab';



function App() {
  const history = useHistory();
  const location = useLocation().pathname;
  const [currentUser, setCurrentUser] = useState({});
  //меню навигации
  const [isNavTabOpen,setIsNavTabOpen] = useState(false);
  //авторизация
  const [loggedIn, setLoggedIn] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
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

  const handleMenuClick = () => {
    setIsNavTabOpen(true);
  };

  const closeNavTab = () => {
    setIsNavTabOpen(false);
  };

  function setShownCardsParameters() {
    const pageWidth = window.innerWidth;
    const shownCardsParameters = showCardsParameters(pageWidth);
    setNumberOfInitialCards(shownCardsParameters.numOfInitialCards);
    setMaxNumberOfAddedCards(shownCardsParameters.maxNumOfAddedCards);
  }

  useEffect(() => {
    setShownCardsParameters();
  }, []);

  window.addEventListener('resize', () => {
    setTimeout(setShownCardsParameters, 1000);
  });

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      setAllCards(JSON.parse(localStorage.getItem('movies')));
    }
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      MainApi.getSavedMovies()
        .then((movies) => {
            setSavedCards(movies);
        })
        .catch((err) => {
            console.log(err);
        });
      if (localStorage.getItem('filteredMovies')) {
        const shownCardsParameters = showCardsParameters(window.innerWidth);
        const filteredCards = JSON.parse(localStorage.getItem('filteredMovies'));
        setSearchedCards(filteredCards);
        setShownCards(filteredCards.slice(0, shownCardsParameters.numOfInitialCards));
        setIsMoviesCardListOpen(true);
        if ( filteredCards.length === filterCardsByCheckbox(filteredCards).length) {
          setIsCheckboxActive(true);
          setOldSearchedCards(JSON.parse(localStorage.getItem('oldFilteredMovies')));
        }
      }
    }
  }, []);


  function handleRegister(inputs) {
    MainApi.register(inputs)
      .then(() => {
        setErrorMessage('');
        const {email, password} = inputs;
        handleLogin({email, password})
      })
      .catch((err) => {
        setErrorMessage(err);
        console.log(err);
      });
  }

  function handleLogin(inputs) {
    MainApi.authorize(inputs)
        .then((data) => { 
          if (data.token) {
            setErrorMessage('');
            localStorage.setItem('jwt', data.token);
            tokenCheck();
            history.push('/movies');
          }
        })
        .catch((err) => {
          setErrorMessage(err);
          console.log(err);
        });
  }

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) { 
      MainApi.getUserInfo()
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

  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    localStorage.removeItem('filteredMovies');
    localStorage.removeItem('oldFilteredMovies');
    setShownCards([]);
    setIsMoviesCardListOpen(false);
    setLoggedIn(false);
    history.push('/');
  }

  const handleEditUserInfo = (inputs) => {
    MainApi.setUserInfo(inputs)
      .then((data) => {
        setCurrentUser(data);
        setFeedbackMessage('Данные обновлены успешно');
      })
      .catch((err) => {
        setFeedbackMessage(err);
        console.log(err);
      })
  }


  const handleCardSave = (movie) => {
    const cardsSavedCurrentUser = savedCards.filter(item => item.owner._id === currentUser._id);
    const isCardSaved = cardsSavedCurrentUser.map(item => item.movieId).includes(movie.id);
    
    if (!isCardSaved) {
      MainApi.saveMovie(movie)
        .then((movieCard) => {
          setSavedCards([...savedCards, movieCard]);
        })
        .catch((err) => {
          console.log(err);
        })
    } else {
      const thisMovieInSavedCards = cardsSavedCurrentUser.find(item => item.movieId === movie.id);
      handleCardNotSave(thisMovieInSavedCards);
    }
  }

  const handleCardNotSave = (movie) => {
    MainApi.deleteSavedMovie(movie._id)
      .then(() => {
        const updateSavedCards = savedCards.filter(item => item !== movie );
        setSavedCards(updateSavedCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleShowMovies = (searchText) => {
    if (location === '/movies') {
       setIsMoviesCardListOpen(false);
       setIsServerError(false);
      if (allCards.length === 0) {
        setIsPreloaderOpen(true);
        MoviesApi.getMovies()
          .then((movies) => {
            setIsPreloaderOpen(false);
            localStorage.setItem('movies', JSON.stringify(movies));
            const allMovies = JSON.parse(localStorage.getItem('movies'));
            setAllCards(allMovies);
            setOldSearchedCards(filterCardsByText(allMovies, searchText));
            localStorage.setItem('oldFilteredMovies', JSON.stringify(filterCardsByText(allMovies, searchText)));
            const filteredCards = filterCards(allMovies, searchText, isCheckboxActive);
            setSearchedCards(filteredCards);
            setShownCards(filteredCards.slice(0, numberOfInitialCards));
            setIsMoviesCardListOpen(true);
            localStorage.setItem('filteredMovies', JSON.stringify(filteredCards));
          })
          .catch((err) => {
            setIsPreloaderOpen(false);
            setIsServerError(true);
            setIsMoviesCardListOpen(true);
            console.log(err);
          });
      } else {
          setOldSearchedCards(filterCardsByText(allCards, searchText));
          localStorage.setItem('oldFilteredMovies', JSON.stringify(filterCardsByText(allCards, searchText)));
          const filteredCards = filterCards(allCards, searchText, isCheckboxActive);
          setSearchedCards(filteredCards);
          setShownCards(filteredCards.slice(0, numberOfInitialCards));
          setIsMoviesCardListOpen(true);
          localStorage.setItem('filteredMovies', JSON.stringify(filteredCards));

      }
    } else if (location === '/saved-movies') {
        setOldSearchedSavedCards(filterCardsByText(savedCards, searchText));
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
      setOldSearchedCards(searchedCards);
      localStorage.setItem('oldFilteredMovies', JSON.stringify(searchedCards));
      const shortFilms= filterCardsByCheckbox(searchedCards);
      setSearchedCards(shortFilms);
      setShownCards(shortFilms.slice(0, numberOfInitialCards));
      localStorage.setItem('filteredMovies', JSON.stringify(shortFilms));
    } else {
      setSearchedCards(oldSearchedCards);
      setShownCards(oldSearchedCards.slice(0, numberOfInitialCards));
      localStorage.setItem('filteredMovies', JSON.stringify(oldSearchedCards));
    } 
  };

  const handleCheckboxSavedMoviesClick = () => {
    setIsCheckboxSavedMoviesActive(!isCheckboxSavedMoviesActive);
    if (!isCheckboxSavedMoviesActive) {
      setOldSearchedSavedCards(searchedSavedCards);
      const shortFilms = filterCardsByCheckbox(searchedSavedCards);
      setSearchedSavedCards(shortFilms);
    } else {
        setSearchedSavedCards(oldSearchedSavedCards);
    } 
  };

  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main 
              loggedIn={loggedIn}
            />
          </Route>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
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
            onCardSave={handleCardSave}
            isNavTabOpen={isNavTabOpen}
            onNavTabClick={handleMenuClick}
            isNavTabClose={closeNavTab}
          />
          <ProtectedRoute 
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
            onShowMovies={handleShowMovies}
            savedCards={savedCards}
            searchedSavedCards={searchedSavedCards}
            setSavedCards={setSavedCards}
            onCheckboxClick={handleCheckboxSavedMoviesClick}
            isSearchButtonPressed={isSearchButtonPressed}
            onCardNotSave={handleCardNotSave}
            isNavTabOpen={isNavTabOpen}
            onNavTabClick={handleMenuClick}
            isNavTabClose={closeNavTab}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            onSignOut={handleSignOut}
            onEditUserInfo={handleEditUserInfo}
            feedbackMessage={feedbackMessage}
          />
          <Route path="/signup">
            <Register 
              onRegister={handleRegister}
              errMessage={errorMessage}
              />
          </Route>
          <Route path="/signin">
            <Login 
              onLogin={handleLogin}
              errMessage={errorMessage}
            />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
        <NavTab />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;