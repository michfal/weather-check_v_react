import {currentTime} from '../logic/TimeConvert/TimeConvert.components'

import './searchField.styles.scss';

function SearchField({handleSubmit}) {
  const time = currentTime();
    return (
      <div className="place">
        <form className="place_form" onSubmit={handleSubmit} >
            <button className="form_button" >Search</button>
            <input className="form_input" type="text" name="city" />    
        </form>
        <p className="place_time">{time.h}:{time.m}</p>
      </div>
    )
  } 

  export default SearchField;