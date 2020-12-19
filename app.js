'esversion:6';

const weather = new Weather('Osogbo', 'Lagos');

const ui = new UI();
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation()
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;

    weather.changeLocation(city);

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