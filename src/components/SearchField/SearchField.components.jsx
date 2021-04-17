import './searchField.styles.scss';

function SearchField({handleSubmit}) {
    return (
      <div className="place">
        <form className="place_form" onSubmit={handleSubmit} >
            <button className="form_button" >Search</button>
            <input className="form_input" type="text" name="city" />    
        </form>
        <p className="place_time">17:03</p>
      </div>
    )
  } 

  export default SearchField;