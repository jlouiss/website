$(document).ready(function () {
    var url = 'http://api.openweathermap.org/data/2.5/weather?';

    var position = new Promise(function (resolve, reject) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (pos) {
                $('#test').html('Latitude: ' + pos.coords.latitude + '<br>Longitude: ' + pos.coords.longitude);
                resolve({
                    lat: pos.coords.latitude,
                    lon: pos.coords.longitude
                });
            });
        } else {
            reject('Failure!');
        }
    });
    
    position.then(function () {
        /* do something with the result */
    }).catch(function () {
        /* error :( */
    })

    console.log(position);
});