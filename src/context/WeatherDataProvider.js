import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import WeatherDataContext from './WeatherDataContext';
import {getWeatherForCity, getCoordinates} from '../components/logic/GetData/GetData';

class WeatherDataProvider extends Component {

    state = {
        cityName: '',
        current: '',
        daily: '',
      }
      render() {
          return(
            <WeatherDataContext.Provider value={{
                state: this.state,
                handleSubmit: async (e) => {
                  e.preventDefault();
                  const cityName = e.target[1].value;
                  const key = process.env.REACT_APP_API_KEY
                  try {
                    const coordinates = await getCoordinates(cityName, key);
                    const weatherData = await getWeatherForCity(coordinates, key); 
                    this.setState({cityName: cityName, current: weatherData.current, daily: weatherData.daily});
                    this.props.history.push("/main");
                    }  catch (err) {
                        console.log(err)
                    }
                },
            }}>
              {this.props.children}
            </WeatherDataContext.Provider>
          )
      }    
}

export default withRouter(WeatherDataProvider)