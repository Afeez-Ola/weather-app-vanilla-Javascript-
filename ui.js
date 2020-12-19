/*jshint esversion: 6 */

class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.location.name;
        this.desc.textContent = weather.current.weather_descriptions;
        this.string.textContent = Math.floor(weather.current.temperature) + '°C';
        this.icon.setAttribute('src', weather.current.weather_icons);
        // this.icon.textContent = weather.weather.icon;
        this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}`;
        this.pressure.textContent = `Relative Pressure: ${weather.current.pressure}`;
        this.wind.textContent = `Relative Wind: ${weather.current.wind_speed}`;
        this.feelsLike.textContent = `Feels Like: ${weather.current.feelslike}`;
        // this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}`;
    }
}