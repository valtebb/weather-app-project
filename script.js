// let now = new Date();

// let currentDate = document.querySelector('#current-date');
// let date = now.getDate();
// let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// let day = days[now.getDay()];
// let hours = now.getHours();
// if (hours < 10) {
//   hours = `0${hours}`;
// }
// let minutes = now.getMinutes();
// if (minutes < 10) {
//   minutes = `0${minutes}`;
// }
// currentDate.innerHTML = `${day} ${hours}:${minutes}`;
function formatDate (timestamp){
  
  let now = new Date(timestamp);
  let date = now.getDate();
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let day = days[now.getDay()];
  let hours = now.getHours();
    if (hours < 10) {
  hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
    if (minutes < 10) {
  minutes = `0${minutes}`;
}

  return `${day} ${hours}:${minutes}`;
}

// getting API data

function showCurrentTemperature(response){
  
  let currentTemp = document.querySelector('#current-temperature');
  currentTemp.innerHTML = Math.round(response.data.main.temp);
  let currentCity = document.querySelector('#current-city');
  currentCity.innerHTML = response.data.name;
  let currentCondition = document.querySelector('#condition');
  
  let currentDate = document.querySelector('#current-date');
  currentDate.innerHTML = formatDate(response.data.dt * 1000);
  
  currentCondition.innerHTML = response.data.weather[0].description;
  let icon = document.querySelector('#icon');
  icon.setAttribute("src", `img/${response.data.weather[0].icon}.png`)
  
  celsiusTemp = Math.round(response.data.main.temp);
  

};
function formatHours(timestamp){
  let now = new Date(timestamp);
  let hours = now.getHours();
    if (hours < 10) {
  hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
    if (minutes < 10) {
  minutes = `0${minutes}`;
}

  return `${hours}:${minutes}`;

}


function showForecast(response){

  let forecastElement = document.querySelector('#weather-forecast');
  forecastElement.innerHTML = null;
  let forecast = null;

  for (let i = 0; i < 6; i++){
    forecast = response.data.list[i];
    forecastElement.innerHTML += `
      <div col-2 class="forecast">
        <h3>${formatHours(forecast.dt * 1000)}</h3>
        <img src="img/${forecast.weather[0].icon}.png" alt="sunny" class="icons">
        <div class="forecast-temp">
        <h3>${Math.round(forecast.main.temp_min)}°</h3>
      </div>`
  }

}

function search(city){
  let apiKey = '297d2ceaacf10d700959a7f0a28e4920';
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

  axios.get(apiUrl).then(showCurrentTemperature);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showForecast);
}


function searchLocation(event){
  event.preventDefault();
  let serchCityinput = document.querySelector('#search');
  search(serchCityinput.value);
}

function showFahrenheitTemperature(event){
  event.preventDefault();
  let tempElement = document.querySelector('#current-temperature');
  let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
  tempElement.innerHTML = Math.round(fahrenheitTemp);
}

function showCelsiusTemperature(event){
  event.preventDefault();
  let tempElement = document.querySelector('#current-temperature');
  tempElement.innerHTML = celsiusTemp;
}

let celsiusTemp = null;

let form = document.querySelector('#weather-search');
form.addEventListener('submit', searchLocation);

let fahrenheit = document.querySelector('#fahrenheit');
fahrenheit.addEventListener('click', showFahrenheitTemperature);

let celsius = document.querySelector('#celsius');
celsius.addEventListener('click', showCelsiusTemperature);

  search("Stafford");
// Background image

function backgroundImage(){
  let bgImage = document.querySelector('#bg-image');
  let date = new Date();
  let hours = date.getHours();
  if (hours > 7 && hours < 20) {
    bgImage.setAttribute("style", "background: url('img/day_sm.png')");
  } else {
    bgImage.setAttribute("style", "background: url('img/night_sm.png')");
  }
}
backgroundImage();

