import './weatherMainInfo.styles.scss';

import weatherIcons from '../WeatherIcons/weatherIcons.components';

function WeatherMainInfo() {
    // console.log(weatherIcons['01d'])
    const content = weatherIcons['10d']
    // console.log(content)
    return(
        <div className="weather_main_info">
            <div className="weather_basic_info">
            <div className="weather_icon_container" dangerouslySetInnerHTML={{ __html: content }} />
            <h2 className="info_text info_text--temperature_main">9{'\u00b0'}C</h2>
            </div>
            <div className="weather_main_info_description">
              <h2 className="info_text">scattered clouds</h2>
              <h2 className="info_text">Feels like 5{'\u00b0'}C</h2>
            </div>
        </div>
    )
}

export default WeatherMainInfo;