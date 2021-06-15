import {Component} from 'react'
import WeatherDataContext from '../../context/WeatherDataContext';
import './search.styles.scss';

class Search extends Component {
    render(){
        return(
            <WeatherDataContext.Consumer>
            {(context) => (
                <form className="form" onSubmit={context.handleSubmit}>
                    <button onClick={context.searchClick} className="form_button" >Search</button>
                    <input className="form_input" type="text" name="city" />    
                </form>
            )}
            </WeatherDataContext.Consumer>
        )
    }
};


export default Search;