'use strict';

App.controller('reportStockSupplierCtrl', ['$scope', '$q', '$http', 'transformRequestAsFormPost', '$location', 'dataGrid', 'dataTransactionGrid', '$state', '$stateParams', 'apiGet', '$rootScope', '$interval', '$timeout', '$parse', function($scope, $q, $http, transformRequestAsFormPost, $location, dataGrid, dataTransactionGrid, $state, $stateParams, apiGet, $rootScope, $interval, $timeout, $parse) {
    $scope.form = {};
    $scope.form.data = {};
    
    $scope.temp = $location.path().replace('/', '');

    $scope.urls = 'api/admin/menu/' + $scope.temp;
    apiGet.loadData($scope).then(function(dataOut) {
        $scope.url = dataOut.data.menuAPI;
        
        $scope.urls = 'lang/admin/' + $scope.url + '/form';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.formLabel = dataOut;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/category';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.category = dataOut.data;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/Supplier';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.supplier = dataOut.data;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/Item';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.item = dataOut.data;
        });
    });
    
    $scope.toggleCategory = function toggleCategory(dt) {

        var idx = $scope.form.data.micaId.indexOf(dt);

        // is currently selected
        if (idx > -1) {
            $scope.form.data.micaId.splice(idx, 1);
        } else {
            $scope.form.data.micaId.push(dt);
        }
        
        if( !$scope.form.data.micaId.length ) {
            $scope.checkCat = false;
        } else {
            $scope.checkCat = true;
        }
    };
    
    $scope.checkAllCategory = function checkAllCategory() {
        angular.forEach($scope.category, function (item) {
            
            var idx = $scope.form.data.micaId.indexOf(item.micaId);

            if (idx <= -1) {
            
                $scope.form.data.micaId.push(item.micaId);
                
            }
        });
        
        $scope.checkCat = true;
        
    };
    
    $scope.clearAllCategory = function clearAllCategory() {
        
        $scope.form.data.micaId = [];
        
        $scope.checkCat = false;
        
    };
    
    $scope.toggleSupplier = function toggleSupplier(dt) {
        
        var idx = $scope.form.data.msupId.indexOf(dt);

        // is currently selected
        if (idx > -1) {
            $scope.form.data.msupId.splice(idx, 1);
        } else {
            $scope.form.data.msupId.push(dt);
        }
        
        if( !$scope.form.data.msupId.length ) {
            $scope.checkSupp = false;
        } else {
            $scope.checkSupp = true;
        }
    };
    
    $scope.checkAllSupplier = function checkAllSupplier() {
        angular.forEach($scope.supplier, function (item) {
            
            var idx = $scope.form.data.msupId.indexOf(item.msupId);

            if (idx <= -1) {
            
                $scope.form.data.msupId.push(item.msupId);
                
            }
        });
        
        $scope.checkSupp = true;
        
    };
    
    $scope.clearAllSupplier = function clearAllSupplier() {
        
        $scope.form.data.msupId = [];
        
        $scope.checkSupp = false;
        
    };
    
    $scope.toggleItem = function toggleItem(dt) {

        var idx = $scope.form.data.mitmId.indexOf(dt);

        // is currently selected
        if (idx > -1) {
            $scope.form.data.mitmId.splice(idx, 1);
            $scope.disableItem = false;
        } else {
            if ($scope.form.data.mitmId.length < 5 ) {
                $scope.form.data.mitmId.push(dt);
                
                if ($scope.form.data.mitmId.length >= 5 ) {
                    $scope.disableItem = true;
                } else {
                    $scope.disableItem = false;
                }
            } else {
                $scope.disableItem = false;
            }
        }
        
        if( !$scope.form.data.mitmId.length ) {
            $scope.checkItem = false;
        } else {
            $scope.checkItem = true;
        }
    };
    
    $scope.clearAllItem = function clearAllItem() {
        
        $scope.form.data.mitmId = [];
        
        $scope.checkItem = false;
        
    };
    
//    $scope.submit = function() {
//        
//        $scope.url = App.constant.apiURL + '/api/admin/reports/stock/stockBySupplier';
//        var option = {
//            method: 'post',
//            url: $scope.url,
//            transformRequest: transformRequestAsFormPost,
//            data: $scope.form.data
//        };
//        var http = $http(option);
//        $timeout(function() {
//            window.location.href = $scope.url;
//        }, 100);
//        
//    }
    
	$scope.htmlReady();
}]);

