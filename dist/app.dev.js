"use strict";
'esversion:6';

var weather = new Weather('Osogbo', 'Lagos');
var ui = new UI();
document.addEventListener('DOMContentLoaded', getWeather); // weather.changeLocation()

document.getElementById('w-change-btn').addEventListener('click', function (e) {
  var city = document.getElementById('city').value;
  weather.changeLocation(city);
  getWeather();
  document.getElementById('locModal').style.display = 'hide';
});

function getWeather() {
  weather.getWeather().then(function (results) {
    ui.paint(results);
  })["catch"](function (err) {
    return console.log(err);
  });
}