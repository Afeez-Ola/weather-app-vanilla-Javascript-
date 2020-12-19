"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*jshint esversion: 6 */
var Weather =
/*#__PURE__*/
function () {
  function Weather(city, state) {
    _classCallCheck(this, Weather);

    this.apiKey = '1fb1165b469e18f05af773e3e1adb3ff';
    this.state = state;
    this.city = city;
  }

  _createClass(Weather, [{
    key: "getWeather",
    value: function getWeather() {
      var response, responseData;
      return regeneratorRuntime.async(function getWeather$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(fetch("http://api.weatherstack.com/current?access_key=".concat(this.apiKey, "&query=").concat(this.city)));

            case 2:
              response = _context.sent;
              _context.next = 5;
              return regeneratorRuntime.awrap(response.json());

            case 5:
              responseData = _context.sent;
              return _context.abrupt("return", responseData);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "changeLocation",
    value: function changeLocation(city, state) {
      this.city = city; // this.state = state;
    }
  }]);

  return Weather;
}();