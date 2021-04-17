import React from 'react';
import MainPage from './pages/MainPage/MainPage.components';
import {getCoordinates} from './components/logic/GetData/GetData.components';
import {getWeatherForCity} from './components/logic/GetData/GetData.components';

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
    const coordinates = await getCoordinates(city, key);
    const weatherData = await getWeatherForCity(coordinates, key); 
    this.setState({current: weatherData.current, daily: weatherData.daily} );
    console.log(this.state)
    }  catch (err) {
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
