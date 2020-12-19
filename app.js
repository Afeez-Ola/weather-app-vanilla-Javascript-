/*jshint esversion: 6 */
const storage = new Storage();

const weatherLocation = storage.getLocationData();
const weather = new Weather('Osogbo');

const ui = new UI();
document.addEventListener('DOMContentLoaded', getWeather);


document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;

    weather.changeLocation(city);
    storage.setLocationData(city);

    getWeather();

    document.getElementById('locModal').style.display = 'hide';
})

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}