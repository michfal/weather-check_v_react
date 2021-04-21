import {timeConvert, dateConvert} from '../logic/TimeConvert/TimeConvert.components';

import './weatherDateInfo.styles.scss';

function WeatherDateInfo(currentData) {
    const data = currentData.currentData;
    const date = dateConvert(data.dt);
    const sunrise = timeConvert(data.sunrise);
    const sunset = timeConvert(data.sunset);
    return(
        <div className="date_info">
            <h2 className="info_text info_text--align_right j-day">{date}</h2>
            <h2 className="info_text info_text--align_right j-sunrise">Sunrise {sunrise}</h2>
            <h2 className="info_text info_text--align_right j-sunset">Sunset {sunset}</h2>
        </div>
    )

}

export default WeatherDateInfo;