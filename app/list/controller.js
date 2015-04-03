'use strict';

App.controller('bodyCtrl', function ($scope, $http, $state, apiGet, $interval, $timeout, $rootScope, isMenu, menuContent) {
    var idl, intr, tmt;
    
    $scope.idle = function () {
        
        if (idl) {
            $timeout.cancel(idl);
        }
        
        if ($scope.ssn === true) {
            idl = false;
        } else {
            idl = $timeout(function () {
                $scope.ssn = true;
                $scope.loading();
            }, 900000);
        }
    };
    
    $scope.idle();

    $scope.loading = function () {

        $timeout.cancel(intr);
        $timeout.cancel(tmt);

        $scope.urls = 'api/admin/auth';

        apiGet.loadData($scope).then(function (dataOut) {
            $scope.session = dataOut;
            if (dataOut.session) {
                $scope.timeout = dataOut.session.timeout;

                intr = $timeout(function () {
                    $state.go('logout');
                }, $scope.timeout);
            } else if ($scope.session.status.error !== 0) {
                $state.go('login');
            }
        });
    };

    $scope.resettime = function () {
        $timeout.cancel(intr);
        $timeout.cancel(tmt);
        delete $scope.ssn;
    };

    $scope.isLoading = function () {
        return $http.pendingRequests.length > 0;
    };

    $scope.$watch($scope.isLoading, function (v) {
        if (v) {
            $scope.loader = true;
        } else {
            $scope.loader = false;
        }
    });

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        if ($scope.menu && $scope.menu.menu) {
            isMenu.set($scope.collapsed);
            menuContent.set($scope.menu);
        } else {
            $scope.urls = 'api/admin/menu';
            
            apiGet.loadData($scope).then(function(dataOut){
                $scope.menu = dataOut;
            });
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

        $timeout.cancel(intr);
        $timeout.cancel(tmt);
    });
});

App.controller('password', ['$scope', '$q', '$http', 'transformRequestAsFormPost', '$location', 'dataGrid', 'api', 'apiGet', '$state', '$stateParams', '$rootScope', '$interval', '$timeout', '$parse', '$modalInstance', function ($scope, $q, $http, transformRequestAsFormPost, $location, dataGrid, api, apiGet, $state, $stateParams, $rootScope, $interval, $timeout, $parse, $modalInstance) {
    $scope.urls = 'lang/admin/config/changePassword/form';

    apiGet.loadData($scope).then(function (dataOut) {
        $scope.formLabel = dataOut;
    });
    
    $scope.submit = function () {
        
        $scope.urls = 'api/admin/config/changePassword';
        $scope.params = $scope.form.data;
        api.loadData($scope).then(function (dataOut) {
            if (dataOut.status.error !== 0) {
                $scope.errorPassword = dataOut.status.message;
            } else {
                $modalInstance.close();
            }
        });
    };

    $scope.cancel = function() {
        $modalInstance.close();
    }
}]);

App.controller('setting', ['$scope', '$q', '$http', 'transformRequestAsFormPost', '$location', 'dataGrid', 'dataTransactionGrid', '$state', '$stateParams', 'apiGet', '$rootScope', '$interval', '$timeout', '$parse', function($scope, $q, $http, transformRequestAsFormPost, $location, dataGrid, dataTransactionGrid, $state, $stateParams, apiGet, $rootScope, $interval, $timeout, $parse) {
    $scope.url = 'admin/config/setting/';

    dataGrid.doGrid($scope);
    
    $scope.submit = function(id) {
        delete $scope.params.limit;
        dataGrid.saveData($scope, id);
    }
}]);

