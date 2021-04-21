import '../DailyInfo/dailyInfo.styles.scss';

function DailyInfoHeader() {
  return(
    <div className="display">
        <h2 className="display__header">Next 7 days</h2>
        <h3 className="display__sub_header">Day</h3>
        <h3 className="display__sub_header">Forecast</h3>
        <h3 className="display__sub_header">Wind</h3>
        <h3 className="display__sub_header">Humidity</h3>
        <h3 className="display__sub_header">Pressure</h3>
    </div>
  )
}

export default DailyInfoHeader