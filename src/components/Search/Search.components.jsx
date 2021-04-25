import './search.styles.scss';

function Search({handleSubmit}) {

    return(
        <form className="form" onSubmit={handleSubmit} >
            <button className="form_button" >Search</button>
            <input className="form_input" type="text" name="city" />    
        </form>
    )
    
}

export default Search;