App.controller('listCtrl', ['$scope', '$q', '$http', 'transformRequestAsFormPost', '$location', 'isMenu', 'menuContent', 'dataGrid', 'dataTransactionGrid', '$state', '$stateParams', 'apiGet', '$rootScope', '$interval', '$timeout', '$parse', function($scope, $q, $http, transformRequestAsFormPost, $location, isMenu, menuContent, dataGrid, dataTransactionGrid, $state, $stateParams, apiGet, $rootScope, $interval, $timeout, $parse) {
    var logs = [];
    
    $scope.dateRegEx = /^(\d{2}\/\d{2}\/\d{4})*$/;
    
    $scope.collapsed = isMenu.get();
    $scope.menu = menuContent.get();
    
    $scope.refresh = function() {
        $state.transitionTo($state.current, $stateParams, {
            reload: true,
            inherit: false,
            notify: true
        });
    }
    
    $scope.gotoForm = function(newId) {
        $state.go($state.$current.name + '_form', {id: newId});
    };
    
    $scope.tempType = '1';
    $scope.temp = $location.path().replace('/', '');

    $scope.urls = 'api/admin/menu/' + $scope.temp;
    apiGet.loadData($scope).then(function(dataOut) {
        delete $scope.urls;
        
        var a = $scope.temp;
        if (a.indexOf('master') != -1) {
            $scope.url = 'admin/master/' + dataOut.data.menuAPI;
            dataGrid.doGrid($scope);
            
//            $scope.$watch('gridData', function(newVal, oldVal) {
//                if(newVal) {
//                    switch ($location.path()) {
//                        case '/master_chart_of_accounts': 
//                            $scope.noDel = {};
//                            angular.forEach(newVal.data, function(value1, key1) {
//                                angular.forEach(value1, function(value, key) {
//                                    if (key == 'mcoaFlagHeader' && value == 1) {
//                                        //$scope.noDel[key1] = '1';
//                                        newVal.data[key1].noDel = '1';
//                                    }
//                                });
//                            });
//                                        console.log($scope);
//                            break;       
//                    }
//                }
//            });
        } else  {
            
            switch ($location.path()) {
                case '/purchase_list':
                case '/purchase_approval':
                case '/invoice':
                case '/return':
                case '/return_purchase_order':
                case '/return_sales_order':
                case '/invoice_return':
                case '/sales_order_list':
                case '/sales_order_approval':
                case '/journal':
                case '/account_receivable':
                case '/account_payable':
                case '/billing':
                case '/selling':
                    
                case '/receive':
                case '/receive_by_warehouse':
                case '/storing':
                case '/transfer':
                case '/packing':
                case '/picking':
                    
                case '/selling_order':
                case '/damage_item':
                    $scope.url = 'admin/' + dataOut.data.menuAPI;
        
                    dataTransactionGrid.doGrid($scope);
    
                    break;
                default:
                    $scope.url = 'admin/' + dataOut.data.menuAPI;
        
                    dataGrid.doGrid($scope);
    
                    
            }
        }
    });
    
    // TEMPLATE
    switch ($location.path()) {

    // #####################
    //  MASTER
    // #####################
        case '/master_company':
        case '/master_menu':
        case '/master_role':
        case '/master_user':
        case '/master_supplier':
        case '/master_customer':
        case '/master_item':
        case '/master_item_others':
            $scope.tempType = '2';
            break;
    
    // #####################
    //  TRANSACTION
    // #####################
        case '/purchase_list':
        case '/purchase_approval':
        case '/invoice':
        case '/return':
        case '/return_purchase_order':
        case '/return_sales_order':
        case '/invoice_return':
        case '/sales_order_list':
        case '/sales_order_approval':
        case '/journal':
        case '/account_receivable':
        case '/account_payable':
        case '/billing':
        case '/selling':
            $scope.tempType = '2';
            break;
            
    // #####################
    //  WAREHOUSE
    // #####################
        case '/receive':
        case '/storing':
        case '/transfer':
        case '/packing':
        case '/picking':

        case '/selling_order':
        case '/damage_item':
            $scope.tempType = '2';
            break;
    }
    
    // Restrict add new
    switch ($location.path()) {
    
    // #####################
    //  TRANSACTION
    // #####################
        case '/purchase_approval':
        case '/invoice':
        case '/invoice_return':
        case '/sales_order_approval':
        case '/billing':
        case '/account_receivable':
        case '/account_payable':
            
    // #####################
    //  WAREHOUSE
    // #####################
        case '/receive':
        case '/storing':

            $scope.noNew = true;
            break;
    }
    
    $scope.stateComparator = function (state, viewValue) {
        return viewValue === secretEmptyKey || (''+state).toLowerCase().indexOf((''+viewValue).toLowerCase()) > -1;
    };
    
    $scope.submit = function(id) {
        delete $scope.params.limit;
        
        switch ($location.path()) {
                    
            case '/purchase_list':
            case '/purchase_approval':
            case '/invoice':
            case '/return':
            case '/return_purchase_order':
            case '/return_sales_order':
            case '/invoice_return':
            case '/sales_order_list':
            case '/sales_order_approval':
            case '/journal':
            case '/account_receivable':
            case '/account_payable':
            case '/billing':
            case '/selling':
                
            case '/receive':
            case '/receive_by_warehouse':
            case '/storing':
            case '/transfer':
            case '/packing':
            case '/picking':

            case '/selling_order':
            case '/damage_item':
                dataTransactionGrid.saveData($scope, id);
                break;
            default:
                dataGrid.saveData($scope, id);
                
        }

        $timeout(function() {
            $scope.refresh();
        }, 100);
    }
    
    $scope.clickGrid = function() {

        switch ($location.path()) {
                    
            case '/purchase_list':
            case '/purchase_approval':
            case '/invoice':
            case '/return':
            case '/return_purchase_order':
            case '/return_sales_order':
            case '/return':
            case '/invoice_return':
            case '/sales_order_list':
            case '/sales_order_approval':
            case '/journal':
            case '/account_receivable':
            case '/account_payable':
            case '/billing':
            case '/selling':
                
            case '/receive':
            case '/receive_by_warehouse':
            case '/storing':
            case '/transfer':
            case '/packing':
            case '/picking':

            case '/selling_order':
            case '/damage_item':
                dataTransactionGrid.getDataHeader($scope).then(function(dataOut) {
                    $scope.gridData = dataOut;
                    $scope.$broadcast('gridDataLoaded');
                    
                    delete $scope.form.detail;
                });
                break;
            default:
                delete $scope.form.detail;
                break;
                
        }
    }
    
    $scope.clickReset = function() {
        var detail = $scope.form.detail;
        $scope.form.data = {}; 
        $scope.form.detail = {};
        $scope.form.gridEditor.$setPristine();
        
        switch ($location.path()) {
            
                // SETUP
            case '/master_company':
                $scope.form.data.compNonActiveFlag = '1';
                break;
            case '/master_menu':
                $scope.form.data.menuNonActive = '1';
                $scope.form.data.menuModal = '1';
                break;
            case '/master_role':
                $scope.form.data.roleNonActive = '1';
                $scope.form.detail = detail;
                break;
            case '/master_user':
                $scope.form.data.userNonActive = '1';
                $scope.form.data.userFirstLogin = '0'; 
                $scope.form.data.userLanguage = '1'; 
                break;
                
                // MASTER
            case '/master_supplier':
                $scope.form.data.msupNonActiveFlag = '1';
                break;
            case '/master_size':
                $scope.form.data.msizNonActiveFlag = '1';
                break;
            case '/master_city':
                $scope.form.data.msctNonActiveFlag = '1';
                break;
            case '/master_province':
                $scope.form.data.msprNonActiveFlag = '1';
                break;
            case '/master_regency':
                $scope.form.data.msreNonActiveFlag = '1';
                break;
            case '/master_warehouse':
                $scope.form.data.mwrhNonActiveFlag = '1';
                $scope.form.data.mwrhLocationFlag = '0';
                break;
            case '/master_reason_transfer':
                $scope.form.data.mrtrNonActiveFlag = '1';
                break; 
            case '/master_brand':
                $scope.form.data.mbrnNonActiveFlag = '1';
                break; 
            case '/master_color':
                $scope.form.data.mcolNonActiveFlag = '1';
                break; 
            case '/master_branch':
                $scope.form.data.mbraNonActiveFlag = '1';
                break; 
            case '/master_employee_status':
                $scope.form.data.msesNonActiveFlag = '1';
                break; 
            case '/master_employee_detail':
                $scope.form.data.msemNonActiveFlag = '1';
                $scope.form.data.msemGender = '1';
                break; 
            case '/master_store':
                $scope.form.data.mstoNonActiveFlag = '1';
                break; 
            case '/master_purchase_type':
                $scope.form.data.mpurtNonActiveFlag = '1';
                break; 
            case '/master_payment_type':
                $scope.form.data.mpaytNonActiveFlag = '1';
                break;
            case '/master_bank_account':
                $scope.form.data.mbacNonActiveFlag = '1';
                break;
            case '/master_journal_type':
                $scope.form.data.mjotNonActiveFlag = '1';
                break;
            case '/master_account_payable_type':
                $scope.form.data.maptNonActiveFlag = '1';
                break;
            case '/master_account_receivable_type':
                $scope.form.data.marcNonActiveFlag = '1';
                break;
            case '/master_bank':
                $scope.form.data.mbNonActiveFlag = '1';
                break;
            case '/master_chart_of_accounts':
                $scope.form.data.mcoaNonActiveFlag = '1';
                $scope.form.data.mcoaFlagHeader = '1';
                break;
            case '/master_customer':
                $scope.form.data.mcustNonActiveFlag = '1';
                $scope.form.data.mcustType = '1';
                $scope.form.data.mcustGender = '1';
                break;
            case '/master_salesman':
                $scope.form.data.msamNonActiveFlag = '1';
                $scope.form.data.msamGender = '1';
                break;
            case '/master_unit':
                $scope.form.data.munitNonActiveFlag = '1';
                break;
            case '/master_sales_order_type':
                $scope.form.data.msotNonActiveFlag = '1';
                break;
            case '/master_division':
                $scope.form.data.mdivNonActiveFlag = '1';
                break;
            case '/master_item_sub_category':
                $scope.form.data.miscaNonActiveFlag = '1';
                break;
            case '/master_item_category':
                $scope.form.data.micaNonActiveFlag = '1';
                break;
            case '/master_item_location':
                $scope.form.data.mlocNonActiveFlag = '1';
                break;
            case '/master_item':
                $scope.form.data.mitmNonActiveFlag = '1';
                break;
            case '/master_item_others':
                $scope.form.data.mitoNonActiveFlag = '1';
                break;
            case '/master_driver':
                $scope.form.data.mdriNonActiveFlag = '1';
                $scope.form.data.mdriGender = '1';
                break;
            case '/master_vehicle':
                $scope.form.data.mvehStatus = '1';
                break;
            case '/master_reason_return_sales_order':
                $scope.form.data.mrrsNonActiveFlag = '1';
                break;
            case '/master_reason_return_purchase_order':
                $scope.form.data.mrrpNonActiveFlag = '1';
                break;
   
                // TRANSACTION
            case '/purchase_list':
            case '/purchase_approval':
//                dataTransactionGrid.getLabel($scope).then(function(dataOut){
//                    $scope.formLabel = dataOut;
//                    $scope.$broadcast('formLabelLoaded');
//                });
                
                $scope.form.data.purhDate = new Date();
                $scope.form.data.purhDirect = 0;
                break;
            case '/invoice':
                $scope.form.data.inhDate = new Date();
                break;
            case '/return':
                $scope.form.data.reihDate = new Date();
                break;
            case '/return_purchase_order':
                $scope.form.data.repohDate = new Date();
                break;
            case '/invoice_return':
                $scope.form.data.reihInvoiceType = '2';
                break;
            case '/sales_order_list':
            case '/sales_order_approval':
                $scope.form.data.sohDate = new Date();
                $scope.form.data.sohDirect = 0;
                break;
            case '/journal':
                $scope.form.data.johdDate = new Date();
                $scope.form.data.johdFlagPosting  = '2';
//                $scope.form.data.johdPostingTime = new Date();
//                $scope.form.data.johdPostingUserId = $scope.session.session.userName;
                break;
            case '/account_receivable':
                $scope.form.data.archDate = new Date();
                break;
            case '/account_payable':
                $scope.form.data.aphDate = new Date();
                break;
                
                // WAREHOUSE
            case '/receive':
                $scope.form.data.rihdDate = new Date();
                break;
            case '/storing':
                $scope.form.data.sthDate = new Date();
                break;
            case '/picking':
                $scope.form.data.pichDate = new Date();
                break;
            case '/packing':
                $scope.form.data.pachDate = new Date();
                break;
            case '/transfer':
                $scope.form.data.trahDate = new Date();
                break;
                
            case '/damage_item':
                $scope.form.data.dmihDate = new Date();
                break;
            case '/selling_order':
                $scope.form.data.sellhDate = new Date();
                break;
                
        }
    };
    
    $scope.onFocus = function (e) {

        $timeout(function () {
          angular.element(e.target).triggerHandler('input');
        });
    };
    
    $scope.onBlur = function () {

//        $scope.$watch('scope', function(newValue){
//            if(newValue == '' || newValue == '`')
//                delete $scope.scope;
//        })
        
        if($scope.form.gridEditor.$error.editable){
            var typeaheadErrors = [].concat($scope.form.gridEditor.$error.editable);
            angular.forEach(typeaheadErrors, function(model, control, key){
                if (angular.isUndefined(model.$modelValue) || model.$modelValue == '')
                {
                    if (model.$viewValue == '`') { 
                        model.$viewValue = undefined;
                        model.$modelValue = undefined;
                        model.$setValidity('editable', true);
                    } else {
                        model.$viewValue = undefined;
                        model.$modelValue = undefined;
                        model.$setValidity('editable', true);
                    }
                } 
            });
        }
        
        if($scope.form.headerForm) {
            if($scope.form.headerForm.$error.editable){
                var typeaheadErrors = [].concat($scope.form.headerForm.$error.editable);
                angular.forEach(typeaheadErrors, function(model, control, key){
                    if (angular.isUndefined(model.$modelValue) || model.$modelValue == '')
                    {
                        if (model.$viewValue == '`') { 
                            model.$viewValue = undefined;
                            model.$modelValue = undefined;
                            model.$setValidity('editable', true);
                        } else {
                            model.$viewValue = undefined;
                            model.$modelValue = undefined;
                            model.$setValidity('editable', true);
                        }  
                    }  
                });
            }
        }
        
        if($scope.form.itemForm) {
            if($scope.form.itemForm.$error.editable){
                var typeaheadErrors = [].concat($scope.form.itemForm.$error.editable);
                angular.forEach(typeaheadErrors, function(model, control, key){
                    if (angular.isUndefined(model.$modelValue) || model.$modelValue == '')
                    {
                        if (model.$viewValue == '`') { 
                            model.$viewValue = undefined;
                            model.$modelValue = undefined;
                            model.$setValidity('editable', true);
                        } else {
                            model.$viewValue = undefined;
                            model.$modelValue = undefined;
                            model.$setValidity('editable', true);
                        }   
                    } 
                });
            }
        }
    };

    $scope.keys = function(obj){
        return obj? Object.keys(obj) : [];
    }
    

    
    $rootScope.$on('$viewContentLoading', function(event, viewConfig){ 

        function normalize(parent) {
            if (parent && parent.menu) {
                for (var i = 0, l = parent.menu.length; i < l; ++i) {
                    var child = parent.menu[i];
                    if (child.apiPath) {
                        logs[child.link] = child.apiPath;
                    }
                    if (child.menu) {
                        normalize(child); 
                    }
                }
            }
        }
        
        normalize($scope.menu);
        
    });
    
    $scope.copy = function(data) {
       // Example with 1 argument
       $scope.form.detail = angular.copy(data);
     };
    
    $scope.dateKeyDown = function(event) {
        if (event.keyCode === 8) {
            
            event.preventDefault();
            event.target.value = '';
            var id = event.target.id.replace('input', '');
            delete $scope.form.data[id];
            //console.log(event);
        }
    }
    
	$scope.htmlReady();
}]);