App.controller('reportStockCategoryCtrl', ['$scope', '$q', '$http', 'transformRequestAsFormPost', '$location', 'dataGrid', 'dataTransactionGrid', '$state', '$stateParams', 'apiGet', '$rootScope', '$interval', '$timeout', '$parse', function($scope, $q, $http, transformRequestAsFormPost, $location, dataGrid, dataTransactionGrid, $state, $stateParams, apiGet, $rootScope, $interval, $timeout, $parse) {
    $scope.form = {};
    $scope.form.data = {};
    
    $scope.temp = $location.path().replace('/', '');

    $scope.urls = 'api/admin/menu/' + $scope.temp;
    apiGet.loadData($scope).then(function(dataOut) {
        $scope.url = dataOut.data.menuAPI;
        
        $scope.urls = 'lang/admin/' + $scope.url + '/form';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.formLabel = dataOut;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/category';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.category = dataOut.data;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/Supplier';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.supplier = dataOut.data;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/Item';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.item = dataOut.data;
        });
    });
    
    $scope.toggleCategory = function toggleCategory(dt) {

        var idx = $scope.form.data.micaId.indexOf(dt);

        // is currently selected
        if (idx > -1) {
            $scope.form.data.micaId.splice(idx, 1);
        } else {
            $scope.form.data.micaId.push(dt);
        }
        
        if( !$scope.form.data.micaId.length ) {
            $scope.checkCat = false;
        } else {
            $scope.checkCat = true;
        }
    };
    
    $scope.checkAllCategory = function checkAllCategory() {
        angular.forEach($scope.category, function (item) {
            
            var idx = $scope.form.data.micaId.indexOf(item.micaId);

            if (idx <= -1) {
            
                $scope.form.data.micaId.push(item.micaId);
                
            }
        });
        
        $scope.checkCat = true;
        
    };
    
    $scope.clearAllCategory = function clearAllCategory() {
        
        $scope.form.data.micaId = [];
        
        $scope.checkCat = false;
        
    };
    
    $scope.toggleSupplier = function toggleSupplier(dt) {
        
        var idx = $scope.form.data.msupId.indexOf(dt);

        // is currently selected
        if (idx > -1) {
            $scope.form.data.msupId.splice(idx, 1);
        } else {
            $scope.form.data.msupId.push(dt);
        }
        
        if( !$scope.form.data.msupId.length ) {
            $scope.checkSupp = false;
        } else {
            $scope.checkSupp = true;
        }
    };
    
    $scope.checkAllSupplier = function checkAllSupplier() {
        angular.forEach($scope.supplier, function (item) {
            
            var idx = $scope.form.data.msupId.indexOf(item.msupId);

            if (idx <= -1) {
            
                $scope.form.data.msupId.push(item.msupId);
                
            }
        });
        
        $scope.checkSupp = true;
        
    };
    
    $scope.clearAllSupplier = function clearAllSupplier() {
        
        $scope.form.data.msupId = [];
        
        $scope.checkSupp = false;
        
    };
    
    $scope.toggleItem = function toggleItem(dt) {

        var idx = $scope.form.data.mitmId.indexOf(dt);

        // is currently selected
        if (idx > -1) {
            $scope.form.data.mitmId.splice(idx, 1);
            $scope.disableItem = false;
        } else {
            if ($scope.form.data.mitmId.length < 5 ) {
                $scope.form.data.mitmId.push(dt);
                
                if ($scope.form.data.mitmId.length >= 5 ) {
                    $scope.disableItem = true;
                } else {
                    $scope.disableItem = false;
                }
            } else {
                $scope.disableItem = false;
            }
        }
        
        if( !$scope.form.data.mitmId.length ) {
            $scope.checkItem = false;
        } else {
            $scope.checkItem = true;
        }
    };
    
    $scope.clearAllItem = function clearAllItem() {
        
        $scope.form.data.mitmId = [];
        
        $scope.checkItem = false;
        
    };
    
	$scope.htmlReady();
}]);

App.controller('reportStockAllCtrl', ['$scope', '$q', '$http', 'transformRequestAsFormPost', '$location', 'dataGrid', 'dataTransactionGrid', '$state', '$stateParams', 'apiGet', '$rootScope', '$interval', '$timeout', '$parse', function($scope, $q, $http, transformRequestAsFormPost, $location, dataGrid, dataTransactionGrid, $state, $stateParams, apiGet, $rootScope, $interval, $timeout, $parse) {
    $scope.form = {};
    $scope.form.data = {};
    
    $scope.temp = $location.path().replace('/', '');

    $scope.urls = 'api/admin/menu/' + $scope.temp;
    apiGet.loadData($scope).then(function(dataOut) {
        $scope.url = dataOut.data.menuAPI;
        
        $scope.urls = 'lang/admin/' + $scope.url + '/form';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.formLabel = dataOut;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/category';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.category = dataOut.data;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/Supplier';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.supplier = dataOut.data;
        });
    });
    
    $scope.toggleCategory = function toggleCategory(dt) {

        var idx = $scope.form.data.micaId.indexOf(dt);

        // is currently selected
        if (idx > -1) {
            $scope.form.data.micaId.splice(idx, 1);
            $scope.disableCat = false;
        } else {
            if ($scope.form.data.micaId.length < 3 ) {
                $scope.form.data.micaId.push(dt);
                
                if ($scope.form.data.micaId.length >= 3 ) {
                    $scope.disableCat = true;
                } else {
                    $scope.disableCat = false;
                }
            } else {
                $scope.disableCat = true;
            }
        }
        
        if( !$scope.form.data.micaId.length ) {
            $scope.checkCat = false;
        } else {
            $scope.checkCat = true;
        }
    };
    
    $scope.checkAllCategory = function checkAllCategory() {
        angular.forEach($scope.category, function (item) {
            
            var idx = $scope.form.data.micaId.indexOf(item.micaId);

            if (idx <= -1) {
            
                $scope.form.data.micaId.push(item.micaId);
                
            }
        });
        
        $scope.checkCat = true;
        
    };
    
    $scope.clearAllCategory = function clearAllCategory() {
        
        $scope.form.data.micaId = [];
        
        $scope.checkCat = false;
        
    };
    
    $scope.toggleSupplier = function toggleSupplier(dt) {
        
        var idx = $scope.form.data.msupId.indexOf(dt);

        // is currently selected
        if (idx > -1) {
            $scope.form.data.msupId.splice(idx, 1);
        } else {
            $scope.form.data.msupId.push(dt);
        }
        
        if( !$scope.form.data.msupId.length ) {
            $scope.checkSupp = false;
        } else {
            $scope.checkSupp = true;
        }
    };
    
    $scope.checkAllSupplier = function checkAllSupplier() {
        angular.forEach($scope.supplier, function (item) {
            
            var idx = $scope.form.data.msupId.indexOf(item.msupId);

            if (idx <= -1) {
            
                $scope.form.data.msupId.push(item.msupId);
                
            }
        });
        
        $scope.checkSupp = true;
        
    };
    
    $scope.clearAllSupplier = function clearAllSupplier() {
        
        $scope.form.data.msupId = [];
        
        $scope.checkSupp = false;
        
    };
    
	$scope.htmlReady();
}]);

