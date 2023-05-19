const cities = ['London', 'Venice', 'Buenos Aires', 'New York', 'Berlin', 'Barcelona'];
const apiKey = '2a24efee8795d3e00ab974f54c8e22cf';

const fetchWeatherData = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

const displayWeatherData = async () => {
    const main = document.querySelector('#weather-main');
    for (const city of cities) {
        const weatherData = await fetchWeatherData(city);
        const temp = weatherData.main.temp;
        const icon = weatherData.weather[0].icon;
        const cityName = weatherData.name;
        const weatherBox = document.createElement('div');
        weatherBox.classList.add('weather-box');
        weatherBox.innerHTML = `
      <h2>${cityName}</h2>
      <img class="weather-img" src="https://openweathermap.org/img/wn/${icon}.png" alt="">
      <p>${temp}°C</p>
    `;
        main.appendChild(weatherBox);
    }
};

displayWeatherData();