App.factory('isMenu', function() {
 var savedData = {}
 function set(data) {
   savedData = data;
 }
 function get() {
  return savedData;
 }

 return {
  set: set,
  get: get
 }

});

App.factory('menuContent', function() {
 var savedData = {}
 function set(data) {
   savedData = data;
 }
 function get() {
  return savedData;
 }

 return {
  set: set,
  get: get
 }

});

App.factory('transformRequestAsFormPost', function() {
    // I prepare the request data for the form post.
    function transformRequest( data, getHeaders ) {
        var headers = getHeaders();
        headers[ 'Content-Type' ] = 'application/x-www-form-urlencoded; charset=utf-8';
        return( serializeData( data ) );
    }
    // Return the factory value.
    return( transformRequest );
    // I serialize the given Object into a key-value pair string. This
    // method expects an object and will default to the toString() method.
    // --
    // NOTE: This is an atered version of the jQuery.param() method which
    // will serialize a data collection for Form posting.
    // --
    // https://github.com/jquery/jquery/blob/master/src/serialize.js#L45
    function serializeData( data ) {
        // If this is not an object, defer to native stringification.
        if ( ! angular.isObject( data ) ) {
            return( ( data == null ) ? '' : data.toString() );
        }
        var buffer = [];
        // Serialize each key in the object.
        for ( var name in data ) {
            if ( ! data.hasOwnProperty( name ) ) {
                continue;
            }
            var value = data[ name ];
            buffer.push(
                encodeURIComponent( name ) +
                "=" +
                encodeURIComponent( ( value == null ) ? '' : value )
            );
        }
        // Serialize the buffer and clean it up for transportation.
        var source = buffer
            .join( '&' )
            .replace( /%20/g, '+' )
        ;
        return( source );
    }
});

App.factory('apiDetail', ['$http','transformRequestAsFormPost','$q','$timeout', function($http, transformRequestAsFormPost, $q, $timeout){
    var me = this;
    var service = {};
    
    service.getData = function($scope) {
        var deferred = $q.defer();
        var http = $http({
            method: 'post',
            url: App.constant.apiURL + '/' + $scope.urls,
            data: $scope.form.testing
        });
        http.success(function(data, status, headers, config) {
            deferred.resolve(data);
        });
        http.error(function(data, status, headers, config) {
            deferred.reject(data);
        });
        return deferred.promise;
    };
    
    service.loadData = function($scope) {
        var deferred = $q.defer();
        	
        service.getData($scope).then(function(dataOut) {
            $scope.valData = dataOut;
            deferred.resolve(dataOut);
        });
        return deferred.promise;
    };
    return service;
}]);

App.factory('apiPostHeader', ['$http','transformRequestAsFormPost','$q','$timeout', function($http, transformRequestAsFormPost, $q, $timeout){
    var me = this;
    var service = {};
    
    service.getData = function($scope) {
        var deferred = $q.defer();
        var http = $http({
            method: 'post',
            url: App.constant.apiURL + '/' + $scope.url,
            transformRequest: transformRequestAsFormPost,
            data: $scope.form.data
        });
        http.success(function(data, status, headers, config) {
            deferred.resolve(data);
        });
        http.error(function(data, status, headers, config) {
            deferred.reject(data);
        });
        return deferred.promise;
    };
    
    service.loadData = function($scope) {
        var deferred = $q.defer();
        
        service.getData($scope).then(function(dataOut) {
            $scope.valData = dataOut;
            deferred.resolve(dataOut);
        });
        return deferred.promise;
    };
    return service;
}]);

App.factory('apiPutHeader', ['$http','transformRequestAsFormPost','$q','$timeout', function($http, transformRequestAsFormPost, $q, $timeout){
    var me = this;
    var service = {};
    
    service.getData = function($scope) {
        var deferred = $q.defer();
        var http = $http({
            method: 'put',
            url: App.constant.apiURL + '/' + $scope.url,
            transformRequest: transformRequestAsFormPost,
            data: $scope.form.data
        });
        http.success(function(data, status, headers, config) {
            deferred.resolve(data);
        });
        http.error(function(data, status, headers, config) {
            deferred.reject(data);
        });
        return deferred.promise;
    };
    
    service.loadData = function($scope) {
        var deferred = $q.defer();
        
        service.getData($scope).then(function(dataOut) {
            $scope.valData = dataOut;
            deferred.resolve(dataOut);
        });
        return deferred.promise;
    };
    return service;
}]);

