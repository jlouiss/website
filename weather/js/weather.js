$(document).ready(function() {
    var url = 'http://api.openweathermap.org/data/2.5/weather?';

    var position = new Promise(function(resolve, reject) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(pos) {
                resolve({
                    lat: pos.coords.latitude,
                    lon: pos.coords.longitude
                });
            });
        } else {
            reject('Error in retrieving location.');
        }
    });

    position.then(function(resolve) {
        console.log(resolve);

        // 60 API calls max per minute
        url += 'lat=' + resolve.lat + '&lon=' + resolve.lon +
            '&appid=fcd5700ae93326b1119ec9afd2ca6559';

        $.getJSON(url, function(json) {
            var temp = json['main']['temp'];
            var location = json['name'];
            var currentWeather = json['weather'][0]['description'];
            var icon = 'http://jlouiss.github.io/weather/icons/' + json['weather'][0]['icon'] + '.svg';
            var windSpeed = json['wind']['speed'];
            var windDirection = json['wind']['deg'];
            var weatherId = json['weather'][0]['id'];

            $('#temperature').html(temp);
            $('#icon').attr('src', icon);
            $('#location').html(location);
            $('#weather').html(currentWeather);
            $('#wind').html(windSpeed + ' - ' + windDirection);
        });
    }).catch(function() {
        console.log('Try to reload the page and/or authorize retrieving your\
            location. :(');
    });
});