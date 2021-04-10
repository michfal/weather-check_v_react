import SearchField from '../../components/SearchField/SearchField.components';
import Header from '../../components/Header/Header.component';
import WeatherDateInfo from '../../components/WeatherDateInfo/WeatherDateInfo.components';
import WeatherMainInfo from '../../components/WeatherMainInfo/WeatherMainInfo.components';
import WeatherAddInfo from '../../components/WeatherAddInfo/WeatherAddInfo.components';


import './currentDay.styles.scss';

function CurrentDayPage() {
    return (
      <div className="main_display">
        <Header />
        <SearchField />
        <WeatherDateInfo />
        <WeatherMainInfo />
        <WeatherAddInfo />       
      </div>

    )
  } 

  export default CurrentDayPage;