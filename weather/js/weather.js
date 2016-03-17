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
            var icon = 'http://openweathermap.org/img/w/' + json['weather'][0]['icon'] + '.png';
            var windSpeed = json['wind']['speed'];
            var windDirection = json['wind']['deg'];
            var weatherId = json['weather'][0]['id'];

            $('#temperature').html(temp);
            $('#icon').html('<img src="' + icon + '"></img>')
            $('#location').html(location);
            $('#weather').html(currentWeather);
            $('#wind').html(windSpeed + ' - ' + windDirection);
        });
    }).catch(function() {
        console.log('Try to reload the page and/or authorize retrieving your\
            location. :(');
    });
});

/*
if (navigator.geolocation) {
    var latitude;
    var longitude;
    navigator.geolocation.getCurrentPosition(function(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=aacd3d4cc5a1e8c3a2829fae92681ba2';
        $.getJSON(url, function(json) {
            var temp = ktoF(json['main']['temp']);
            var city = json['name'];
            var currentWeather = json['weather'][0]['description'];
            var icon = 'http://openweathermap.org/img/w/' + json['weather'][0]['icon'] + '.png';
            var windSpeed = msToMPH(json['wind']['speed']);
            var windDirection = degToDir(json['wind']['deg']);
            var weatherCode = json['weather'][0]['id'];
            setBackground(weatherCode);
            $('.temp').html('<span class='data'><img class='icon' src=' + icon + '></img>' + temp + '</span>');
            $('.city').html('<b>' + city + '</b>');
            $('.weather').html('<b>' + currentWeather + '</b>');
            $('.wind').html('<b>' + windSpeed + ' ' + windDirection + '</b>');
        });
    });
}
*/
