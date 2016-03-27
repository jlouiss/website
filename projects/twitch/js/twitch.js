// bootsrap tabs
$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

$(document).ready(function() {
  var streamers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx",
    "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff"];
  var requestURL = 'https://api.twitch.tv/kraken/streams/';

  for (var i in streamers) {
    var request = requestURL + streamers[i] + '?callback=?';
    retrieveData(request, streamers[i]);
  }

  function retrieveData(request, channel) {
    $.getJSON(request,
      function(data) {
        console.log(channel);
        console.log(data);
        console.log('\n\n\n');
      });
  }
});
