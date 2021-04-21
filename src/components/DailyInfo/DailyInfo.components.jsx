import DailyInfoBlock from '../DailyInfoBlock/DailyInfoBlock.components';
import DailyInfoHeader from '../DailyInfoHeader/DailyInfoHeader.component';

import './dailyInfo.styles.scss';

function FutureInfo(dailyData) {
    if(dailyData.dailyData !== '') {
        return(
            <div className="seven_days_container">
                <DailyInfoHeader />
                <DailyInfoBlock dailyData={dailyData.dailyData}/>   
            </div>
        )
    }
    return('')
    
}

export default FutureInfo;