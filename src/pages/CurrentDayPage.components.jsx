import SerachField from '../components/search/SearchField.components';


function CurrentDayPage() {
    return (
      <div>
        <div class="main_display__header">  
          <h1 class="logo">Weather-Check</h1>    
        </div>

        <div class="main_display__date_info">
                <h2 class="info_text info_text--align_right j-day"></h2><h2 class="info_text info_text--align_right j-sunrise"></h2><h2 class="info_text info_text--align_right j-sunset"></h2>
            </div>
            <div class="main_display__weather">
        </div>

        <div class="main_display__add_info j-add_info hidden" >
            <div class="main_display__add_info_block">
                <img class="main_display__add_info_block_img" src="../images/humidity_icon.svg" alt="" />
                <h2 class="main_display__add_info_block_display"><span class="j-add_info_humidity"></span>%</h2>
            </div>
            <div class="main_display__add_info_block">
                <img class="main_display__add_info_block_img" src="../images/wind_icon.svg" alt="" />
                <h2 class="main_display__add_info_block_display"><span class="j-add_info_wind"></span> km/h</h2>
            </div>
            <div class="main_display__add_info_block">
                <img class="main_display__add_info_block_img" src="../images/pressure_icon.svg" alt="" />
                <h2 class="main_display__add_info_block_display"><span class="j-add_info_pressure"></span> hPa</h2>
            </div>
        </div>
        
        <SerachField />
      </div>

    )
  } 

  export default CurrentDayPage;