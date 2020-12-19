/*jshint esversion: 6 */
class Weather {
    constructor(city) {
        this.apiKey = '1fb1165b469e18f05af773e3e1adb3ff';
        this.city = city;
    }


    async getWeather() {

        const response = await fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}`)

        const responseData = await (response.json());

        return responseData;

    }

    changeLocation(city) {
        this.city = city;
    }
}