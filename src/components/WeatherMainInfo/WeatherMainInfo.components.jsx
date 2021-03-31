import './weatherMainInfo.styles.scss';

import weatherIcons from '../WeatherIcons/weatherIcons.components'

function WeatherMainInfo() {
    return(
        <div className="weather_main_info">
            <div className="weather_basic_info">
            <svg class="weather_main_info_icon" viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M4497.64 431.595V415.63a6.16 6.16 0 00-6.16-6.154 6.157 6.157 0 00-6.15 6.154v15.965a6.158 6.158 0 006.15 6.155 6.16 6.16 0 006.16-6.155zm33.74-19.075l-11.29-11.288a6.15 6.15 0 00-8.7 0 6.143 6.143 0 000 8.704l11.28 11.288a6.165 6.165 0 008.71 0 6.161 6.161 0 000-8.704zm-68.5-11.289l-11.29 11.289a6.143 6.143 0 000 8.704 6.153 6.153 0 008.7 0l11.29-11.288a6.161 6.161 0 000-8.704 6.152 6.152 0 00-8.7-.001zm28.73-42.567c12.51 0 22.67 10.156 22.67 22.665 0 12.509-10.16 22.664-22.67 22.664-12.5 0-22.66-10.155-22.66-22.664 0-12.509 10.16-22.665 22.66-22.665zm-34.43 16.51h-15.96a6.16 6.16 0 00-6.16 6.155 6.16 6.16 0 006.16 6.154h15.96a6.16 6.16 0 006.16-6.154 6.16 6.16 0 00-6.16-6.155zm84.57 0h-15.97a6.158 6.158 0 00-6.15 6.155 6.157 6.157 0 006.15 6.154h15.97a6.15 6.15 0 006.15-6.154 6.152 6.152 0 00-6.15-6.155zm-19.08-33.741l-11.28 11.288a6.144 6.144 0 000 8.705 6.153 6.153 0 008.7 0l11.29-11.289a6.161 6.161 0 000-8.704 6.165 6.165 0 00-8.71 0zm-51.09 11.288l-11.29-11.288a6.153 6.153 0 00-8.7 0 6.143 6.143 0 000 8.704l11.29 11.289a6.153 6.153 0 008.7 0 6.162 6.162 0 000-8.705zm26.06-5.694v-15.965a6.16 6.16 0 00-6.16-6.154 6.157 6.157 0 00-6.15 6.154v15.965a6.158 6.158 0 006.15 6.155 6.16 6.16 0 006.16-6.155z" fill="url(#_clearSkyLinear1)" transform="matrix(.4839 0 0 .4839 -2145.96 -157.194)"/><defs><linearGradient id="_clearSkyLinear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-134.494 2340.064 -745.912) scale(50.8312)"><stop offset="0" stop-color="#f1684c"/><stop offset="1" stop-color="#f9c268"/></linearGradient></defs></svg>
            <h2 className="info_text info_text--temperature_main">9C</h2>
            </div>
            <div className="weather_main_info_description">
              <h2 className="info_text">scattered clouds</h2>
              <h2 className="info_text">Feels like 5C</h2>
            </div>
        </div>
    )
}

export default WeatherMainInfo;