App.controller('reportPOItemCtrl', ['$scope', '$q', '$http', 'transformRequestAsFormPost', '$location', 'dataGrid', 'dataTransactionGrid', '$state', '$stateParams', 'apiGet', '$rootScope', '$interval', '$timeout', '$parse', function($scope, $q, $http, transformRequestAsFormPost, $location, dataGrid, dataTransactionGrid, $state, $stateParams, apiGet, $rootScope, $interval, $timeout, $parse) {
    $scope.form = {};
    $scope.form.data = {};
    
    $scope.date = new Date();
    
    $scope.temp = $location.path().replace('/', '');
    
    $scope.urls = 'api/admin/menu/' + $scope.temp;
    apiGet.loadData($scope).then(function(dataOut) {
        $scope.url = dataOut.data.menuAPI;
        
        $scope.urls = 'lang/admin/' + $scope.url + '/form';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.formLabel = dataOut;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/Supplier';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.supplier = dataOut.data;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/status';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.status = dataOut.data;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/item';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.item = dataOut.data;
        });
    });
    
    $scope.toggleSupplier = function toggleSupplier(dt) {
        
        var idx = $scope.form.data.msupId.indexOf(dt);

        // is currently selected
        if (idx > -1) {
            $scope.form.data.msupId.splice(idx, 1);
        } else {
            $scope.form.data.msupId.push(dt);
        }
        
        if( !$scope.form.data.msupId.length ) {
            $scope.checkSupp = false;
        } else {
            $scope.checkSupp = true;
        }
    };
    
    $scope.checkAllSupplier = function checkAllSupplier() {
        angular.forEach($scope.supplier, function (item) {
            
            var idx = $scope.form.data.msupId.indexOf(item.msupId);

            if (idx <= -1) {
            
                $scope.form.data.msupId.push(item.msupId);
                
            }
        });
        
        $scope.checkSupp = true;
        
    };
    
    $scope.clearAllSupplier = function clearAllSupplier() {
        
        $scope.form.data.msupId = [];
        
        $scope.checkSupp = false;
        
    };
    
    $scope.toggleStatus = function toggleStatus(dt) {
        
        var idx = $scope.form.data.purhStatus.indexOf(dt);

        if (idx > -1) {
            $scope.form.data.purhStatus.splice(idx, 1);
        } else {
            $scope.form.data.purhStatus.push(dt);
        }
        
        if ( !$scope.form.data.purhStatus.length ) {
            $scope.checkStat = false;
            
        } else {
            $scope.checkStat = true;
        }
    };
    
    $scope.checkAllStatus = function checkAllStatus() {
        angular.forEach($scope.status, function (item) {
            
            var idx = $scope.form.data.purhStatus.indexOf(item.purhStatus);

            if (idx <= -1) {
            
                $scope.form.data.purhStatus.push(item.purhStatus);
                
            }
        });
        
        $scope.checkStat = true;
        
    };
    
    $scope.clearAllStatus = function clearAllStatus() {
        
        $scope.form.data.purhStatus = [];
        
        $scope.checkStat = false;
        
    };
    
    $scope.toggleItem = function toggleItem(dt) {

        var idx = $scope.form.data.mitmId.indexOf(dt);

        // is currently selected
        if (idx > -1) {
            $scope.form.data.mitmId.splice(idx, 1);
            $scope.disableItem = false;
        } else {
            if ($scope.form.data.mitmId.length < 5 ) {
                $scope.form.data.mitmId.push(dt);
                
                if ($scope.form.data.mitmId.length >= 5 ) {
                    $scope.disableItem = true;
                } else {
                    $scope.disableItem = false;
                }
            } else {
                $scope.disableItem = false;
            }
        }
        
        if( !$scope.form.data.mitmId.length ) {
            $scope.checkItem = false;
        } else {
            $scope.checkItem = true;
        }
    };
    
    $scope.clearAllItem = function clearAllItem() {
        
        $scope.form.data.mitmId = [];
        
        $scope.checkItem = false;
        
    };
    
	$scope.htmlReady();
}]);

