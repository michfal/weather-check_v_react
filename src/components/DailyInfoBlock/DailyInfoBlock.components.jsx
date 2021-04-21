import React from "react";
import nextId from "react-id-generator";

import weatherIcons from '../WeatherIcons/weatherIcons.components';

import humidity from '../../assets/humidity_icon_white.svg';
import wind from '../../assets/wind_icon_white.svg';
import pressure from '../../assets/pressure_icon_white.svg';

import '../DailyInfo/dailyInfo.styles.scss';

function DailyInfoBlock(dailyData) {
    const data = dailyData.dailyData 
    console.log(data)
    
    return(
        data.map((e) => {
            const uniqeId = nextId()
            
            const content = weatherIcons[e.weather[0].icon]
            return(
                <div key={uniqeId} className="display display_blocks">
                
                    <div className="display__sub_block display__sub_block_date">
                        <h2 className="display__sub_block_header">11 Apr</h2>
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
        })

    )
}

export default DailyInfoBlock