App.factory('apiPostDetail', ['$http','transformRequestAsFormPost','$q','$timeout', function($http, transformRequestAsFormPost, $q, $timeout){
    var me = this;
    var service = {};
    
    service.getData = function($scope) {
        var deferred = $q.defer();
        var http = $http({
            method: 'post',
            url: App.constant.apiURL + '/' + $scope.urls,
            transformRequest: transformRequestAsFormPost,
            data: $scope.form.testing
        });
        http.success(function(data, status, headers, config) {
            deferred.resolve(data);
        });
        http.error(function(data, status, headers, config) {
            deferred.reject(data);
        });
        return deferred.promise;
    };
    
    service.loadData = function($scope) {
        var deferred = $q.defer();
        
        service.getData($scope).then(function(dataOut) {
            $scope.valData = dataOut;
            deferred.resolve(dataOut);
        });
        return deferred.promise;
    };
    return service;
}]);

App.factory('apiDeleteDetail', ['$http','transformRequestAsFormPost','$q','$timeout', function($http, transformRequestAsFormPost, $q, $timeout){
    var me = this;
    var service = {};
    
    service.getData = function($scope) {
        var deferred = $q.defer();
        var http = $http({
            method: 'delete',
            url: App.constant.apiURL + '/' + $scope.urls
        });
        http.success(function(data, status, headers, config) {
            deferred.resolve(data);
        });
        http.error(function(data, status, headers, config) {
            deferred.reject(data);
        });
        return deferred.promise;
    };
    
    service.loadData = function($scope) {
        var deferred = $q.defer();
        
        service.getData($scope).then(function(dataOut) {
            $scope.valData = dataOut;
            deferred.resolve(dataOut);
        });
        return deferred.promise;
    };
    return service;
}]);

App.factory('apiPutDetail', ['$http','transformRequestAsFormPost','$q','$timeout', function($http, transformRequestAsFormPost, $q, $timeout){
    var me = this;
    var service = {};
    
    service.getData = function($scope) {
        var deferred = $q.defer();
        var http = $http({
            method: 'put',
            url: App.constant.apiURL + '/' + $scope.urls,
            data: $scope.form.testing
        });
        http.success(function(data, status, headers, config) {
            deferred.resolve(data);
        });
        http.error(function(data, status, headers, config) {
            deferred.reject(data);
        });
        return deferred.promise;
    };
    
    service.loadData = function($scope) {
        var deferred = $q.defer();
        
        service.getData($scope).then(function(dataOut) {
            $scope.valData = dataOut;
            deferred.resolve(dataOut);
        });
        return deferred.promise;
    };
    return service;
}]);

App.factory('api', ['$http','transformRequestAsFormPost','$q','$timeout', function($http, transformRequestAsFormPost, $q, $timeout){
    var me = this;
    var service = {};
    
    service.getData = function($scope) {
        var deferred = $q.defer();
        var http = $http({
            method: 'post',
            url: App.constant.apiURL + '/' + $scope.urls,
            transformRequest: transformRequestAsFormPost,
            data: $scope.params
        });
        http.success(function(data, status, headers, config) {
            deferred.resolve(data);
        });
        http.error(function(data, status, headers, config) {
            deferred.reject(data);
        });
        return deferred.promise;
    };
    
    service.loadData = function($scope) {
        var deferred = $q.defer();
        
        service.getData($scope).then(function(dataOut) {
            $scope.valData = dataOut;
            deferred.resolve(dataOut);
        });
        return deferred.promise;
    };
    return service;
}]);

App.factory('apiGet', ['$http','transformRequestAsFormPost','$q','$timeout', function($http, transformRequestAsFormPost, $q, $timeout){
    var me = this;
    var service = {};
        
    service.getData = function($scope) {

        var deferred = $q.defer();
        var http = $http({
            method: 'get',
            url: App.constant.apiURL + '/'+ $scope.urls,
            transformRequest: transformRequestAsFormPost
        });
        http.success(function(data, status, headers, config) {
            deferred.resolve(data);
        });
        http.error(function(data, status, headers, config) {
            deferred.reject(data);
        });
        return deferred.promise;
    };
    
    service.loadData = function($scope) {
        var deferred = $q.defer();
        
        service.getData($scope).then(function(dataOut) {
            $scope.valData = dataOut;
            deferred.resolve(dataOut);
        });
        return deferred.promise;
    };
    return service;
}]);

