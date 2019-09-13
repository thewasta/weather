export class Ui {
    constructor() {
        this.location = document.getElementById('weather-location');
        this.desc = document.getElementById('weather-description');
        this.string = document.getElementById('weather-string');
        this.humidity = document.getElementById('weather-humidity');
        this.wind = document.getElementById('weather-wind');
        this.icon = document.getElementById('w-icon');
    }

    render(weather) {
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.location.textContent = weather.name + '/' + weather.sys.country;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${weather.main.temp} ºC`;
        this.humidity.textContent = `Humedad: ${weather.main.humidity}%`;
        this.wind.textContent = `Viento: ${weather.wind.speed} m/s`;
    }
}