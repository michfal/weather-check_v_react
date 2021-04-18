import SearchField from '../SearchField/SearchField.components';
import Header from '../Header/Header.component';
import WeatherDateInfo from '../WeatherDateInfo/WeatherDateInfo.components';
import WeatherMainInfo from '../WeatherMainInfo/WeatherMainInfo.components';
import WeatherAddInfo from '../WeatherAddInfo/WeatherAddInfo.components';

import './mainPage.styles.scss';

function CurrentInfoPage({handleSubmit, currentData}) {
    return (
      <div className="main_display">
        <Header />
        <SearchField handleSubmit={handleSubmit}/>
        <WeatherDateInfo />
        <WeatherMainInfo currentData={currentData}/>
        <WeatherAddInfo />       
      </div>

    )
  } 

  export default CurrentInfoPage;