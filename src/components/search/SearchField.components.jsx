function SearchField() {
    return (
      <div>
        <form class="main_display__place_form j-search_form" action="" >
            <button class="form_button j-search_button" >Search</button>
            <input class="form_input j-main_search_form_input" type="text" name="city" />    
        </form>
        <p class="main_display__place_time">time</p>
      </div>
    )
  } 

  export default SearchField;