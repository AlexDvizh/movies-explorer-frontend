import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';


function App() {
  
  return (
    <BrowserRouter>
      <div className="page">
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
      </div>
    </BrowserRouter>
  )
}

export default App;