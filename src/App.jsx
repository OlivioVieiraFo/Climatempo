import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import DetailsWeather from './pages/DetailsWeather/DetailsWeather';

import './App.css';

const App = () => {

  return (
    <Router >
      <Routes >
        <Route
        exact
        path='/'
        element={
          <>
            <div className="App-root">
              <body className="App-body" color='hls(0,0,90%)'>
                <Home />
              </body>
            </div>
          </>
          }             
        />
        <Route
        exact
        path='/detailsWeather'
        element={
          <>
            <div className="App-root">
              <body className="App-body" color='hls(0,0,90%)'>
                <DetailsWeather />
              </body>
              </div>
          </>
        }
        />
      </Routes>
    </Router>
  );
}

export default App;
