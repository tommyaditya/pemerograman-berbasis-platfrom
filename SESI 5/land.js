let { weather } = require('./checkCondition');

const weatherData = {
    temperature: 26,
    humidity: 90,
    windspeed: 10
};

let result = checkCondition(weatherData);
console.log(result);
