import Place from '../Place/Place.components';
import Header from '../Header/Header.component';
import WeatherDateInfo from '../WeatherDateInfo/WeatherDateInfo.components';
import WeatherMainInfo from '../WeatherMainInfo/WeatherMainInfo.components';
import WeatherAddInfo from '../WeatherAddInfo/WeatherAddInfo.components';

import './mainPage.styles.scss';

function CurrentInfoPage({handleSubmit, currentData}) {
    return (
      <div className="main_display">
        <Header />
        <Place handleSubmit={handleSubmit}/>
        <WeatherDateInfo currentData={currentData}/>
        <WeatherMainInfo currentData={currentData}/>
        <WeatherAddInfo currentData={currentData}/>       
      </div>

    )
  } 

  export default CurrentInfoPage;