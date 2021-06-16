import React, {Component} from "react";
import WeatherDataContext from '../../context/WeatherDataContext';
import nextId from "react-id-generator";

import weatherIcons from '../WeatherIcons/weatherIcons.components';
import {dateConvert} from '../logic/TimeConvert/TimeConvert'

import humidity from '../../assets/humidity_icon_white.svg';
import wind from '../../assets/wind_icon_white.svg';
import pressure from '../../assets/pressure_icon_white.svg';

import '../DailyInfo/dailyInfo.styles.scss';

class DailyInfoBlock extends Component {

    render(){
        return(
            <WeatherDataContext.Consumer>
                {(context) => ( 
                    <React.Fragment>
                        {context.state.daily.map((e) => {
                            const uniqeId = nextId()
                            const content = weatherIcons[e.weather[0].icon]
                            
                            return(
                                <div key={uniqeId} className="display display_blocks">
                                
                                    <div className="display__sub_block display__sub_block_date">
                                        <h2 className="display__sub_block_header">{dateConvert(e.dt)}</h2>
                                    </div>

                                    <div className="display__sub_block display__sub_block_temperature">
                                        <div className="weather_icon_container" dangerouslySetInnerHTML={{ __html: content }} />
                                        <div className="display__sub_block_temperature_values_container">
                                          <h2 className="display__sub_block_header display__sub_block_header--big">{Math.round(e.temp.min)}{'\u00b0'}C</h2>
                                          <h2 className="display__sub_block_header">{Math.round(e.temp.min)}{'\u00b0'}C</h2>
                                        </div>
                                    </div>

                                    <div className="display__sub_block">
                                        <img className="display__sub_block_image" src={wind} alt="" />
                                        <h2 className="display__sub_block_header">{e.wind_speed} km/h</h2>
                                    </div>
                                    <div className="display__sub_block">
                                        <img className="display__sub_block_image" src={humidity} alt="" />
                                        <h2 className="display__sub_block_header">{e.humidity}%</h2>
                                    </div>
                                    <div className="display__sub_block">
                                        <img className="display__sub_block_image" src={pressure} alt="" />
                                        <h2 className="display__sub_block_header">{e.pressure} hPa</h2>
                                    </div>
                                </div>
                            )
                        })}
                    </React.Fragment>
                )}  
            </WeatherDataContext.Consumer> 
        )        
    }
}

export default DailyInfoBlock