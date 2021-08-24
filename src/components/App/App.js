import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory} from 'react-router-dom'
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




function App() {
  //стейты авторизации
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [CurrentUser, setCurrentUser] = useState('')

  const history = useHistory();

  const handleRegister = (inputs) => {
    register(inputs)
      .then((data) => {
        setErrorMessage('');
        //автоматическая авторизация
        const {email, password} = inputs;
        handleLogin({email, password})
      })
      .catch((err) => {
        setErrorMessage(err);
      });
  }

  const handleLogin = (inputs) => {
    authorize(inputs)
        .then((data) => { 
          if (data.token) {
            setErrorMessage('');
            localStorage.setItem('jwt', data.token);
            //tokenCheck();
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
  
  return (
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies 
              
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
            handleRegister={handleRegister}/>
          </Route>
          <Route path="/signin">
            <Login />
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