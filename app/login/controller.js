'use strict';

App.controller('loginCtrl', ['$scope', '$rootScope', 'api', 'apiGet', '$state', '$timeout', function($scope, $rootScope, api, apiGet, $state, $timeout) {
    
    $scope.login = true;
    
    $scope.submit = function() {
        $scope.urls = 'api/admin/login';
        $scope.params = {};
        $scope.params.username = $scope.username;
        $scope.params.password = $scope.password;
        
        if ($scope.captcha) {
            $scope.params.captcha = $scope.captcha;
        }
        
        if ($scope.params.username) {
            api.loadData($scope).then(function(dataOut) {
                $scope.session = dataOut;
                $scope.loginsession = $scope.session.status.error;

                if ($scope.loginsession != 0) {
                    $scope.errorLogin = $scope.session.status.message;
                    delete $scope.password;
                    delete $scope.params.password;
                    delete $scope.username;
                    delete $scope.params.username;
                    delete $scope.captcha;
                    delete $scope.params.captcha;
                    
                    if ($scope.session.status.errorCode == 401) {
                        $scope.urls = 'getCaptcha';
                        apiGet.loadData($scope).then(function(dataOut) {
                            $scope.captchaUrl = dataOut.data.url;
                            $scope.setCaptcha = dataOut.data.active;
                        });
                    }
                    //$state.go('login');
                } else {
                    
                    if ($scope.session.data.userFirstLogin != "0") {
                        $scope.login = false;
                        $scope.changepass = true;
                        $scope.company = false;
                        
                    } else if ($scope.session.data.companyList) {
                        $scope.login = false;
                        $scope.changepass = false;
                        $scope.company = true;
    
                        $scope.urls = 'api/admin/config/companyLogin';
                        
                        apiGet.loadData($scope).then(function(compOut){
                            $scope.data = compOut.data;
        
                            for (var i=0; i< $scope.data.length; i++) {
                                $scope.data[i].typeahead = '`';
                            }

                            $scope.formatLabel = function(model) {
                                for (var i=0; i< $scope.data.length; i++) {
                                    if (model === $scope.data[i].compId) {
                                        return $scope.data[i].compName;
                                    }
                                }
                            };
                        });
                        
                    } else {
                        $state.go('dashboard');
                    }
                }
            });
        }
    }

    $scope.captchaRefresh = function(){
        $scope.urls = 'getCaptcha';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.captchaUrl = dataOut.data.url;
            $scope.setCaptcha = dataOut.data.active;
        });
    };
    
    $scope.submitPassword = function() {
        $scope.urls = 'api/admin/login/changePassword';
        $scope.params = {};
        $scope.params.newPassword = $scope.newPassword;
        $scope.params.newPassword_confirmation = $scope.newPassword_confirmation;
        if ($scope.params.newPassword && $scope.params.newPassword_confirmation) {
            api.loadData($scope).then(function(dataOut) {
                $scope.session = dataOut;
                $scope.loginsession = $scope.session.status.error;

                if ($scope.loginsession != 0) {
                    $scope.errorPassword = $scope.session.status.message;
                    //$state.go('login');
                } else {
                    if ($scope.session.data.companyList) {
                        $scope.login = false;
                        $scope.changepass = false;
                        $scope.company = true;
    
                        $scope.urls = 'api/admin/config/companyLogin';
                        
                        apiGet.loadData($scope).then(function(compOut){
                            $scope.data = compOut.data;
        
                            for (var i=0; i< $scope.data.length; i++) {
                                $scope.data[i].typeahead = '`';
                            }

                            $scope.formatLabel = function(model) {
                                for (var i=0; i< $scope.data.length; i++) {
                                    if (model === $scope.data[i].compId) {
                                        return $scope.data[i].compName;
                                    }
                                }
                            };
                        });
                        
                    } else {
                        $state.go('dashboard');
                    }
                }
            });
        }
    }
    
    $scope.submitCompany = function() {
        $scope.urls = 'api/admin/config/companyLogin';
        $scope.params = {};
        $scope.params.compId = $scope.compId;
        if ($scope.params.compId) {
            api.loadData($scope).then(function(dataOut) {
                $scope.session = dataOut;
                $scope.loginsession = $scope.session.status.error;

                if ($scope.loginsession != 0) {
                    $scope.errorCompany = $scope.session.status.message;
                    //$state.go('login');
                } else {
                    $state.go('dashboard');
                }
            });
        }
    }
    
    $scope.urls = 'api/admin/auth';

    apiGet.loadData($scope).then(function(dataOut){
        $scope.session = dataOut;
        if (dataOut.session) {
            if ($state.$current.self.name == 'login') {
                $state.go('dashboard');
            }
        }

        else if ($scope.session.status.error != 0) {
            $state.go('login');
        } 
    });
    
    $scope.onFocus = function (e) {

        $timeout(function () {
          angular.element(e.target).triggerHandler('input');
        });
    };
    
    $scope.onBlur = function () {
        
        if($scope.companyform.$error.editable){
            var typeaheadErrors = [].concat($scope.companyform.$error.editable);
            angular.forEach(typeaheadErrors, function(model, control, key){
                if (angular.isUndefined(model.$modelValue) || model.$modelValue == '')
                {
                    if (model.$viewValue == '`') { 
                        model.$viewValue = undefined;
                        model.$modelValue = undefined;
                        model.$setValidity('editable', true);
                    }
                }    
            });
        }
    };
    
	$scope.htmlReady();
}]);

App.controller('logoutCtrl', ['$window', function($window) {

    $window.location.href = '/api/admin/logout';
    
}]);