import './weatherMainInfo.styles.scss';

import weatherIcons from '../WeatherIcons/weatherIcons.components';

function WeatherMainInfo(currentData) {
    const data = currentData.currentData;
    const icon = weatherIcons[data.weather[0].icon];
    return(
        <div className="weather_main_info">
            <div className="weather_basic_info">
            <div className="weather_icon_container" dangerouslySetInnerHTML={{ __html: icon }} />
            <h2 className="info_text info_text--temperature_main">{Math.round(data.temp)}{'\u00b0'}C</h2>
            </div>
            <div className="weather_main_info_description">
              <h2 className="info_text info_text--align_left">{data.weather[0].description}</h2>
              <h2 className="info_text">Feels like {Math.round(data.feels_like)}{'\u00b0'}C</h2>
            </div>
        </div>
    )
}

export default WeatherMainInfo;