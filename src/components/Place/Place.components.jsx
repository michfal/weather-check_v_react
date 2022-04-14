import React, { Component } from 'react';
import WeatherDataContext from '../../context/WeatherDataContext';
import { currentTime } from '../../logic/TimeConvert/TimeConvert';
import Search from '../Search/Search.components';

import './place.styles.scss';

const time = currentTime();

class Place extends Component {
  render() {
    return (
      <WeatherDataContext.Consumer>
        {(context) => (
          <div className='place'>
            <Search />
            <h1 className='place_name'>{context.state.cityName}</h1>
            <p className='place_time'>
              {time.h}:{time.m}
            </p>
          </div>
        )}
      </WeatherDataContext.Consumer>
    );
  }
}

export default Place;
