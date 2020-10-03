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
