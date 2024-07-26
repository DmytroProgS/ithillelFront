
document.addEventListener("DOMContentLoaded", function(){

const currentData = new Date();
const month = currentData.getMonth();
const day = currentData.getDate();
const year = currentData.getFullYear();
const dayWeek = currentData.getDay();
const hours = currentData.getHours().toString().padStart(2, '0');
const minutes = currentData.getMinutes().toString().padStart(2, '0');

const daysOfWeek = [
    "Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"
];
const daysOfMonth = [
     "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
    "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
];


fetch("https://api.openweathermap.org/data/2.5/weather?lat=51.5073219&lon=-0.1276474&appid=70a178b07ab818b481af65aff76ae783")
 .then(response => response.json())
 .then(data => 

 forecastInfo.innerHTML = `
    <li>City: ${data.name}</li>
    <li>Дата:  ${day}, ${daysOfMonth[month]}, ${year} - ${daysOfWeek[dayWeek]}</li>
    <li>Час: ${hours}:${minutes}</li>
    <br>
    <li>Вологість: ${data.main.humidity}%</li>
    <li>Тиск: ${data.main.pressure} hPa</li>
    <li>Вітер: ${data.wind.speed} km/h SSE</li>
    <li>Температура: ${(Math.round(data.main.temp-273.15)).toFixed(2)} °C</li>
    <li>Відчувається як: ${(Math.round(data.main.feels_like-273.15).toFixed(2))} °C</li>
    <li>Мінлива хмарність: ${data.weather[0].description} </li>
    `
 )
    const weatherBlock = document.getElementById('weather-forecast');
    let forecastInfo = document.createElement("ul");
    weatherBlock.appendChild(forecastInfo);
})

const buttonUpdate = document.querySelector('.update-data');

buttonUpdate.addEventListener("click", () => {
    location.reload();
})