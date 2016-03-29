// bootsrap tabs
$('#myTabs a').click(function(e) {
    e.preventDefault()
    $(this).tab('show')
});

$(document).ready(function() {
    function retrieveData(request, channel) {
        $.getJSON(request, function(data) {
            console.log(channel);
            console.log(data);
            console.log('\n\n\n');

            if (data.stream)
                $('#online').append('<h1>' + channel + '</h1>');
            else
                $('#offline').append('<h1>' + channel + '</h1>');

            $('#all').append('<h1>' + channel + '</h1>');
        });
    }

    var streamers = [
    "freecodecamp",
    "storbeck",
    "terakilobyte",
    "habathcx",
    "RobotCaleb",
    "thomasballinger",
    "noobs2ninjas",
    "beohoff",
    // should be online
    "Skipnh0",
    "hastad",
    "RageFu",
    "NWGamesBrasil"];
    var requestURL = 'https://api.twitch.tv/kraken/streams/';

    for (var i in streamers) {
        var request = requestURL + streamers[i] + '?callback=?';
        retrieveData(request, streamers[i]);
    }
});