App.controller('reportPOSupplierCtrl', ['$scope', '$q', '$http', 'transformRequestAsFormPost', '$location', 'dataGrid', 'dataTransactionGrid', '$state', '$stateParams', 'apiGet', '$rootScope', '$interval', '$timeout', '$parse', function($scope, $q, $http, transformRequestAsFormPost, $location, dataGrid, dataTransactionGrid, $state, $stateParams, apiGet, $rootScope, $interval, $timeout, $parse) {
    $scope.form = {};
    $scope.form.data = {};
    
    $scope.date = new Date();
    
    $scope.temp = $location.path().replace('/', '');
    
    $scope.urls = 'api/admin/menu/' + $scope.temp;
    apiGet.loadData($scope).then(function(dataOut) {
        $scope.url = dataOut.data.menuAPI;
        
        $scope.urls = 'lang/admin/' + $scope.url + '/form';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.formLabel = dataOut;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/Supplier';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.supplier = dataOut.data;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/status';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.status = dataOut.data;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/item';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.item = dataOut.data;
        });
    });
    
    $scope.toggleSupplier = function toggleSupplier(dt) {
        
        var idx = $scope.form.data.msupId.indexOf(dt);

        // is currently selected
        if (idx > -1) {
            $scope.form.data.msupId.splice(idx, 1);
        } else {
            $scope.form.data.msupId.push(dt);
        }
        
        if( !$scope.form.data.msupId.length ) {
            $scope.checkSupp = false;
        } else {
            $scope.checkSupp = true;
        }
    };
    
    $scope.checkAllSupplier = function checkAllSupplier() {
        angular.forEach($scope.supplier, function (item) {
            
            var idx = $scope.form.data.msupId.indexOf(item.msupId);

            if (idx <= -1) {
            
                $scope.form.data.msupId.push(item.msupId);
                
            }
        });
        
        $scope.checkSupp = true;
        
    };
    
    $scope.clearAllSupplier = function clearAllSupplier() {
        
        $scope.form.data.msupId = [];
        
        $scope.checkSupp = false;
        
    };
    
    $scope.toggleStatus = function toggleStatus(dt) {
        
        var idx = $scope.form.data.purhStatus.indexOf(dt);

        if (idx > -1) {
            $scope.form.data.purhStatus.splice(idx, 1);
        } else {
            $scope.form.data.purhStatus.push(dt);
        }
        
        if ( !$scope.form.data.purhStatus.length ) {
            $scope.checkStat = false;
            
        } else {
            $scope.checkStat = true;
        }
    };
    
    $scope.checkAllStatus = function checkAllStatus() {
        angular.forEach($scope.status, function (item) {
            
            var idx = $scope.form.data.purhStatus.indexOf(item.purhStatus);

            if (idx <= -1) {
            
                $scope.form.data.purhStatus.push(item.purhStatus);
                
            }
        });
        
        $scope.checkStat = true;
        
    };
    
    $scope.clearAllStatus = function clearAllStatus() {
        
        $scope.form.data.purhStatus = [];
        
        $scope.checkStat = false;
        
    };
    
    $scope.toggleItem = function toggleItem(dt) {

        var idx = $scope.form.data.mitmId.indexOf(dt);

        // is currently selected
        if (idx > -1) {
            $scope.form.data.mitmId.splice(idx, 1);
            $scope.disableItem = false;
        } else {
            if ($scope.form.data.mitmId.length < 5 ) {
                $scope.form.data.mitmId.push(dt);
                
                if ($scope.form.data.mitmId.length >= 5 ) {
                    $scope.disableItem = true;
                } else {
                    $scope.disableItem = false;
                }
            } else {
                $scope.disableItem = false;
            }
        }
        
        if( !$scope.form.data.mitmId.length ) {
            $scope.checkItem = false;
        } else {
            $scope.checkItem = true;
        }
    };
    
    $scope.clearAllItem = function clearAllItem() {
        
        $scope.form.data.mitmId = [];
        
        $scope.checkItem = false;
        
    };
    
	$scope.htmlReady();
}]);

App.controller('reportPOSupplierSummaryCtrl', ['$scope', '$q', '$http', 'transformRequestAsFormPost', '$location', 'dataGrid', 'dataTransactionGrid', '$state', '$stateParams', 'apiGet', '$rootScope', '$interval', '$timeout', '$parse', function($scope, $q, $http, transformRequestAsFormPost, $location, dataGrid, dataTransactionGrid, $state, $stateParams, apiGet, $rootScope, $interval, $timeout, $parse) {
    $scope.form = {};
    $scope.form.data = {};
    
    $scope.date = new Date();
    
    $scope.temp = $location.path().replace('/', '');
    
    $scope.urls = 'api/admin/menu/' + $scope.temp;
    apiGet.loadData($scope).then(function(dataOut) {
        $scope.url = dataOut.data.menuAPI;
        
        $scope.urls = 'lang/admin/' + $scope.url + '/form';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.formLabel = dataOut;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/Supplier';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.supplier = dataOut.data;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/status';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.status = dataOut.data;
        });
    });
    
    $scope.toggleSupplier = function toggleSupplier(dt) {
        
        var idx = $scope.form.data.msupId.indexOf(dt);

        // is currently selected
        if (idx > -1) {
            $scope.form.data.msupId.splice(idx, 1);
        } else {
            $scope.form.data.msupId.push(dt);
        }
        
        if( !$scope.form.data.msupId.length ) {
            $scope.checkSupp = false;
        } else {
            $scope.checkSupp = true;
        }
    };
    
    $scope.checkAllSupplier = function checkAllSupplier() {
        angular.forEach($scope.supplier, function (item) {
            
            var idx = $scope.form.data.msupId.indexOf(item.msupId);

            if (idx <= -1) {
            
                $scope.form.data.msupId.push(item.msupId);
                
            }
        });
        
        $scope.checkSupp = true;
        
    };
    
    $scope.clearAllSupplier = function clearAllSupplier() {
        
        $scope.form.data.msupId = [];
        
        $scope.checkSupp = false;
        
    };
    
    $scope.toggleStatus = function toggleStatus(dt) {
        
        var idx = $scope.form.data.purhStatus.indexOf(dt);

        if (idx > -1) {
            $scope.form.data.purhStatus.splice(idx, 1);
        } else {
            $scope.form.data.purhStatus.push(dt);
        }
        
        if ( !$scope.form.data.purhStatus.length ) {
            $scope.checkStat = false;
            
        } else {
            $scope.checkStat = true;
        }
    };
    
    $scope.checkAllStatus = function checkAllStatus() {
        angular.forEach($scope.status, function (item) {
            
            var idx = $scope.form.data.purhStatus.indexOf(item.purhStatus);

            if (idx <= -1) {
            
                $scope.form.data.purhStatus.push(item.purhStatus);
                
            }
        });
        
        $scope.checkStat = true;
        
    };
    
    $scope.clearAllStatus = function clearAllStatus() {
        
        $scope.form.data.purhStatus = [];
        
        $scope.checkStat = false;
        
    };
    
	$scope.htmlReady();
}]);

