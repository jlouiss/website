// some streamers + some from socialblade.com's top 100 twitch streamers (most viewed)
var streamers = [
    'freecodecamp', 'storbeck', 'terakilobyte', 'beohoff', 'RobotCaleb',
    'thomasballinger', 'noobs2ninjas', 'habathcx', 'riotgames', 'starladder1',
    'beyondthesummit', 'tsm_theoddone', 'Tsm_dyrus', 'esl_csgo', 'garenatw',
    'HiRezTV', 'smitegame', 'Nightblue3', 'nl_kripp', 'imaqtpie', 'esl_lol',
    'asiagodtonegg3be0', 'destructoid', 'sodapoppin', 'OGNGlobal', 'ongamenet',
    'joindotared', 'faceittv', 'taketv', 'versuta', 'PhantomL0rd', 'Voyboy',
    'wingsofdeath', 'towelliee', 'TrumpSC', 'leveluplive', 'twitch', 'itshafu',
    'dotastarladder_en', 'riotgamesturkish', 'twitchplayspokemon', 'kingkongor',
    'aces_tv', 'gamespot', 'sc2proleague', 'SirhcEz', 'totalbiscuit', 'mlgsc2',
    'scarra', 'RocketBeansTV', 'lethalfrag', 'dendi', 'wcs_america', 'mlglol',
    'defrancogames', 'shadbasemurdertv', 'yogscast', 'Imt_wildturtle', 'magic',
    'streamerhouse', 'dhingameclient', 'wcs_europe', 'sing_sing', 'roomonfire',
    'onemoregametv', 'dreamleague', 'syndicate', 'saintvicious',
    'brunofin', 'comster404'
];

var app = angular.module('app', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
    var requestURL = 'https://api.twitch.tv/kraken/streams/',
        search = '';

    $scope.streamers = [];

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

    for (var i in streamers) {
        var request = requestURL + streamers[i];
        console.log(request);
        fetch(request, streamers[i]);

        console.log('i:' + i);
        console.log($scope.streamers);
        console.log('\n\n');
    };
}]);

app.controller('TabController', ['$scope', function($scope) {
    $scope.tab = 'online';

    $scope.setTab = function(tab) {
        $scope.tab = tab;
    };

    $scope.isSet = function(tab) {
        return $scope.tab == tab;
    };
}]);
