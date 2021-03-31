import './weatherDateInfo.styles.scss'

function WeatherDateInfo() {
    return(
        <div className="date_info">
            <h2 className="info_text info_text--align_right j-day">28 Mar</h2>
            <h2 class="info_text info_text--align_right j-sunrise">Sunrise 7:02</h2>
            <h2 class="info_text info_text--align_right j-sunset">Sunset 18:19</h2>
        </div>
    )

}

export default WeatherDateInfo;