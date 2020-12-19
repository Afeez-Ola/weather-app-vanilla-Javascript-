"use strict";

/*jshint esversion: 6 */
var storage = new Storage();
var weatherLocation = storage.getLocationData();
var weather = new Weather('Osogbo');
var ui = new UI();
document.addEventListener('DOMContentLoaded', getWeather);
document.getElementById('w-change-btn').addEventListener('click', function (e) {
  var city = document.getElementById('city').value;
  weather.changeLocation(city);
  storage.setLocationData(city);
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