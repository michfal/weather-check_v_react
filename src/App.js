import React from 'react';
import MainPage from './pages/MainPage/MainPage.components';

import './App.scss';


// function App() {
//   return (
//     <div className="App">
//         <MainPage />   
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      current: '',
      daily: ''
    }
  }

  getWeather = async (city, key) => {
    try {
    const coordinates = await this.getCoordinates(city, key)
    const weatherData = await this.getWeatherForCity(coordinates, key) 
    // console.log(weatherData.current)
    this.setState({current: weatherData.current, daily: weatherData.daily} )
    console.log(this.state)
    }  catch (err) {
        console.log(err)
    }
  }

  getCoordinates = async (city, key) => {
    try {
      const responseCoord = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
      const dataCoord = await responseCoord.json()
      const coordinates = await dataCoord.coord
      // console.log(coordinates)
      return coordinates
    } catch (err) {
      console.log("coordinates fetch error")
      console.log(err)
    }
    
  }

  getWeatherForCity = async (coordinates, key) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${key}`)
      const data = await response.json()
      // console.log(data)
      return data

    } catch (err) {
      console.log("city fetch error")
      console.log(err)
    }
  
  }


  handleSubmit = (e) => {
    const cityName = e.target[1].value;
    // console.log(cityName);
    this.getWeather(cityName, process.env.REACT_APP_API_KEY);
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <MainPage handleSubmit={this.handleSubmit}/>
      </div>
      
    );
  }
}

export default App;
