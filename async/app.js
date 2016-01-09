var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
			.options('location',{
			location: {
				demand: true,
				alias: 'l',
				description: 'Allows user to input location',
				type: 'string'
			},
		})
	.help('help')
	.argv;

if(typeof argv.l === 'string' && argv.l.length > 0) {
	weather(argv.l).then(function(currentWeather) {
        console.log(currentWeather);
    }).catch(function(error) {
        console.log('Error: ' + error);
    });
} else {
    console.log('Location was not provided..attempting to guess via IP');
    location().then(function(loc) {
        return weather(loc.city);
    }).then(function (currentWeather) {
        console.log(currentWeather);
    }).catch(function (error) {
        console.log(error);
    });
}