import React, {useContext} from 'react';
import WeatherDataContext from '../../context/WeatherDataContext';
import { useHistory } from "react-router";
import CurrentInfo from '../../components/CurrentInfo/CurrentInfo.components';
import DailyInfo from '../../components/DailyInfo/DailyInfo.components';

function CurrentDayPage() {
  const {state} = useContext(WeatherDataContext);
  const history = useHistory();
  if(state.cityName !== '') {
    return (
      <React.Fragment  >
        <CurrentInfo />
        <DailyInfo />
      </React.Fragment>
    )
  };
  
  history.push("/");
  return '';
};

export default CurrentDayPage;