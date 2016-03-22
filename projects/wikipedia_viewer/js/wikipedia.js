$(document).ready(function() {

    $.ajax({
        url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=Brazil',
        dataType: 'jsonp',
        headers: { 'Api-User-Agent': 'Example/1.0' },
        success: function(data) {
            console.log(data);
            var data = data.query.search;
            console.log(data);
            for (i in data) {
                $('.results').append('<h1 class="text-left">' + data[i].title +
                    '</h1><p class="text-right">' + data[i].snippet + '</p>');
            }
        }
    });
});