App.factory('dataGrid', ['$http','transformRequestAsFormPost','$q','$timeout', function($http, transformRequestAsFormPost, $q, $timeout) {
    var me = this;
    var service = {};
    service.getDetail = function($scope, id){
        var http = $http({
            method: 'get',
            url: App.constant.apiURL + '/api/'+ $scope.url + '/' + id
        });
        http.success(function(data){
            if (data.status.error == '0'){
                $scope.form.data = data.data;
                if (data.data.detail) {
                    $scope.form.data.detail = angular.fromJson(data.data.detail);
                }
                $scope.form.data.load = true;
            };
        });
    };
    service.deleteDetail = function($scope, id){
        
        delete $scope.params.limit;
        
        var d = $q.defer();
        angular.forEach($scope.gridData.data, function(value, key){
            if (value.id == id){
                value.deleting = true;
            }
        });
        var http = $http({
            method: 'delete',
            url: App.constant.apiURL + '/api/'+ $scope.url + '/' + id
        });
        http.success(function(data){
            if (data.status.error == '0'){
                var pageToLoad = $scope.gridData.pagination.page;
                if (($scope.gridData.pagination.total-1) / $scope.gridData.pagination.itemPerPage == ($scope.gridData.pagination.totalPage)-1){
                    pageToLoad = $scope.gridData.pagination.page-1;
                }
                $scope.params.page = pageToLoad;
                $scope.loadData($scope);
                d.resolve();
            };
        });
        return d.promise;
    };
    service.saveData = function($scope, id){
        var option = {
            method: 'post',
            url: App.constant.apiURL + '/api/'+ $scope.url,
            transformRequest: transformRequestAsFormPost,
            data: $scope.form.data
        };
        var pageToLoad;
        if ($scope.form.data.load){
            option.method = 'put';
            option.url = App.constant.apiURL + '/api/'+ $scope.url + '/' + id;
            delete $scope.form.data.load;
        }
        var http = $http(option);
        http.success(function(data){
            if (data.status.error == '0'){
                $scope.form.message = data.status.message;
                $timeout(function(){
                    delete $scope.form.message;
                }, 2000);
                if ($scope.form.data.load){
                    pageToLoad = $scope.gridData.pagination.page;
                } else {
                    if ($scope.gridData.pagination.total / $scope.gridData.pagination.itemPerPage == $scope.gridData.pagination.totalPage){
                        pageToLoad = $scope.gridData.pagination.totalPage+1;
                    } else {
                        pageToLoad = $scope.gridData.pagination.totalPage;		    			
                    }	    			
                }
                $scope.form.data = {};
                if ($scope.form.detail) {
                    if ($scope.form.detail.load) {
                        $scope.form.data = $scope.form.detail;
                        $scope.form.data.load = true;

                        service.saveDataJSON($scope, id).then(function(dataOut) {
                            $scope.form.data = {};

                            $scope.params.page = pageToLoad;
                            $scope.loadData($scope);
                        });
                    } else {
                        $scope.params.page = pageToLoad;
                        $scope.loadData($scope);
                    }
                }

                delete $scope.form.detail;
            }
        });

    };
    service.saveDataJSON = function($scope, id){
        var option = {
            method: 'post',
            url: App.constant.apiURL + '/api/'+ $scope.url,
            data: $scope.form.data
        };
        var pageToLoad;
        if ($scope.form.data.load){
            option.method = 'put';
            option.url = App.constant.apiURL + '/api/'+ $scope.url + '/' + id;
            delete $scope.form.data.load;
        }
        var http = $http(option);
        http.success(function(data){
            if (data.status.error == '0'){
                $scope.form.message = data.status.message;
                $timeout(function(){
                    delete $scope.form.message;
                }, 2000);
                if ($scope.form.data.load){
                    pageToLoad = $scope.gridData.pagination.page;
                } else {
                    if ($scope.gridData.pagination.total / $scope.gridData.pagination.itemPerPage == $scope.gridData.pagination.totalPage){
                        pageToLoad = $scope.gridData.pagination.totalPage+1;
                    } else {
                        pageToLoad = $scope.gridData.pagination.totalPage;		    			
                    }	    			
                }
                $scope.form.data = {};	
                
            }
        });

    };
    service.doGrid = function($scope, $modal){
        $scope.params = {page:1};
        $scope.loadData = function($scope){	
            service.getData($scope).then(function(dataOut){
                $scope.gridData = dataOut;
                $scope.$broadcast('gridDataLoaded');
            });
            if (!$scope.gridHeader){		
                service.getHeader($scope).then(function(dataOut){
                    $scope.gridHeader = dataOut;
                    $scope.$broadcast('gridHeaderLoaded');
                });
            }
	        if (!$scope.formLabel){	
                service.getLabel($scope).then(function(dataOut){
                    $scope.formLabel = dataOut;
                    $scope.$broadcast('formLabelLoaded');
                });
            }
            
        };
        $scope.loadData($scope);
        $scope.loadDetail = function(id){
            
            if (id) {
                if ($scope.form.gridEditor) $scope.form.gridEditor.$setDirty();
                var me = this;
    //            angular.forEach($scope.gridData.data, function(value, key){console.log(value[0]);
    //                if (value.id == id){
    //                    value.selected = true;
    //                } else {
    //                    value.selected = false;
    //                }
    //            });
                service.getDetail($scope, id);
            } else {
                alert('Failed retrieved data, please try again!');
                $scope.loadData($scope);
            }
        };
        $scope.delete = function(id){
            service.deleteDetail($scope, id).then(function(){
                $scope.form.data = {};
            });
        };
        $scope.reset = function(){
            $scope.form.gridEditor.$setPristine();
            $scope.form.data = {};
        };
        $scope.resetItem = function(){
            $scope.form.itemForm.$setPristine();
            delete $scope.form.detail;
            $scope.form.detail = {};
        };
        $scope.setFilter = function(){
            var f = this;		
            angular.forEach(f.$parent.gridHeader.column, function(value, key) {
                if (value.id != f.column.id && value.filter) delete value.filter;
            });
            if (f.column.filter.length > 0){
                $scope.params.page = 1;
                $scope.params.searchType = 2;
                $scope.params.searchText = f.column.filter;
                $scope.params.searchCol = f.column.id;	
                $scope.loadData($scope);
            } else {
                delete $scope.params.searchType;
                delete $scope.params.searchText;
                delete $scope.params.searchCol;			
                $scope.loadData($scope);
            }
            delete f.column.filter;
            //delete f.column.id;
        };
        $scope.changePage = function(page){
            $scope.params.page = page;
            $scope.loadData($scope);
        };
        $scope.sort = function(){
            var s = this;
            angular.forEach(s.$parent.gridHeader.column, function(value, key) {
                if (value.id != s.column.id && value.sort) delete value.sort;
            });
            if (s.column.sort&&s.column.sort == 1){
                s.column.sort = 2;
            } else {
                s.column.sort = 1;		
            }
            $scope.params.sort = s.column.id;
            $scope.params.order = s.column.sort;
            $scope.loadData($scope);
        };
        $scope.form = {
            submit : function(){
                service.saveData($scope);
            }
        };
    };
    service.getHeader = function($scope){
        var deferred = $q.defer();
        var http = $http({
            method: 'post',
            url: App.constant.apiURL + '/lang/'+ $scope.url +'/grid' 
        });
        http.success(function(data, status, headers, config) {
            if (data&&data.status&&data.status.error == '0'){
                deferred.resolve(data);
            } else {
                console.log('Something wrong with header data', data);
            }
        });
        http.error(function(data, status, headers, config) {
            deferred.reject(data);
        });
        return deferred.promise;
    };
    service.getLabel = function($scope){
        var deferred = $q.defer();
        var http = $http({
            method: 'post',
            url: App.constant.apiURL + '/lang/'+ $scope.url +'/form' 
        });
        http.success(function(data, status, headers, config) {
            if (data&&data.status&&data.status.error == '0'){
                deferred.resolve(data);
            } else {
                console.log('Something wrong with label data', data);
            }
        });
        http.error(function(data, status, headers, config) {
            deferred.reject(data);
        });
        return deferred.promise;
    };
    service.getData = function($scope){
        $scope.dataLoading = true;
        var deferred = $q.defer();
        var http = $http({
            method: 'get',
            url: App.constant.apiURL + '/api/'+ $scope.url,
            params: $scope.params
        });
        http.success(function(data, status, headers, config) {
            $scope.dataLoading = false;
            if (data&&data.status&&data.status.error == '0'){
            
                var totalPage = data.pagination.totalPage;
                //data.params = params;
                data.pagingPrev = [];
                data.pagingNext = [];
                data.pagingPrev.push({	
                    page : 1,
                    value : '<<',
                    active : false
                });
                data.pagingPrev.push({	
                    page : data.pagination.page-1,
                    value : '<',
                    active : false
                });
                if (data.pagination.page != 1) data.pagingPrev[0].active = true;
                if (data.pagination.page != 1) data.pagingPrev[1].active = true;
                /*for (var i=1; i<=totalPage; i++){
                    var c = {page:i,value:i,active:true};
                    if (data.pagination.page == i) c.active = false;
                    data.paging.push(c);
                };*/
                data.pagingNext.push({	
                    page : data.pagination.page+1,
                    value : '>',
                    active : true
                });
                data.pagingNext.push({
                    page : totalPage,
                    value : '>>',
                    active : true
                });
                if (data.pagination.page == totalPage) data.pagingNext[0].active = false;
                if (data.pagination.page == totalPage) data.pagingNext[1].active = false;
                //data.loadPage = function(data){
                //	console.log(this,data);
                //};
                deferred.resolve(data);
            } else {
                console.log('Something wrong with header data', data);
            }
        });
        http.error(function(data, status, headers, config) {
            $scope.dataLoading = false;
            deferred.reject(data);
        });
        return deferred.promise;
    };
    return service;
}]);

