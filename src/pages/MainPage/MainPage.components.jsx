import CurrentInfo from '../../components/CurrentInfo/CurrentInfo.components';
import FutureInfo from '../../components/FutureInfo/FutureInfo.components';
import weatherIcons from '../../components/WeatherIcons/weatherIcons.components';

function CurrentDayPage({handleSubmit, weatherData}) {
    // console.log('weather: ', weatherData.current)
    return (
      <div className="">
        <CurrentInfo 
        handleSubmit={handleSubmit}
        currentData={weatherData.current}
        />
        <FutureInfo />
      </div>
      
    )
  } 

  export default CurrentDayPage;