App.controller('reportPOCtrl', ['$scope', '$q', '$http', 'transformRequestAsFormPost', '$location', 'dataGrid', 'dataTransactionGrid', '$state', '$stateParams', 'apiGet', '$rootScope', '$interval', '$timeout', '$parse', function($scope, $q, $http, transformRequestAsFormPost, $location, dataGrid, dataTransactionGrid, $state, $stateParams, apiGet, $rootScope, $interval, $timeout, $parse) {
    $scope.form = {};
    $scope.form.data = {};
    
    $scope.date = new Date();
    
    $scope.temp = $location.path().replace('/', '');
    
    $scope.urls = 'api/admin/menu/' + $scope.temp;
    apiGet.loadData($scope).then(function(dataOut) {
        $scope.url = dataOut.data.menuAPI;
        
        $scope.urls = 'lang/admin/' + $scope.url + '/form';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.formLabel = dataOut;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/Supplier';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.supplier = dataOut.data;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/status';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.status = dataOut.data;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/direct';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.type = dataOut.data;
        });
        
        $scope.form.data.purhDirect = '0';
    });
    
    $scope.toggleSupplier = function toggleSupplier(dt) {
        
        var idx = $scope.form.data.msupId.indexOf(dt);

        // is currently selected
        if (idx > -1) {
            $scope.form.data.msupId.splice(idx, 1);
        } else {
            $scope.form.data.msupId.push(dt);
        }
        
        if( !$scope.form.data.msupId.length ) {
            $scope.checkSupp = false;
        } else {
            $scope.checkSupp = true;
        }
    };
    
    $scope.checkAllSupplier = function checkAllSupplier() {
        angular.forEach($scope.supplier, function (item) {
            
            var idx = $scope.form.data.msupId.indexOf(item.msupId);

            if (idx <= -1) {
            
                $scope.form.data.msupId.push(item.msupId);
                
            }
        });
        
        $scope.checkSupp = true;
        
    };
    
    $scope.clearAllSupplier = function clearAllSupplier() {
        
        $scope.form.data.msupId = [];
        
        $scope.checkSupp = false;
        
    };
    
    $scope.toggleStatus = function toggleStatus(dt) {
        
        var idx = $scope.form.data.purhStatus.indexOf(dt);

        if (idx > -1) {
            $scope.form.data.purhStatus.splice(idx, 1);
        } else {
            $scope.form.data.purhStatus.push(dt);
        }
        
        if ( !$scope.form.data.purhStatus.length ) {
            $scope.checkStat = false;
            
        } else {
            $scope.checkStat = true;
        }
    };
    
    $scope.checkAllStatus = function checkAllStatus() {
        angular.forEach($scope.status, function (item) {
            
            var idx = $scope.form.data.purhStatus.indexOf(item.purhStatus);

            if (idx <= -1) {
            
                $scope.form.data.purhStatus.push(item.purhStatus);
                
            }
        });
        
        $scope.checkStat = true;
        
    };
    
    $scope.clearAllStatus = function clearAllStatus() {
        
        $scope.form.data.purhStatus = [];
        
        $scope.checkStat = false;
        
    };
    
	$scope.htmlReady();
}]);

App.controller('reportPOSupplierDetailCtrl', ['$scope', '$q', '$http', 'transformRequestAsFormPost', '$location', 'dataGrid', 'dataTransactionGrid', '$state', '$stateParams', 'apiGet', '$rootScope', '$interval', '$timeout', '$parse', function($scope, $q, $http, transformRequestAsFormPost, $location, dataGrid, dataTransactionGrid, $state, $stateParams, apiGet, $rootScope, $interval, $timeout, $parse) {
    $scope.form = {};
    $scope.form.data = {};
    
    $scope.date = new Date();
    
    $scope.temp = $location.path().replace('/', '');
    
    $scope.urls = 'api/admin/menu/' + $scope.temp;
    apiGet.loadData($scope).then(function(dataOut) {
        $scope.url = dataOut.data.menuAPI;
        
        $scope.urls = 'lang/admin/' + $scope.url + '/form';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.formLabel = dataOut;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/Supplier';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.supplier = dataOut.data;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/status';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.status = dataOut.data;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/item';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.item = dataOut.data;
        });
    });
    
    $scope.toggleSupplier = function toggleSupplier(dt) {
        
        var idx = $scope.form.data.msupId.indexOf(dt);

        // is currently selected
        if (idx > -1) {
            $scope.form.data.msupId.splice(idx, 1);
        } else {
            $scope.form.data.msupId.push(dt);
        }
        
        if( !$scope.form.data.msupId.length ) {
            $scope.checkSupp = false;
        } else {
            $scope.checkSupp = true;
        }
    };
    
    $scope.checkAllSupplier = function checkAllSupplier() {
        angular.forEach($scope.supplier, function (item) {
            
            var idx = $scope.form.data.msupId.indexOf(item.msupId);

            if (idx <= -1) {
            
                $scope.form.data.msupId.push(item.msupId);
                
            }
        });
        
        $scope.checkSupp = true;
        
    };
    
    $scope.clearAllSupplier = function clearAllSupplier() {
        
        $scope.form.data.msupId = [];
        
        $scope.checkSupp = false;
        
    };
    
    $scope.toggleStatus = function toggleStatus(dt) {
        
        var idx = $scope.form.data.purhStatus.indexOf(dt);

        if (idx > -1) {
            $scope.form.data.purhStatus.splice(idx, 1);
        } else {
            $scope.form.data.purhStatus.push(dt);
        }
        
        if ( !$scope.form.data.purhStatus.length ) {
            $scope.checkStat = false;
            
        } else {
            $scope.checkStat = true;
        }
    };
    
    $scope.checkAllStatus = function checkAllStatus() {
        angular.forEach($scope.status, function (item) {
            
            var idx = $scope.form.data.purhStatus.indexOf(item.purhStatus);

            if (idx <= -1) {
            
                $scope.form.data.purhStatus.push(item.purhStatus);
                
            }
        });
        
        $scope.checkStat = true;
        
    };
    
    $scope.clearAllStatus = function clearAllStatus() {
        
        $scope.form.data.purhStatus = [];
        
        $scope.checkStat = false;
        
    };
    
    $scope.toggleItem = function toggleItem(dt) {

        var idx = $scope.form.data.mitmId.indexOf(dt);

        // is currently selected
        if (idx > -1) {
            $scope.form.data.mitmId.splice(idx, 1);
            $scope.disableItem = false;
        } else {
            if ($scope.form.data.mitmId.length < 5 ) {
                $scope.form.data.mitmId.push(dt);
                
                if ($scope.form.data.mitmId.length >= 5 ) {
                    $scope.disableItem = true;
                } else {
                    $scope.disableItem = false;
                }
            } else {
                $scope.disableItem = false;
            }
        }
        
        if( !$scope.form.data.mitmId.length ) {
            $scope.checkItem = false;
        } else {
            $scope.checkItem = true;
        }
    };
    
    $scope.clearAllItem = function clearAllItem() {
        
        $scope.form.data.mitmId = [];
        
        $scope.checkItem = false;
        
    };
    
	$scope.htmlReady();
}]);

