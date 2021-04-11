import './searchField.styles.scss';

function SearchField() {
    return (
      <div className="place">
        <form className="place_form j-search_form" action="" >
            <button className="form_button j-search_button" >Search</button>
            <input className="form_input j-main_search_form_input" type="text" name="city" />    
        </form>
        <p className="place_time">17:03</p>
      </div>
    )
  } 

  export default SearchField;