import Place from '../Place/Place.components';
import Header from '../Header/Header.component';
import WeatherDateInfo from '../WeatherDateInfo/WeatherDateInfo.components';
import WeatherMainInfo from '../WeatherMainInfo/WeatherMainInfo.components';
import WeatherAddInfo from '../WeatherAddInfo/WeatherAddInfo.components';

import './mainPage.styles.scss';

function CurrentInfoPage() {
    return (
      <div className="main_display">
        <Header />
        <Place />
        <WeatherDateInfo />
        <WeatherMainInfo />
        <WeatherAddInfo />
      </div>
    )
  } 

  export default CurrentInfoPage;