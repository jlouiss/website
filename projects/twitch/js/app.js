(function() {
  'use strict';

  angular.module('twitchApp', [])
    .controller('MainController', MainController)
    .controller('TabController', TabController);


  MainController.$inject = ['$scope', '$http'];

  function MainController($scope, $http) {
    $scope.streamers = [];

    var channels = ['freecodecamp', 'storbeck', 'terakilobyte', 'beohoff', 'RobotCaleb', 'thomasballinger', 'noobs2ninjas', 'habathcx', 'riotgames', 'starladder1', 'beyondthesummit', 'tsm_theoddone', 'smitegame', 'Nightblue3', 'nl_kripp', 'esl_lol', 'OGNGlobal', 'faceittv', 'PhantomL0rd', 'totalbiscuit', 'RocketBeansTV', 'sing_sing', 'comster404', 'ESL_SC2', 'OgamingSC2', 'cretetion'];
    var baseURL = 'https://wind-bow.gomix.me/twitch-api/streams/';

    channels.forEach(function(channel) {
      var requestURL = baseURL + channel;
      fetchData(requestURL, channel);
    });

    function buildStreamerData(name, data) {
      return {
        name: name,
        online: data.stream != null,
        data: data.stream,
        exists: true
      };
    }

    function fetchData(requestURL, channel) {
      $http.get(requestURL)
        .then(function(response) {
          var streamerData = buildStreamerData(channel, response.data);
          // console.log(channel, streamerData);
          // console.log(response.data.stream);
          if (channel == 'freecodecamp') {
            $scope.streamers.unshift(streamerData);
            return;
          }
          $scope.streamers.push(streamerData);
        }, function(error) {
          $scope.streamers.unshift({
            'name': channel,
            'exists': false
          });

          console.log('Can\'t fetch the channel ' + channel);
          console.log(error);
        });
    }

  }

  TabController.$inject = ['$scope'];

  function TabController($scope) {
    $scope.tab = 'online';
    $scope.setTab = function(tab) { $scope.tab = tab };
    $scope.isSet = function(tab) { return $scope.tab == tab };
  }

})();
