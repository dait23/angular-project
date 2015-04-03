'use strict';

App.controller('indexCtrl', ['$scope', '$rootScope', 'api', 'apiGet', '$state', function($scope, $rootScope, api, apiGet, $state) {
    
    $scope.urls = 'api/admin/auth';

    apiGet.loadData($scope).then(function(dataOut){
        $scope.session = dataOut;
        if (dataOut.session) {
            if ($state.$current.self.name == 'login' || $state.$current.self.name == 'index') {
                $state.go('dashboard');
            }
        }

        else if ($scope.session.status.error != 0) {
            $state.go('login');
        } 
    });
    
	$scope.htmlReady();
}]);