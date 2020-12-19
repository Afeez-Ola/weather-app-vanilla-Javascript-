"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*jshint esversion: 6 */
var Storage =
/*#__PURE__*/
function () {
  function Storage() {
    _classCallCheck(this, Storage);

    this.city;
    this.defaultCity = 'Ikire';
  }

  _createClass(Storage, [{
    key: "getLocationData",
    value: function getLocationData() {
      if (localStorage.getItem('city') === null) {
        this.city = this.defaultCity;
      } else {
        this.city = localStorage.getItem('city');
      }

      return {
        city: this.city
      };
    }
  }, {
    key: "setLocationData",
    value: function setLocationData(city) {
      localStorage.setItem('city', city);
    }
  }]);

  return Storage;
}();