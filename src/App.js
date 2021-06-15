import React from 'react';

import WeatherDataProvider from './context/WeatherDataProvider';
import WeatherDataContext from './context/WeatherDataContext';
import MainPage from './pages/MainPage/MainPage.components';
import IntroPage from './pages/IntroPage/IntroPage.components'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
// import history from 'history';

import './App.scss';

class App extends React.Component {
  
  render() {
    return(
      // <WeatherDataProvider>
      //   <IntroPage />
      // </WeatherDataProvider>
      
      <Router>
          <Switch>
            <WeatherDataProvider>
              
              <Route exact path="/main" component={MainPage} />
              <Route exact path="/" component={IntroPage} />  
            </WeatherDataProvider>
          </Switch>
      </Router>
    )

  }
}


export default App;
