import weatherIcons from '../WeatherIcons/weatherIcons.components';

import humidity from '../../assets/humidity_icon_white.svg';
import wind from '../../assets/wind_icon_white.svg'
import pressure from '../../assets/pressure_icon_white.svg'

import './futureInfo.styles.scss';

function FutureInfo() {
    const content = weatherIcons['10d']
    return(
        <div className="seven_days_container">
            <div className="display">
                <h2 className="display__header">Next 7 days</h2>
                <h3 className="display__sub_header">Day</h3>
                <h3 className="display__sub_header">Forecast</h3>
                <h3 className="display__sub_header">Wind</h3>
                <h3 className="display__sub_header">Humidity</h3>
                <h3 className="display__sub_header">Pressure</h3>
            </div>

            <div className="display display_blocks">

                <div className="display__sub_block display__sub_block_date">
                    <h2 className="display__sub_block_header">11 Apr</h2>
                </div>

                <div className="display__sub_block display__sub_block_temperature">
                    <div className="weather_icon_container" dangerouslySetInnerHTML={{ __html: content }} />
                    <div className="display__sub_block_temperature_values_container">
                      <h2 className="display__sub_block_header display__sub_block_header--big">9{'\u00b0'}C</h2>
                      <h2 className="display__sub_block_header">9{'\u00b0'}C</h2>
                    </div>
                </div>
        
                <div className="display__sub_block">
                    <img className="display__sub_block_image" src={wind} alt="" />
                    <h2 className="display__sub_block_header">7 km/h</h2>
                </div>
                <div className="display__sub_block">
                    <img className="display__sub_block_image" src={humidity} alt="" />
                    <h2 className="display__sub_block_header">40%</h2>
                </div>
                <div className="display__sub_block">
                    <img className="display__sub_block_image" src={pressure} alt="" />
                    <h2 className="display__sub_block_header">1017 hPa</h2>
                </div>
            </div>
        </div>
    )
}

export default FutureInfo;