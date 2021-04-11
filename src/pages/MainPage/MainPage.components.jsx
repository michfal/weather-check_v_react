import SearchField from '../../components/currentInfo/SearchField/SearchField.components';
import Header from '../../components/currentInfo/Header/Header.component';
import WeatherDateInfo from '../../components/currentInfo/WeatherDateInfo/WeatherDateInfo.components';
import WeatherMainInfo from '../../components/currentInfo/WeatherMainInfo/WeatherMainInfo.components';
import WeatherAddInfo from '../../components/currentInfo/WeatherAddInfo/WeatherAddInfo.components';



import './mainPage.styles.scss';

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