App.controller('reportReceiveSupplierCtrl', ['$scope', '$q', '$http', 'transformRequestAsFormPost', '$location', 'dataGrid', 'dataTransactionGrid', '$state', '$stateParams', 'apiGet', '$rootScope', '$interval', '$timeout', '$parse', function($scope, $q, $http, transformRequestAsFormPost, $location, dataGrid, dataTransactionGrid, $state, $stateParams, apiGet, $rootScope, $interval, $timeout, $parse) {
    $scope.form = {};
    $scope.form.data = {};
    
    $scope.date = new Date();
    
    $scope.temp = $location.path().replace('/', '');
    
    $scope.urls = 'api/admin/menu/' + $scope.temp;
    apiGet.loadData($scope).then(function(dataOut) {
        $scope.url = dataOut.data.menuAPI;
        
        $scope.urls = 'lang/admin/' + $scope.url + '/form';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.formLabel = dataOut;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/Supplier';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.supplier = dataOut.data;
        });
    });
    
    $scope.toggleSupplier = function toggleSupplier(dt) {
        
        var idx = $scope.form.data.msupId.indexOf(dt);

        if (idx > -1) {
            $scope.form.data.msupId.splice(idx, 1);
        } else {
        $scope.form.data.msupId.push(dt);
        }
        
        if( !$scope.form.data.msupId.length ) {
            $scope.checkSupp = false;
        } else {
            $scope.checkSupp = true;
        }
    };
    
    $scope.checkAllSupplier = function checkAllSupplier() {
        angular.forEach($scope.supplier, function (item) {
            
            var idx = $scope.form.data.msupId.indexOf(item.msupId);

            if (idx <= -1) {
            
                $scope.form.data.msupId.push(item.msupId);
                
            }
        });
        
        $scope.checkSupp = true;
        
    };
    
    $scope.clearAllSupplier = function clearAllSupplier() {
        
        $scope.form.data.msupId = [];
        
        $scope.checkSupp = false;
        
    };
    
	$scope.htmlReady();
}]);

App.controller('reportReceivePendingSupplierCtrl', ['$scope', '$q', '$http', 'transformRequestAsFormPost', '$location', 'dataGrid', 'dataTransactionGrid', '$state', '$stateParams', 'apiGet', '$rootScope', '$interval', '$timeout', '$parse', function($scope, $q, $http, transformRequestAsFormPost, $location, dataGrid, dataTransactionGrid, $state, $stateParams, apiGet, $rootScope, $interval, $timeout, $parse) {
    $scope.form = {};
    $scope.form.data = {};
    
    $scope.date = new Date();
    
    $scope.temp = $location.path().replace('/', '');
    
    $scope.urls = 'api/admin/menu/' + $scope.temp;
    apiGet.loadData($scope).then(function(dataOut) {
        $scope.url = dataOut.data.menuAPI;
        
        $scope.urls = 'lang/admin/' + $scope.url + '/form';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.formLabel = dataOut;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/Supplier';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.supplier = dataOut.data;
        });
    });
    
    $scope.toggleSupplier = function toggleSupplier(dt) {
        
        var idx = $scope.form.data.msupId.indexOf(dt);

        if (idx > -1) {
            $scope.form.data.msupId.splice(idx, 1);
        } else {
        $scope.form.data.msupId.push(dt);
        }
        
        if( !$scope.form.data.msupId.length ) {
            $scope.checkSupp = false;
        } else {
            $scope.checkSupp = true;
        }
    };
    
    $scope.checkAllSupplier = function checkAllSupplier() {
        angular.forEach($scope.supplier, function (item) {
            
            var idx = $scope.form.data.msupId.indexOf(item.msupId);

            if (idx <= -1) {
            
                $scope.form.data.msupId.push(item.msupId);
                
            }
        });
        
        $scope.checkSupp = true;
        
    };
    
    $scope.clearAllSupplier = function clearAllSupplier() {
        
        $scope.form.data.msupId = [];
        
        $scope.checkSupp = false;
        
    };
    
	$scope.htmlReady();
}]);

