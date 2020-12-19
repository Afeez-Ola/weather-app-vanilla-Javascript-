"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*jshint esversion: 6 */
var UI =
/*#__PURE__*/
function () {
  function UI() {
    _classCallCheck(this, UI);

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

  _createClass(UI, [{
    key: "paint",
    value: function paint(weather) {
      this.location.textContent = weather.location.name;
      this.desc.textContent = weather.current.weather_descriptions;
      this.string.textContent = Math.floor(weather.current.temperature) + '°C';
      this.icon.setAttribute('src', weather.current.weather_icons);
      this.humidity.textContent = "Relative Humidity: ".concat(weather.current.humidity);
      this.pressure.textContent = "Relative Pressure: ".concat(weather.current.pressure);
      this.wind.textContent = "Relative Wind: ".concat(weather.current.wind_speed);
      this.feelsLike.textContent = "Feels Like: ".concat(weather.current.feelslike);
    }
  }]);

  return UI;
}();