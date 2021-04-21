import CurrentInfo from '../../components/CurrentInfo/CurrentInfo.components';
import DailyInfo from '../../components/DailyInfo/DailyInfo.components';
import weatherIcons from '../../components/WeatherIcons/weatherIcons.components';

function CurrentDayPage({handleSubmit, weatherData}) {
    return (
      <div className="">
        <CurrentInfo 
        handleSubmit={handleSubmit}
        currentData={weatherData.current}
        />
        <DailyInfo dailyData={weatherData.daily}/>
      </div>
      
    )
  } 

  export default CurrentDayPage;