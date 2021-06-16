import React from 'react';
import CurrentInfo from '../../components/CurrentInfo/CurrentInfo.components';
import DailyInfo from '../../components/DailyInfo/DailyInfo.components';

function CurrentDayPage() {
    return (
      <React.Fragment >
        <CurrentInfo />
        <DailyInfo />
      </React.Fragment>
    )
  } 

  export default CurrentDayPage;