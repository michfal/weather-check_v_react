import DailyInfoBlock from '../DailyInfoBlock/DailyInfoBlock.components';
import DailyInfoHeader from '../DailyInfoHeader/DailyInfoHeader.component';

import './dailyInfo.styles.scss';

function FutureInfo() {
  return (
    <div className='seven_days_container'>
      <DailyInfoHeader />
      <DailyInfoBlock />
    </div>
  );
}

export default FutureInfo;
