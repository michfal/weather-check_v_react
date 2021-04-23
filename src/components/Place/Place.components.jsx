import {currentTime} from '../logic/TimeConvert/TimeConvert.components';
import Search from '../Search/Search.components';


import './place.styles.scss';

function Place({handleSubmit}) {
  const time = currentTime();
    return (
      <div className="place">
        <Search handleSubmit={handleSubmit}/>
        <p className="place_time">{time.h}:{time.m}</p>
      </div>
    )
  } 

  export default Place;