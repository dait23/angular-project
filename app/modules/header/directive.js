App.directive('header', function() {

    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "app/modules/header/index.html";
    directive.controller = function($scope, $http, $state, apiGet, $interval, $timeout, $rootScope, $document) {
        
        var tick = function() {
            $scope.currentdate = Date.now();
        }
        
        $interval(tick, 1000);
            
        $scope.hidden = true;
    }

    return directive; 
});