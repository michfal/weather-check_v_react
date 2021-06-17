import React, {Component} from "react";
import WeatherDataContext from '../../context/WeatherDataContext';

import weatherIcons from '../WeatherIcons/weatherIcons.components';
import capitalize from '../logic/Capitalize/Capitalize';

import './weatherMainInfo.styles.scss';


class WeatherMainInfo extends Component {
    render() {
        return(
            <WeatherDataContext.Consumer>
                {(context) => (
                    <div className="weather_main_info">
                        <div className="weather_basic_info">
                            <div className="weather_icon_container" dangerouslySetInnerHTML={
                                { __html: weatherIcons[context.state.current.weather[0].icon] }
                            } />
                            <h2 className="info_text temperature_main">{Math.round(context.state.current.temp)}{'\u00b0'}C</h2>
                        </div>
                        <div className="weather_main_info_description">
                          <h2 className="info_text info_text--align_left info_text--center_mobile">{
                            capitalize(context.state.current.weather[0].description)
                          }</h2>
                          <h2 className="info_text">Feels like {Math.round(context.state.current.feels_like)}{'\u00b0'}C</h2>
                        </div>
                    </div>
                )}
            </WeatherDataContext.Consumer>
        )
    }
};

export default WeatherMainInfo;