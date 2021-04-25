import React from 'react';

import MainPage from './pages/MainPage/MainPage.components';
import IntroPage from './pages/IntroPage/IntroPage.components'; 
import {getCoordinates} from './components/logic/GetData/GetData.components';
import {getWeatherForCity} from './components/logic/GetData/GetData.components';

import './App.scss';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // current: {
      //   clouds: 40,
      //   dew_point: 8.2,
      //   dt: 1618749143,
      //   feels_like: 8,
      //   humidity: 66,
      //   pressure: 1019,
      //   sunrise: 1618716715,
      //   sunset: 1618767493,
      //   temp: 14.47,
      //   uvi: 1.84,
      //   visibility: 10000,
      //   weather: [
      //     {
      //       description: "scattered clouds",
      //       icon: "03d",
      //       id: 802,
      //       main: "Clouds"
      //     }
      //   ],
      //   wind_deg: 0,
      //   wind_speed: 1.03,
      // },
      current: '',
      daily: '',
    }
  }

  getWeather = async (city, key) => {
    try {
    const coordinates = await getCoordinates(city, key);
    const weatherData = await getWeatherForCity(coordinates, key); 
    this.setState({current: weatherData.current, daily: weatherData.daily} );
    // console.log(this.state)
    }  catch (err) {
        console.log(err)
    }
  }


  handleSubmit = (e) => {
    const cityName = e.target[1].value;

    this.getWeather(cityName, process.env.REACT_APP_API_KEY);
    e.preventDefault();
  }

  render() {
    console.log(this.state.daily)
    if (this.state.current === '') {
      return (
        <div className="App">
          <IntroPage handleSubmit={this.handleSubmit}/>
        </div>
      )}

    return (
      <div className="App">
        <MainPage 
          handleSubmit={this.handleSubmit}
          weatherData={this.state}
        />
      </div>
    );
  }
}


export default App;
