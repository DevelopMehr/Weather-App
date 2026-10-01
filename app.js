const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");

const cityName = document.querySelector("#cityName");
const temperature = document.querySelector("#temperature");
const weather = document.querySelector("#weather");
const humidity = document.querySelector("#humidity");

searchBtn.addEventListener("click", function() {
    const city = cityInput.value;

    // if input is empty
    if(city === "") {
        cityName.textContent = "Please enter a city!";
        return;
    }

    // show loading
    cityName.textContent = "Loading...";
    temperature.textContent = "";
    weather.textContent = "";
    humidity.textContent = "";

    fetch(`https://wttr.in/${city}?format=j1`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const temp = data.current_condition[0].temp_C;
            const desc = data.current_condition[0].weatherDesc[0].value;
            const hum = data.current_condition[0].humidity;

            cityName.textContent = city;
            temperature.textContent = "Temperature: " + temp + "°C";
            weather.textContent = "Weather: " + desc;
            humidity.textContent = "Humidity: " + hum + "%";
        })
        .catch(function() {
            cityName.textContent = "City not found!";
        });
});