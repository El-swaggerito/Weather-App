const apiKey = '6f01874c8efbbfd3b960b036165312e9';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const cityElement = document.querySelector(".city");
const temperature = document.querySelector(".temp")
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherSec = document.querySelector(".weather");

async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404){
        document.querySelector(".error").style.display = "block"
        weatherSec.style.display = "none";
    } else{

    var data = await response.json();

    cityElement.innerHTML = data.name;
    temperature.innerHTML = Math.round(data.main.temp) + "°c";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./Icons/clouds.png";
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./Icons/rain.png";
    } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./Icons/drizzle.png";
    } else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./Icons/mist.png";
    }  else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "./Icons/snow.png";
    }

    weatherSec.style.display = "block";
    document.querySelector(".error").style.display = "none"
    }

    

};


searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
});
