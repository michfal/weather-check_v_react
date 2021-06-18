import React, {Component} from 'react';
import WeatherDataProvider from './context/WeatherDataProvider';
import MainPage from './pages/MainPage/MainPage.components';
import IntroPage from './pages/IntroPage/IntroPage.components'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";

import './App.scss';

class App extends Component {
  render() {
    return(
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
};

export default App;