App.controller('reportReceiveOverQtyCtrl', ['$scope', '$q', '$http', 'transformRequestAsFormPost', '$location', 'dataGrid', 'dataTransactionGrid', '$state', '$stateParams', 'apiGet', '$rootScope', '$interval', '$timeout', '$parse', function($scope, $q, $http, transformRequestAsFormPost, $location, dataGrid, dataTransactionGrid, $state, $stateParams, apiGet, $rootScope, $interval, $timeout, $parse) {
    $scope.form = {};
    $scope.form.data = {};
    
    $scope.date = new Date();
    
    $scope.temp = $location.path().replace('/', '');
    
    $scope.urls = 'api/admin/menu/' + $scope.temp;
    apiGet.loadData($scope).then(function(dataOut) {
        $scope.url = dataOut.data.menuAPI;
        
        $scope.urls = 'lang/admin/' + $scope.url + '/form';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.formLabel = dataOut;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/Supplier';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.supplier = dataOut.data;
        });
    });
    
    $scope.toggleSupplier = function toggleSupplier(dt) {
        
        var idx = $scope.form.data.msupId.indexOf(dt);

        if (idx > -1) {
            $scope.form.data.msupId.splice(idx, 1);
        } else {
        $scope.form.data.msupId.push(dt);
        }
        
        if( !$scope.form.data.msupId.length ) {
            $scope.checkSupp = false;
        } else {
            $scope.checkSupp = true;
        }
    };
    
    $scope.checkAllSupplier = function checkAllSupplier() {
        angular.forEach($scope.supplier, function (item) {
            
            var idx = $scope.form.data.msupId.indexOf(item.msupId);

            if (idx <= -1) {
            
                $scope.form.data.msupId.push(item.msupId);
                
            }
        });
        
        $scope.checkSupp = true;
        
    };
    
    $scope.clearAllSupplier = function clearAllSupplier() {
        
        $scope.form.data.msupId = [];
        
        $scope.checkSupp = false;
        
    };
    
	$scope.htmlReady();
}]);

App.controller('reportReceiveNewItemCtrl', ['$scope', '$q', '$http', 'transformRequestAsFormPost', '$location', 'dataGrid', 'dataTransactionGrid', '$state', '$stateParams', 'apiGet', '$rootScope', '$interval', '$timeout', '$parse', function($scope, $q, $http, transformRequestAsFormPost, $location, dataGrid, dataTransactionGrid, $state, $stateParams, apiGet, $rootScope, $interval, $timeout, $parse) {
    $scope.form = {};
    $scope.form.data = {};
    
    $scope.date = new Date();
    
    $scope.temp = $location.path().replace('/', '');
    
    $scope.urls = 'api/admin/menu/' + $scope.temp;
    apiGet.loadData($scope).then(function(dataOut) {
        $scope.url = dataOut.data.menuAPI;
        
        $scope.urls = 'lang/admin/' + $scope.url + '/form';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.formLabel = dataOut;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/Supplier';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.supplier = dataOut.data;
        });
    });
    
    $scope.toggleSupplier = function toggleSupplier(dt) {
        
        var idx = $scope.form.data.msupId.indexOf(dt);

        if (idx > -1) {
            $scope.form.data.msupId.splice(idx, 1);
        } else {
        $scope.form.data.msupId.push(dt);
        }
        
        if( !$scope.form.data.msupId.length ) {
            $scope.checkSupp = false;
        } else {
            $scope.checkSupp = true;
        }
    };
    
    $scope.checkAllSupplier = function checkAllSupplier() {
        angular.forEach($scope.supplier, function (item) {
            
            var idx = $scope.form.data.msupId.indexOf(item.msupId);

            if (idx <= -1) {
            
                $scope.form.data.msupId.push(item.msupId);
                
            }
        });
        
        $scope.checkSupp = true;
        
    };
    
    $scope.clearAllSupplier = function clearAllSupplier() {
        
        $scope.form.data.msupId = [];
        
        $scope.checkSupp = false;
        
    };
    
	$scope.htmlReady();
}]);

App.controller('reportStoringItemCtrl', ['$scope', '$q', '$http', 'transformRequestAsFormPost', '$location', 'dataGrid', 'dataTransactionGrid', '$state', '$stateParams', 'apiGet', '$rootScope', '$interval', '$timeout', '$parse', function($scope, $q, $http, transformRequestAsFormPost, $location, dataGrid, dataTransactionGrid, $state, $stateParams, apiGet, $rootScope, $interval, $timeout, $parse) {
    $scope.form = {};
    $scope.form.data = {};
    
    $scope.date = new Date();
    
    $scope.temp = $location.path().replace('/', '');
    
    $scope.urls = 'api/admin/menu/' + $scope.temp;
    apiGet.loadData($scope).then(function(dataOut) {
        $scope.url = dataOut.data.menuAPI;
        
        $scope.urls = 'lang/admin/' + $scope.url + '/form';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.formLabel = dataOut;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/item';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.item = dataOut.data;
        });
    });
    
    $scope.toggleItem = function toggleItem(dt) {

        var idx = $scope.form.data.mitmId.indexOf(dt);

        // is currently selected
        if (idx > -1) {
            $scope.form.data.mitmId.splice(idx, 1);
            $scope.disableItem = false;
        } else {
            if ($scope.form.data.mitmId.length < 5 ) {
                $scope.form.data.mitmId.push(dt);
                
                if ($scope.form.data.mitmId.length >= 5 ) {
                    $scope.disableItem = true;
                } else {
                    $scope.disableItem = false;
                }
            } else {
                $scope.disableItem = false;
            }
        }
        
        if( !$scope.form.data.mitmId.length ) {
            $scope.checkItem = false;
        } else {
            $scope.checkItem = true;
        }
    };
    
    $scope.clearAllItem = function clearAllItem() {
        
        $scope.form.data.mitmId = [];
        
        $scope.checkItem = false;
        
    };
    
	$scope.htmlReady();
}]);

