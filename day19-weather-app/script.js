// Day 19: Weather App
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const locationBtn = document.getElementById("locationBtn");

const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");

function fetchWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      cityName.textContent = data.name;
      temperature.textContent = `${data.main.temp}°C`;
      description.textContent = data.weather[0].description;
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      localStorage.setItem("lastCity", city);
    })
    .catch(() => {
      cityName.textContent = "City not found";
      temperature.textContent = "";
      description.textContent = "";
      weatherIcon.src = "";
    });
}

searchBtn.addEventListener("click", () => {
  if (cityInput.value) fetchWeather(cityInput.value);
});

locationBtn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      .then(data => {
        cityName.textContent = data.name;
        temperature.textContent = `${data.main.temp}°C`;
        description.textContent = data.weather[0].description;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        localStorage.setItem("lastCity", data.name);
      });
  });
});

// Load last city on start
window.onload = () => {
  const lastCity = localStorage.getItem("lastCity");
  if (lastCity) fetchWeather(lastCity);
};
