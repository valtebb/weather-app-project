let now = new Date();

let currentDate = document.querySelector('#current-date');
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
currentDate.innerHTML = `${day} ${hours}:${minutes}`;

// getting API data

function showCurrentTemperature(response){
  console.log(response.data);
  let currentTemp = document.querySelector('#current-temperature');
  currentTemp.innerHTML = Math.round(response.data.main.temp);
  let currentCity = document.querySelector('#current-city');
  currentCity.innerHTML = response.data.name;
  let currentCondition = document.querySelector('#condition');
  currentCondition.innerHTML = response.data.weather[0].description;
}

function search(city){
  let apiKey = '297d2ceaacf10d700959a7f0a28e4920';
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

  axios.get(apiUrl).then(showCurrentTemperature);
}



function searchLocation(event){
  event.preventDefault();
  let serchCityinput = document.querySelector('#search');
  search(serchCityinput.value);
}

let form = document.querySelector('#weather-search');
form.addEventListener('submit', searchLocation);