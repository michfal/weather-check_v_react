import React, {Component} from 'react';
import { useHistory, withRouter } from "react-router-dom";
import WeatherDataContext from './WeatherDataContext';
import {getWeatherForCity, getCoordinates} from '../components/logic/GetData/GetData';

class WeatherDataProvider extends Component {

    state = {
        current: '',
        daily: '',
      }
      render() {
          return(
            <WeatherDataContext.Provider value={{
                state: this.state,

                handleSubmit: async (e) => {
                  e.preventDefault();
                  console.log("submit")
                  const cityName = e.target[1].value;
                  const key = process.env.REACT_APP_API_KEY
                  try {
                    const coordinates = await getCoordinates(cityName, key);
                    const weatherData = await getWeatherForCity(coordinates, key); 
                    this.setState({current: weatherData.current, daily: weatherData.daily} );
                    console.log(this.state)
                    this.props.history.push("/main");
                    }  catch (err) {
                        console.log(err)
                    }
                },

                redirectToMain: async (e) => {
                  e.preventDefault();
                  this.props.history.push("/main");
                  // history.push('/main')
                } 
            }}>
              {this.props.children}
            </WeatherDataContext.Provider>
          )
      }    
}

export default withRouter(WeatherDataProvider)