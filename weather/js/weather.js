$(document).ready(function() {
    // icons credit
    var authorCredit = function(id) {
        switch (id) {
            case '01d':
            case '01n':
            case '11d':
            case '11n':
                return {
                    'name': 'Vectors Market',
                    'link': 'http://flaticon.com/authors/vectors-market'
                };
            case '02d':
            case '02n':
            case '03d':
            case '03n':
            case '09d':
            case '09n':
            case '10d':
            case '10n':
            case '13d':
            case '13n':
            case '50d':
            case '50n':
                return {
                    'name': 'Freepik',
                    'link': 'http://www.freepik.com'
                };
            case '04d':
            case '04n':
                return {
                    'name': 'Popcic',
                    'link': 'http://www.flaticon.com/authors/popcic'
                };
            default:
                return null;
        };
    };

    var position = new Promise(function(resolve, reject) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(pos) {
                resolve({
                    lat: pos.coords.latitude,
                    lon: pos.coords.longitude
                });
            });
        } else {
            console.log('Try to reload the page and/or authorize retrieving your location. :(');
        }
    });

    console.log('YOUR POSITION: ' + position);

    position.then(function(resolve) {
        console.log(resolve);
        var url = 'http://api.openweathermap.org/data/2.5/weather?'

        // 60 API calls max per minute
        url += 'lat=' + resolve.lat + '&lon=' + resolve.lon +
            '&appid=fcd5700ae93326b1119ec9afd2ca6559';

        $.getJSON(url, function(json) {
            var fahrenheit = true,
                temp = json['main']['temp'],
                location = json['name'],
                currentWeather = json['weather'][0]['description'],
                weatherId = json['weather'][0]['id'],
                iconId = json['weather'][0]['icon'],
                author = authorCredit(iconId);

            var icon = (author) ? 'icons/' +
                iconId + '.svg' : 'http://openweathermap.org/img/w/' + iconId +
                '.png';

            console.log('iconId: ' + iconId + '\nauthor: ' + author);

            // T(°F) = T(K) × 9/5 - 459.67
            temp = Math.round((temp * 9 / 5 - 459.67) * 100) / 100;

            $('#temperature').html(temp);
            $('#change-scale').text('F');
            $('#icon').attr('src', icon);
            $('#location').html(location);
            $('#weather').html(currentWeather);
            if (author) {
                $('#author').text(author.name);
                $('#author').attr('href', author.link);
            } else {
                $('small').hide();
            }

            $('#change-scale').click(function() {
                var tmp = temp;
                if (fahrenheit) {
                    // T(°C) = (T(°F) - 32) × 5/9
                    tmp = Math.round(((temp - 32) * 5 / 9) * 100) / 100;
                    $('#change-scale').text('C');
                } else {
                    tmp = temp;
                    $('#change-scale').text('F');
                }
                $('#temperature').text(tmp);
                fahrenheit = !fahrenheit;
            });
        });
    }).catch(function() {
        console.log('Try to reload the page and/or authorize retrieving your\
            location. :(');
    });
});
