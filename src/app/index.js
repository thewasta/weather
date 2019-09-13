const {Weather} = require('./weather');
const {Ui} = require('./ui');
const {Store} = require('./store');
const ui = new Ui();
const store = new Store();
const {city} = store.getLocationData();
const weather = new Weather(city);

require('./index.css');

async function fetchWeather() {
    const data = await weather.getWeather();
    ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    store.setLocationData(city);
    weather.changeLocation(city);
    fetchWeather();
});
document.addEventListener('DOMContentLoaded', fetchWeather);