import {Component} from 'react';
import WeatherDataContext from '../../context/WeatherDataContext';
import {timeConvert, dateConvert} from '../logic/TimeConvert/TimeConvert';

import './weatherDateInfo.styles.scss';

class WeatherDateInfo extends Component {
    
    render() {
        return(
            <WeatherDataContext.Consumer>
                {(context) => (
                    <div className="date_info">
                        <h2 className="info_text info_text--align_right">{dateConvert(context.state.current.dt)}</h2>
                        <h2 className="info_text info_text--align_right">Sunrise {timeConvert(context.state.current.sunrise)}</h2>
                        <h2 className="info_text info_text--align_right">Sunset {timeConvert(context.state.current.sunset)}</h2>
                    </div>
                )}
            </WeatherDataContext.Consumer>
        )
    }
}

export default WeatherDateInfo;