App.controller('reportPendingStoringCtrl', ['$scope', '$q', '$http', 'transformRequestAsFormPost', '$location', 'dataGrid', 'dataTransactionGrid', '$state', '$stateParams', 'apiGet', '$rootScope', '$interval', '$timeout', '$parse', function($scope, $q, $http, transformRequestAsFormPost, $location, dataGrid, dataTransactionGrid, $state, $stateParams, apiGet, $rootScope, $interval, $timeout, $parse) {
    $scope.form = {};
    $scope.form.data = {};
    
    $scope.date = new Date();
    
    $scope.temp = $location.path().replace('/', '');
    
    $scope.urls = 'api/admin/menu/' + $scope.temp;
    apiGet.loadData($scope).then(function(dataOut) {
        $scope.url = dataOut.data.menuAPI;
        
        $scope.urls = 'lang/admin/' + $scope.url + '/form';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.formLabel = dataOut;
        });
    });
    
	$scope.htmlReady();
}]);

App.controller('reportStoringReceiveCtrl', ['$scope', '$q', '$http', 'transformRequestAsFormPost', '$location', 'dataGrid', 'dataTransactionGrid', '$state', '$stateParams', 'apiGet', '$rootScope', '$interval', '$timeout', '$parse', function($scope, $q, $http, transformRequestAsFormPost, $location, dataGrid, dataTransactionGrid, $state, $stateParams, apiGet, $rootScope, $interval, $timeout, $parse) {
    $scope.form = {};
    $scope.form.data = {};
    
    $scope.date = new Date();
    
    $scope.temp = $location.path().replace('/', '');
    
    $scope.urls = 'api/admin/menu/' + $scope.temp;
    apiGet.loadData($scope).then(function(dataOut) {
        $scope.url = dataOut.data.menuAPI;
        
        $scope.urls = 'lang/admin/' + $scope.url + '/form';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.formLabel = dataOut;
        });
    });
    
	$scope.htmlReady();
}]);

App.controller('reportInvoiceSupplierCtrl', ['$scope', '$q', '$http', 'transformRequestAsFormPost', '$location', 'dataGrid', 'dataTransactionGrid', '$state', '$stateParams', 'apiGet', '$rootScope', '$interval', '$timeout', '$parse', function($scope, $q, $http, transformRequestAsFormPost, $location, dataGrid, dataTransactionGrid, $state, $stateParams, apiGet, $rootScope, $interval, $timeout, $parse) {
    $scope.form = {};
    $scope.form.data = {};
    
    $scope.date = new Date();
    
    $scope.temp = $location.path().replace('/', '');
    
    $scope.urls = 'api/admin/menu/' + $scope.temp;
    apiGet.loadData($scope).then(function(dataOut) {
        $scope.url = dataOut.data.menuAPI;
        
        $scope.urls = 'lang/admin/' + $scope.url + '/form';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.formLabel = dataOut;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/Supplier';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.supplier = dataOut.data;
        });
    });
    
    $scope.toggleSupplier = function toggleSupplier(dt) {
        
        var idx = $scope.form.data.msupId.indexOf(dt);

        if (idx > -1) {
            $scope.form.data.msupId.splice(idx, 1);
        } else {
        $scope.form.data.msupId.push(dt);
        }
        
        if( !$scope.form.data.msupId.length ) {
            $scope.checkSupp = false;
        } else {
            $scope.checkSupp = true;
        }
    };
    
    $scope.checkAllSupplier = function checkAllSupplier() {
        angular.forEach($scope.supplier, function (item) {
            
            var idx = $scope.form.data.msupId.indexOf(item.msupId);

            if (idx <= -1) {
            
                $scope.form.data.msupId.push(item.msupId);
                
            }
        });
        
        $scope.checkSupp = true;
        
    };
    
    $scope.clearAllSupplier = function clearAllSupplier() {
        
        $scope.form.data.msupId = [];
        
        $scope.checkSupp = false;
        
    };
    
	$scope.htmlReady();
}]);

App.controller('reportInvoiceSummarySupplierCtrl', ['$scope', '$q', '$http', 'transformRequestAsFormPost', '$location', 'dataGrid', 'dataTransactionGrid', '$state', '$stateParams', 'apiGet', '$rootScope', '$interval', '$timeout', '$parse', function($scope, $q, $http, transformRequestAsFormPost, $location, dataGrid, dataTransactionGrid, $state, $stateParams, apiGet, $rootScope, $interval, $timeout, $parse) {
    $scope.form = {};
    $scope.form.data = {};
    
    $scope.date = new Date();
    
    $scope.temp = $location.path().replace('/', '');
    
    $scope.urls = 'api/admin/menu/' + $scope.temp;
    apiGet.loadData($scope).then(function(dataOut) {
        $scope.url = dataOut.data.menuAPI;
        
        $scope.urls = 'lang/admin/' + $scope.url + '/form';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.formLabel = dataOut;
        });

        $scope.urls = 'api/admin/' + $scope.url + 'api/Supplier';
        apiGet.loadData($scope).then(function(dataOut) {
            $scope.supplier = dataOut.data;
        });
    });
    
    $scope.toggleSupplier = function toggleSupplier(dt) {
        
        var idx = $scope.form.data.msupId.indexOf(dt);

        if (idx > -1) {
            $scope.form.data.msupId.splice(idx, 1);
        } else {
        $scope.form.data.msupId.push(dt);
        }
        
        if( !$scope.form.data.msupId.length ) {
            $scope.checkSupp = false;
        } else {
            $scope.checkSupp = true;
        }
    };
    
    $scope.checkAllSupplier = function checkAllSupplier() {
        angular.forEach($scope.supplier, function (item) {
            
            var idx = $scope.form.data.msupId.indexOf(item.msupId);

            if (idx <= -1) {
            
                $scope.form.data.msupId.push(item.msupId);
                
            }
        });
        
        $scope.checkSupp = true;
        
    };
    
    $scope.clearAllSupplier = function clearAllSupplier() {
        
        $scope.form.data.msupId = [];
        
        $scope.checkSupp = false;
        
    };
    
	$scope.htmlReady();
}]);