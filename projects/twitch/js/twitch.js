// some random streamers
var streamers = [
  'freecodecamp', 'storbeck', 'terakilobyte', 'beohoff', 'RobotCaleb', 'thomasballinger', 'noobs2ninjas', 'habathcx', 'riotgames', 'starladder1', 'beyondthesummit', 'tsm_theoddone', 'smitegame', 'Nightblue3', 'nl_kripp', 'esl_lol', 'OGNGlobal', 'faceittv', 'PhantomL0rd', 'totalbiscuit', 'RocketBeansTV', 'sing_sing', 'comster404', 'ESL_SC2', 'OgamingSC2', 'cretetion'
];

angular.module('app', [])

.controller('MainController', ['$scope', '$http', function($scope, $http) {
  var requestURL = 'https://wind-bow.gomix.me/twitch-api/streams/';
  var search = '';

  $scope.streamers = [];

  for (var i in streamers) {
    var request = requestURL + streamers[i];
    console.log(request);
    fetch(request, streamers[i]);
  };

  function makeChannel(name, data) {
    return {
      'name': name,
      'online': data.stream != null,
      'data': data.stream,
      'exists': true
    };
  };

  function fetch(request, channel) {
    $http.get(request)
      .then(function(response) {
        if (channel == 'freecodecamp')
          $scope.streamers.unshift(makeChannel(channel, response.data));
        else
          $scope.streamers.push(makeChannel(channel, response.data));

        console.log(channel);
        console.log(makeChannel(channel, response.data));
        console.log(response.data.stream);

        console.log('\n\nStreamers:\n');
        console.log($scope.streamers);
      }, function() {
        console.log('Can\'t fetch streamer ' + channel);
        $scope.streamers.unshift({
          'name': channel,
          'exists': false
        });
      });
  };
}])

.controller('TabController', ['$scope', function($scope) {
  $scope.tab = 'online';

  $scope.setTab = function(tab) {
    $scope.tab = tab;
  };

  $scope.isSet = function(tab) {
    return $scope.tab == tab;
  };
}]);
