

export  async function getCoordinates(city, key) {
    try {
      const responseCoord = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
      const dataCoord = await responseCoord.json()
      const coordinates = await dataCoord.coord
      return coordinates
    } catch (err) {
      console.log("coordinates fetch error")
      console.log(err)
    }
    
}

export  async function getWeatherForCity(coordinates, key) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${key}`)
    const data = await response.json()
    return data
    
  } catch (err) {
    console.log("city fetch error")
    console.log(err)
  }
   
}

// export async function getWeather (city, key, state) {
//   try {
//   const coordinates = await getCoordinates(city, key);
//   const weatherData = await getWeatherForCity(coordinates, key);
//   console.log(state) 
//   state.setState({current: weatherData.current, daily: weatherData.daily} );
//   console.log(state)
//   }  catch (err) {
//       console.log(err)
//   }
// }
