// DEFINE UI ELEMENTS
const cityInput = document.getElementById('input-city')
const temperature = document.querySelector('#temp')
const city = document.querySelector('#cityname')
const weatherDescription = document.querySelector('#description')
const weatherIcon = document.querySelector('#icon')
const searchIcon = document.getElementById('search')

const apiKey = 'cdc611cf09764dbdf027930621632644'

function getWeather() {
  fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=imperial&appid=${apiKey}`)
    .then((res) => {
      const data = res.json()
      return data
    }).then((data) => {
      city.textContent = 'Weather in ' + data.name
      const test = Math.ceil(data.main.temp)
      temperature.textContent = test + '°F'
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      console.log(data.weather[0].icon)
      weatherDescription.textContent = data.weather[0].description
      console.log(data)
    })
}

// ADD AN EVENT LISTENER FOR THE INUT FIELD FOR THE ENTER KEY
cityInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    getWeather()
  }
})

searchIcon.addEventListener('click', getWeather)
