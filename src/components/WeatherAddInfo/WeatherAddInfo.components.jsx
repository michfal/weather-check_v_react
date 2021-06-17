import React, {Component} from 'react';
import WeatherDataContext from '../../context/WeatherDataContext';
import './weatherAddInfo.styles.scss';

import humidity from '../../assets/humidity_icon.svg';
import wind from '../../assets/wind_icon.svg'
import pressure from '../../assets/pressure_icon.svg'

class WeatherAddInfo extends Component {
    render() {
        return(
            <WeatherDataContext.Consumer>
                {(context) => (
                    <div className="add_info" >
                        <div className="add_info_block">
                            <img className="add_info_block_img" src={humidity} alt="" />
                            <h2 className="add_info_block_display">{context.state.current.humidity}%</h2>
                        </div>
                        <div className="add_info_block">
                            <img className="add_info_block_img" src={wind} alt="" />
                            <h2 className="add_info_block_display">{context.state.current.wind_speed} km/h</h2>
                        </div>
                        <div className="add_info_block">
                            <img className="add_info_block_img" src={pressure} alt="" />
                            <h2 className="add_info_block_display">{context.state.current.pressure} hPa</h2>
                        </div>
                    </div>            
                )}
            </WeatherDataContext.Consumer>           
        )        
    }
};

export default WeatherAddInfo;