App.directive('gridreceive', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "app/modules/gridform/receive_by_warehouse.html";
    directive.controller = function($scope, $http, $state, apiGet, $interval, $timeout, $rootScope, $document) {
    
        $scope.filters = function() {
            
            var ref = '';
            if ($scope.form.filter.purhRefNo) {
                ref = '&purhRefNo=' + $scope.form.filter.purhRefNo;
            }
            $scope.urls = 'api/' + $scope.url + '/header?page=1&rihdStatus=' + $scope.form.filter.rihdStatus + ref;

            apiGet.loadData($scope).then(function(dataOut) {
                $scope.gridData = dataOut;
            });
        };
    };
    return directive;
});