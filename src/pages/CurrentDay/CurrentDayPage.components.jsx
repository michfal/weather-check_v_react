import SearchField from '../../components/SearchField/SearchField.components';
import Header from '../../components/Header/Header.component';
import WeatherDateInfo from '../../components/WeatherDateInfo/WeatherDateInfo.components';
import WeatherMainInfo from '../../components/WeatherMainInfo/WeatherMainInfo.components';

import './currentDay.styles.scss';

function CurrentDayPage() {
    return (
      <div className="main_display">
        <Header />
        <SearchField />
        <WeatherDateInfo />
        <WeatherMainInfo />

        {/* <div className="main_display__date_info">
                <h2 className="info_text info_text--align_right j-day"></h2><h2 class="info_text info_text--align_right j-sunrise"></h2><h2 class="info_text info_text--align_right j-sunset"></h2>
            </div>
            <div className="main_display__weather">
        </div>

        <div className="main_display__add_info j-add_info hidden" >
            <div className="main_display__add_info_block">
                <img className="main_display__add_info_block_img" src="../images/humidity_icon.svg" alt="" />
                <h2 className="main_display__add_info_block_display"><span class="j-add_info_humidity"></span>%</h2>
            </div>
            <div className="main_display__add_info_block">
                <img className="main_display__add_info_block_img" src="../images/wind_icon.svg" alt="" />
                <h2 className="main_display__add_info_block_display"><span class="j-add_info_wind"></span> km/h</h2>
            </div>
            <div className="main_display__add_info_block">
                <img className="main_display__add_info_block_img" src="../images/pressure_icon.svg" alt="" />
                <h2 className="main_display__add_info_block_display"><span class="j-add_info_pressure"></span> hPa</h2>
            </div>
        </div> */}
        
        
      </div>

    )
  } 

  export default CurrentDayPage;