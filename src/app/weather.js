export class Weather {
    constructor(city) {
        this.apiKey = 'c98867828276392260580f86d50974de';
        this.city = city;
    }

    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric&lang=es`;
        const response = await fetch(URI);
        return await response.json();
    }

    changeLocation(city) {
        this.city = city;
    }
}