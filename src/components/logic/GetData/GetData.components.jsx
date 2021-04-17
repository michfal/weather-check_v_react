

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
    console.log(data)
    return data
    
  } catch (err) {
    console.log("city fetch error")
    console.log(err)
  }
   
}
