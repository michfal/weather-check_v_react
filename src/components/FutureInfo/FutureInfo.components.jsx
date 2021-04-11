import weatherIcons from '../WeatherIcons/weatherIcons.components';

import humidity from '../../assets/humidity_icon_white.svg';
import wind from '../../assets/wind_icon_white.svg'
import pressure from '../../assets/pressure_icon_white.svg'

import './futureInfo.styles.scss';

function FutureInfo() {
    const content = weatherIcons['10d']
    return(
        <div className="seven_days_container">
            <div className="seven_days_display">
                <h2 className="seven_days_display__header">Next 7 days</h2>
                <h3 className="seven_days_display__sub_header">Day</h3>
                <h3 className="seven_days_display__sub_header">Forecast</h3>
                <h3 className="seven_days_display__sub_header">Wind</h3>
                <h3 className="seven_days_display__sub_header">Humidity</h3>
                <h3 className="seven_days_display__sub_header">Pressure</h3>
            </div>

            <div className="seven_days_display seven_days_display_blocks j-seven_days_display">
                <div className="seven_days_display__sub_block seven_days_display__sub_block_date">
                    <h2 className="seven_days_display__sub_block_header">11 Apr</h2>
                </div>
                <div className="seven_days_display__sub_block seven_days_display__sub_block_temperature">
                    <div className="weather_icon_container" dangerouslySetInnerHTML={{ __html: content }} />
                    <div className="seven_days_display__sub_block_temperature_values_container">
                      <h2 className="seven_days_display__sub_block_header seven_days_display__sub_block_header--big">9{'\u00b0'}C</h2>
                      <h2 className="seven_days_display__sub_block_header">9{'\u00b0'}C</h2>
                    </div>
                </div>
        
                <div className="seven_days_display__sub_block"><img className="add_info_block_img" src={wind} alt="" /><h2 className="seven_days_display__sub_block_header">7 km/h</h2></div>
                <div className="seven_days_display__sub_block"><img className="add_info_block_img" src={humidity} alt="" /><h2 className="seven_days_display__sub_block_header">40%</h2></div>
                <div className="seven_days_display__sub_block"><img className="add_info_block_img" src={pressure} alt="" /><h2 className="seven_days_display__sub_block_header">1017 hPa</h2></div>
            </div>
        </div>
    )
}

export default FutureInfo;