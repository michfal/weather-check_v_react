import React from 'react';

import './weatherAddInfo.styles.scss';

import humidity from '../../assets/humidity_icon.svg';
import wind from '../../assets/wind_icon.svg'
import pressure from '../../assets/pressure_icon.svg'



function WeatherAddInfo(currentData) {
    const data = currentData.currentData;
    return(
        <div className="add_info j-add_info hidden" >
            <div className="add_info_block">
                <img className="add_info_block_img" src={humidity} alt="" />
                <h2 className="add_info_block_display">{data.humidity}%</h2>
            </div>
            <div className="add_info_block">
                <img className="add_info_block_img" src={wind} alt="" />
                <h2 className="add_info_block_display">{data.wind_speed} km/h</h2>
            </div>
            <div className="add_info_block">
                <img className="add_info_block_img" src={pressure} alt="" />
                <h2 className="add_info_block_display">{data.pressure} hPa</h2>
            </div>
        </div>
    )
}

export default WeatherAddInfo;