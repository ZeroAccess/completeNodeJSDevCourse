var request = require('request');

module.exports = function (location) {
    return new Promise(function (resolve, reject) {
        var encodedLocation = encodeURIComponent(location);
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&appid=87a7692ad27bc7aadbd5290b17202084&units=imperial';

        if (!location) {
            reject('No located provided');
        }

        request({url: url, json: true}, function (error, response, body) {
            if(error) {
                reject('Unable to fetch weather');
            } else {
                var sunrise = new Date(body.sys.sunrise * 1000);
                var sunset = new Date(body.sys.sunset * 1000);
                var convertedSunset = sunset.getHours();
                if (convertedSunset > 12) {
                    convertedSunset -= 12;
                }
                resolve('The temperature is ' + body.main.temp + 'F in ' + body.name + '\n' +
                    'The sun will rise at ' + sunrise.getHours() + ':' + sunrise.getMinutes() + 'am' + '\n' +
                    'The sun will set at ' + convertedSunset + ':' + sunset.getMinutes() + 'pm');
            }
        });
    });
}