var app = angular.module('app', []);

app.controller('TestController', [
    '$scope',
    function($scope) {
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
            "NWGamesBrasil"
        ];
    }
]);

app.controller('TabController', ['$scope'], function($scope) {
    $scope.tab = 'online';

    $scope.setTab = function(tab) {
        $scope.tab = tab;
    };

    $scope.isSet = function(tab) {
        return $scope.tab == tab;
    };
});