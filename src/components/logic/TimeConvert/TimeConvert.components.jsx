export function dateConvert(UNIX_timestamp){
    const timestamp = new Date(UNIX_timestamp * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    const month = months[timestamp.getMonth()];
    const date = timestamp.getDate();
    const time = date + ' ' + month; 
    return time;
  }

  export function timeConvert(UNIX_timestamp){
    const timestamp = new Date(UNIX_timestamp * 1000);
    const hour = timestamp.getHours();
    const min = timestamp.getMinutes();
    const time = hour + ':' + min;   
    return time;
  }

  export function currentTime() {
    const timeDisplay = {
        h: '',
        m: ''
    };
    const date = new Date();  
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if(hours < 10)  {hours = '0' + hours};
    if(minutes < 10)  {minutes = '0' + minutes};
    // timeDisplay.innerHTML = `${hours}:${minutes}`;
    timeDisplay.h = hours;
    timeDisplay.m = minutes;
    return timeDisplay
  }