App.factory('dataTransactionGrid', ['$http','transformRequestAsFormPost','$q','$timeout', function($http, transformRequestAsFormPost, $q, $timeout) {
    var me = this;
    var service = {};
    service.getDetail = function($scope, id){
        var http = $http({
            method: 'get',
            url: App.constant.apiURL + '/api/'+ $scope.url + '/header/' + id
        });
        http.success(function(data){
            if (data.status.error == '0'){
                $scope.form.data = data.data;
                if (data.data.detail) {
                    $scope.form.data.detail = angular.fromJson(data.data.detail);
                }
                $scope.form.data.load = true;
            };
        });
    };
    service.deleteDetail = function($scope, id){
        
        delete $scope.params.limit;
        
        var d = $q.defer();
        angular.forEach($scope.gridData.data, function(value, key){
            if (value.id == id){
                value.deleting = true;
            }
        });
        var http = $http({
            method: 'delete',
            url: App.constant.apiURL + '/api/'+ $scope.url + '/' + id
        });
        http.success(function(data){
            if (data.status.error == '0'){
                var pageToLoad = $scope.gridData.pagination.page;
                if (($scope.gridData.pagination.total-1) / $scope.gridData.pagination.itemPerPage == ($scope.gridData.pagination.totalPage)-1){
                    pageToLoad = $scope.gridData.pagination.page-1;
                }
                $scope.params.page = pageToLoad;
                $scope.loadData($scope);
                d.resolve();
            };
        });
        return d.promise;
    };
    service.saveData = function($scope, id){
        var option = {
            method: 'post',
            url: App.constant.apiURL + '/api/'+ $scope.url + '/header',
            transformRequest: transformRequestAsFormPost,
            data: $scope.form.data
        };
        var pageToLoad;
        if ($scope.form.data.load){
            option.method = 'put';
            option.url = App.constant.apiURL + '/api/'+ $scope.url + '/header/' + id;
            delete $scope.form.data.load;
        }
        var http = $http(option);
        http.success(function(data){
            if (data.status.error == '0'){
                $scope.form.message = data.status.message;
                $timeout(function(){
                    delete $scope.form.message;
                }, 2000);
                if ($scope.form.data.load){
                    pageToLoad = $scope.gridData.pagination.page;
                } else {
                    if ($scope.gridData.pagination.total / $scope.gridData.pagination.itemPerPage == $scope.gridData.pagination.totalPage){
                        pageToLoad = $scope.gridData.pagination.totalPage+1;
                    } else {
                        pageToLoad = $scope.gridData.pagination.totalPage;		    			
                    }	    			
                }
                $scope.form.data = {};
                if ($scope.form.detail) {
                    if ($scope.form.detail.load) {
                        $scope.form.data = $scope.form.detail;
                        $scope.form.data.load = true;

                        service.saveDataJSON($scope, id).then(function(dataOut) {
                            $scope.form.data = {};

                            $scope.params.page = pageToLoad;
                            $scope.loadData($scope);
                        });
                    } else {
                        $scope.params.page = pageToLoad;
                        $scope.loadData($scope);
                    }

                    delete $scope.form.detail;
                }
//                $scope.params.page = pageToLoad;
//                $scope.loadData($scope);
            }
        });

    };
    service.saveDataJSON = function($scope, id){
        var option = {
            method: 'post',
            url: App.constant.apiURL + '/api/'+ $scope.url,
            data: $scope.form.data
        };
        var pageToLoad;
        if ($scope.form.data.load){
            option.method = 'put';
            option.url = App.constant.apiURL + '/api/'+ $scope.url + '/' + id;
            delete $scope.form.data.load;
        }
        var http = $http(option);
        http.success(function(data){
            if (data.status.error == '0'){
                $scope.form.message = data.status.message;
                $timeout(function(){
                    delete $scope.form.message;
                }, 2000);
                if ($scope.form.data.load){
                    pageToLoad = $scope.gridData.pagination.page;
                } else {
                    if ($scope.gridData.pagination.total / $scope.gridData.pagination.itemPerPage == $scope.gridData.pagination.totalPage){
                        pageToLoad = $scope.gridData.pagination.totalPage+1;
                    } else {
                        pageToLoad = $scope.gridData.pagination.totalPage;		    			
                    }	    			
                }
                $scope.form.data = {};	
                
            }
        });

    };
    service.doGrid = function($scope, $modal){
        $scope.params = {page:1};
        $scope.loadData = function($scope){	
            service.getDataHeader($scope).then(function(dataOut){
                $scope.gridData = dataOut;
                $scope.$broadcast('gridDataLoaded');
            });
            if ($scope.gridData){
                service.getDataDetail($scope).then(function(dataOut){
                    $scope.gridData.data.detail = dataOut;
                    $scope.$broadcast('gridDataLoaded');
                });
            }
            if (!$scope.gridHeader){		
                service.getHeader($scope).then(function(dataOut){
                    $scope.gridHeader = dataOut;
                    $scope.$broadcast('gridHeaderLoaded');
                });
            }
	        if (!$scope.formLabel){	
                service.getLabel($scope).then(function(dataOut){
                    $scope.formLabel = dataOut;
                    $scope.$broadcast('formLabelLoaded');
                });
            }
            
        };
        $scope.loadData($scope);
        $scope.loadDetail = function(id){
            
            if (id) {
                if ($scope.form.gridEditor) $scope.form.gridEditor.$setDirty();
                var me = this;
    //            angular.forEach($scope.gridData.data, function(value, key){console.log(value[0]);
    //                if (value.id == id){
    //                    value.selected = true;
    //                } else {
    //                    value.selected = false;
    //                }
    //            });
                //service.getDetail($scope, id);
                service.getDetailTransaction($scope, id);
//                service.getLabel($scope).then(function(dataOut){
//                    $scope.formLabel = dataOut;
//                    $scope.$broadcast('formLabelLoaded');
//                });
            } else {
                alert('Failed retrieved data, please try again!');
                $scope.loadData($scope);
            }
        };
        $scope.delete = function(id){
            service.deleteDetail($scope, id).then(function(){
                $scope.form.data = {};
            });
        };
        $scope.reset = function(){
            $scope.form.gridEditor.$setPristine();
            $scope.form.data = {};
        };
        $scope.resetItem = function(){
            $scope.form.itemForm.$setPristine();
            delete $scope.form.detail;
            $scope.form.detail = {};
        };
        $scope.setFilter = function(){
            var f = this;		
            angular.forEach(f.$parent.gridHeader.column, function(value, key) {
                if (value.id != f.column.id && value.filter) delete value.filter;
            });
            if (f.column.filter.length > 0){
                $scope.params.page = 1;
                $scope.params.searchType = 2;
                $scope.params.searchText = f.column.filter;
                $scope.params.searchCol = f.column.id;	
                $scope.loadData($scope);
            } else {
                delete $scope.params.searchType;
                delete $scope.params.searchText;
                delete $scope.params.searchCol;			
                $scope.loadData($scope);
            }
            delete f.column.filter;
            //delete f.column.id;
        };
        $scope.changePage = function(page){
            $scope.params.page = page;
            $scope.loadData($scope);
        };
        $scope.sort = function(){
            var s = this;
            angular.forEach(s.$parent.gridHeader.column, function(value, key) {
                if (value.id != s.column.id && value.sort) delete value.sort;
            });
            if (s.column.sort&&s.column.sort == 1){
                s.column.sort = 2;
            } else {
                s.column.sort = 1;		
            }
            $scope.params.sort = s.column.id;
            $scope.params.order = s.column.sort;
            $scope.loadData($scope);
        };
        $scope.form = {
            submit : function(){
                service.saveData($scope);
            }
        };
    };
    service.getHeader = function($scope){
        var deferred = $q.defer();
        var http = $http({
            method: 'post',
            url: App.constant.apiURL + '/lang/'+ $scope.url +'/grid' 
        });
        http.success(function(data, status, headers, config) {
            if (data&&data.status&&data.status.error == '0'){
                deferred.resolve(data);
            } else {
                console.log('Something wrong with header data', data);
            }
        });
        http.error(function(data, status, headers, config) {
            deferred.reject(data);
        });
        return deferred.promise;
    };
    service.getLabel = function($scope){
        var deferred = $q.defer();
        var http = $http({
            method: 'post',
            url: App.constant.apiURL + '/lang/'+ $scope.url +'/form' 
        });
        http.success(function(data, status, headers, config) {
            if (data&&data.status&&data.status.error == '0'){
                deferred.resolve(data);
            } else {
                console.log('Something wrong with label data', data);
            }
        });
        http.error(function(data, status, headers, config) {
            deferred.reject(data);
        });
        return deferred.promise;
    };
    service.getData = function($scope){
        $scope.dataLoading = true;
        var deferred = $q.defer();
        var http = $http({
            method: 'get',
            url: App.constant.apiURL + '/api/'+ $scope.url,
            params: $scope.params
        });
        http.success(function(data, status, headers, config) {
            $scope.dataLoading = false;
            if (data&&data.status&&data.status.error == '0'){
            
                var totalPage = data.pagination.totalPage;
                //data.params = params;
                data.pagingPrev = [];
                data.pagingNext = [];
                data.pagingPrev.push({	
                    page : 1,
                    value : '<<',
                    active : false
                });
                data.pagingPrev.push({	
                    page : data.pagination.page-1,
                    value : '<',
                    active : false
                });
                if (data.pagination.page != 1) data.pagingPrev[0].active = true;
                if (data.pagination.page != 1) data.pagingPrev[1].active = true;
                /*for (var i=1; i<=totalPage; i++){
                    var c = {page:i,value:i,active:true};
                    if (data.pagination.page == i) c.active = false;
                    data.paging.push(c);
                };*/
                data.pagingNext.push({	
                    page : data.pagination.page+1,
                    value : '>',
                    active : true
                });
                data.pagingNext.push({
                    page : totalPage,
                    value : '>>',
                    active : true
                });
                if (data.pagination.page == totalPage) data.pagingNext[0].active = false;
                if (data.pagination.page == totalPage) data.pagingNext[1].active = false;
                //data.loadPage = function(data){
                //	console.log(this,data);
                //};
                deferred.resolve(data);
            } else {
                console.log('Something wrong with header data', data);
            }
        });
        http.error(function(data, status, headers, config) {
            $scope.dataLoading = false;
            deferred.reject(data);
        });
        return deferred.promise;
    };
    service.getDataHeader = function($scope){
        $scope.dataLoading = true;
        var deferred = $q.defer();
        var http = $http({
            method: 'get',
            url: App.constant.apiURL + '/api/'+ $scope.url + '/header',
            params: $scope.params
        });
        http.success(function(data, status, headers, config) {
            $scope.dataLoading = false;
            if (data&&data.status&&data.status.error == '0'){
            
                var totalPage = data.pagination.totalPage;
                //data.params = params;
                data.pagingPrev = [];
                data.pagingNext = [];
                data.pagingPrev.push({	
                    page : 1,
                    value : '<<',
                    active : false
                });
                data.pagingPrev.push({	
                    page : data.pagination.page-1,
                    value : '<',
                    active : false
                });
                if (data.pagination.page != 1) data.pagingPrev[0].active = true;
                if (data.pagination.page != 1) data.pagingPrev[1].active = true;
                /*for (var i=1; i<=totalPage; i++){
                    var c = {page:i,value:i,active:true};
                    if (data.pagination.page == i) c.active = false;
                    data.paging.push(c);
                };*/
                data.pagingNext.push({	
                    page : data.pagination.page+1,
                    value : '>',
                    active : true
                });
                data.pagingNext.push({
                    page : totalPage,
                    value : '>>',
                    active : true
                });
                if (data.pagination.page == totalPage) data.pagingNext[0].active = false;
                if (data.pagination.page == totalPage) data.pagingNext[1].active = false;
                //data.loadPage = function(data){
                //	console.log(this,data);
                //};
                deferred.resolve(data);
            } else {
                console.log('Something wrong with header data', data);
            }
        });
        http.error(function(data, status, headers, config) {
            $scope.dataLoading = false;
            deferred.reject(data);
        });
        return deferred.promise;
    };
    service.getDataDetail = function($scope){
        $scope.dataLoading = true;
        var deferred = $q.defer();
        var http = $http({
            method: 'get',
            url: App.constant.apiURL + '/api/'+ $scope.url + '/detail',
            params: $scope.params
        });
        http.success(function(data, status, headers, config) {
            $scope.dataLoading = false;
            if (data&&data.status&&data.status.error == '0'){
            
                var totalPage = data.pagination.totalPage;
                //data.params = params;
                data.pagingPrev = [];
                data.pagingNext = [];
                data.pagingPrev.push({	
                    page : 1,
                    value : '<<',
                    active : false
                });
                data.pagingPrev.push({	
                    page : data.pagination.page-1,
                    value : '<',
                    active : false
                });
                if (data.pagination.page != 1) data.pagingPrev[0].active = true;
                if (data.pagination.page != 1) data.pagingPrev[1].active = true;
                /*for (var i=1; i<=totalPage; i++){
                    var c = {page:i,value:i,active:true};
                    if (data.pagination.page == i) c.active = false;
                    data.paging.push(c);
                };*/
                data.pagingNext.push({	
                    page : data.pagination.page+1,
                    value : '>',
                    active : true
                });
                data.pagingNext.push({
                    page : totalPage,
                    value : '>>',
                    active : true
                });
                if (data.pagination.page == totalPage) data.pagingNext[0].active = false;
                if (data.pagination.page == totalPage) data.pagingNext[1].active = false;
                //data.loadPage = function(data){
                //	console.log(this,data);
                //};
                deferred.resolve(data);
            } else {
                console.log('Something wrong with header data', data);
            }
        });
        http.error(function(data, status, headers, config) {
            $scope.dataLoading = false;
            deferred.reject(data);
        });
        return deferred.promise;
    };
    service.getDetailTransaction = function($scope, id){
        var http = $http({
            method: 'get',
            url: App.constant.apiURL + '/api/'+ $scope.url + '/header/' + id
        });
        http.success(function(data){
            if (data.status.error == '0'){
                $scope.form.data = data.data;
                $scope.form.data.load = true;
        
                if ($scope.form.data) {
                    var http = $http({
                        method: 'get',
                        url: App.constant.apiURL + '/api/'+ $scope.url + '/detail?headerId=' + id
                    });
                    http.success(function(data){
                        if (data.status.error == '0'){
                            $scope.form.data.detail = angular.fromJson(data.data);
                            $scope.form.data.load = true;
                        };
                    });
                }
            };
        });
    };
    return service;
}]);