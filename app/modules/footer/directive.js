App.directive('footer', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "app/modules/footer/index.html";
    directive.controller = function($scope, $http, $state, $stateParams, apiGet, $window) {
        
        $scope.lang = function(id) {
            $scope.urls = 'api/admin/lang/' + id;
        
            apiGet.loadData($scope).then(function(dataOut){
                $window.location.reload();
//                $state.transitionTo($state.current, $stateParams, {
//                    reload: true,
//                    inherit: false,
//                    notify: true
//                });
            });
            
        }
    }

    return directive;
});