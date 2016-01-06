var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=87a7692ad27bc7aadbd5290b17202084&units=imperial';

request({
	url: url,
	json: true
}, function(error, response, body){
	if(error) {
		console.log('Unable to fetch weather.');
	} else {
		var sunrise = new Date(body.sys.sunrise * 1000);
		var sunset = new Date(body.sys.sunset * 1000);
		
		var convertedSunset = sunset.getHours();
		if(convertedSunset > 12) {
			convertedSunset -= 12;
		}
		
		console.log('The temperature is ' + body.main.temp + 'F in ' + body.name);
		console.log('The sun will rise at ' + sunrise.getHours() + ':' + sunrise.getMinutes() + 'am');
		console.log('The sun will set at ' + convertedSunset + ':' + sunset.getMinutes() + 'pm');
	}
});