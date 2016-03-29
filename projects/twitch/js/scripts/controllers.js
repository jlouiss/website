'use strict';

angular.module('twitchViewer')

.controller('mainController', ['$scope', '$http', function($scope, $http) {
    var requestURL = 'https://api.twitch.tv/kraken/streams/',
        search = '';

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
        "brmatv",
        "Player2Player",
        "RageFu",
        "NWGamesBrasil"
    ];

    $scope.streamers = [];
    $scope.online = [];
    $scope.offline = [];


    function fetch(request, channel) {
        console.log(channel);

        $http.get(request)
            .then(function(response) {
                $scope.streamers.push(response.data);

                if (response.data.stream)
                    $scope.online.push(channel);
                else
                    $scope.offline.push(channel);

                console.log(response.data);
                console.log('\n\nStreamers:\n');
                console.log($scope.streamers);
            }, function() {
                console.log('Can\'t fetch streamer ' + channel);
            });
    }

    $scope.$watch(
        'search',
        function(search) {
            fetch(requestURL + search, search);
        }
    );

    for (var i in streamers) {
        var request = requestURL + streamers[i];
        console.log(request);
        fetch(request, streamers[i]);

        console.log('i:' + i);
        console.log($scope.streamers);
        console.log('\n\n');
    }
}]);
