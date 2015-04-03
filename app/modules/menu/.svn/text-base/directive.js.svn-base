App.directive('menu', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "app/modules/menu/index.html";
    directive.controller = function($scope, $http, $state, apiGet) {
        $scope.urls = 'api/admin/menu';
        
        $scope.current = $state.$current.self.name;
        
        if ($state.$current != 'login') {
            apiGet.loadData($scope).then(function(dataOut){
                $scope.menu = dataOut;
            });
        }
        
        $scope.$watch('menu', function(newVal, oldVal) {

            if ($state.$current != 'login') {
                if (!$scope.menu || !$scope.menu.menu) {
                    apiGet.loadData($scope).then(function(dataOut){
                        $scope.menu = dataOut;
                    });

                }
            }
            
        });
    }

    return directive;
});