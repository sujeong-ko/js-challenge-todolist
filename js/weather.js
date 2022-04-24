const API_KEY = "a0ca6e7e3cc26a8d5bcd197851d42b76";
const cityname = document.querySelector(".screen-header__weather .city");
const weather = document.querySelector(".screen-header__weather .weather-text");
const weathericon = document.querySelector(".screen-header__weather .weather-icon img");

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then(data => {
        cityname.innerText = data.name;
        weather.innerText = `${data.weather[0].main} 🌡️${data.main.temp}℃`
        weathericon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    }));
    console.log(url);
}

function onGeoError(){
    cityname.innerText = "Can't find your location😢"
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)