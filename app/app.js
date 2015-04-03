'use strict';
var App = angular.module('exoduz', ['seo', 'ui.router', 'ngTouch', 'ngSanitize', 'ui.bootstrap', 'ui.mask'], function() {
	FastClick.attach(document.body);
//	delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

App.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
    $locationProvider.hashPrefix('!');
    
    $stateProvider
        .state('index', {
            url: "/index",
            templateUrl: "app/index/index.html",
            controller: "indexCtrl"
        })
    
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "app/dashboard/index.html"
        })
// ###########################       
//      LOGIN
// ###########################
        .state('login', {
            url: "/login",
            templateUrl: "app/login/index.html",
            controller: "loginCtrl"
        })
        .state('logout', {
            url: "/logout",
            controller: "logoutCtrl"
        })
// ###########################       
//      SETUP
// ###########################
        .state('master_company', {
            url: "/master_company",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_menu', {
            url: "/master_menu",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_user', {
            url: "/master_user",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_role', {
            url: "/master_role",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
// ###########################       
//      MASTER
// ########################### 
        .state('master_supplier', {
            url: "/master_supplier",
            templateUrl: "app/list/index.html",
            controller: "listCtrl" 
        })
    
        .state('master_warehouse', {
            url: "/master_warehouse",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_city', {
            url: "/master_city",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_province', {
            url: "/master_province",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_regency', {
            url: "/master_regency",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_reason_transfer', {
            url: "/master_reason_transfer",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_brand', {
            url: "/master_brand",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_color', {
            url: "/master_color",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_branch', {
            url: "/master_branch",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_employee_detail', {
            url: "/master_employee_detail",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_employee_status', {
            url: "/master_employee_status",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_store', {
            url: "/master_store",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_purchase_type', {
            url: "/master_purchase_type",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_payment_type', {
            url: "/master_payment_type",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_bank', {
            url: "/master_bank",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_customer', {
            url: "/master_customer",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_salesman', {
            url: "/master_salesman",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_unit', {
            url: "/master_unit",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_sales_order_type', {
            url: "/master_sales_order_type",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_division', {
            url: "/master_division",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_size', {
            url: "/master_size",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_item', {
            url: "/master_item",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_item_location', {
            url: "/master_item_location",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_item_others', {
            url: "/master_item_others",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_item_category', {
            url: "/master_item_category",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_item_sub_category', {
            url: "/master_item_sub_category",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_vehicle', {
            url: "/master_vehicle",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_driver', {
            url: "/master_driver",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_journal_type', {
            url: "/master_journal_type",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_account_payable_type', {
            url: "/master_account_payable_type",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_account_receivable_type', {
            url: "/master_account_receivable_type",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_bank_account', {
            url: "/master_bank_account",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_chart_of_accounts', {
            url: "/master_chart_of_accounts",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_group_account', {
            url: "/master_group_account",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_reason_return_sales_order', {
            url: "/master_reason_return_sales_order",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
        .state('master_reason_return_purchase_order', {
            url: "/master_reason_return_purchase_order",
            templateUrl: "app/list/index.html",
            controller: "listCtrl"
        })
    
// ###########################       
//      TRANSACTION
// ########################### 
    
        .state('purchase_list', {
            url: "/purchase_list",
            templateUrl: "app/list/index_transaction.html",
            controller: "listCtrl"
        })
    
        .state('purchase_approval', {
            url: "/purchase_approval",
            templateUrl: "app/list/index_transaction.html",
            controller: "listCtrl"
        })
    
        .state('return_purchase_order', {
            url: "/return_purchase_order",
            templateUrl: "app/list/index_transaction.html",
            controller: "listCtrl"
        })
    
        .state('invoice', {
            url: "/invoice",
            templateUrl: "app/list/index_transaction.html",
            controller: "listCtrl"
        })
    
        .state('return', {
            url: "/return",
            templateUrl: "app/list/index_transaction.html",
            controller: "listCtrl"
        })
    
        .state('invoice_return', {
            url: "/invoice_return",
            templateUrl: "app/list/index_transaction.html",
            controller: "listCtrl"
        })
    
        .state('sales_order_list', {
            url: "/sales_order_list",
            templateUrl: "app/list/index_transaction.html",
            controller: "listCtrl"
        })
    
        .state('sales_order_approval', {
            url: "/sales_order_approval",
            templateUrl: "app/list/index_transaction.html",
            controller: "listCtrl"
        })
    
        .state('return_sales_order', {
            url: "/return_sales_order",
            templateUrl: "app/list/index_transaction.html",
            controller: "listCtrl"
        })
    
        .state('account_receivable', {
            url: "/account_receivable",
            templateUrl: "app/list/index_transaction.html",
            controller: "listCtrl"
        })
    
        .state('account_payable', {
            url: "/account_payable",
            templateUrl: "app/list/index_transaction.html",
            controller: "listCtrl"
        })
    
        .state('journal', {
            url: "/journal",
            templateUrl: "app/list/index_transaction.html",
            controller: "listCtrl"
        })
    
        .state('billing', {
            url: "/billing",
            templateUrl: "app/list/index_transaction.html",
            controller: "listCtrl"
        })
    
// ###########################       
//      WAREHOUSE
// ########################### 
    
        .state('storing', {
            url: "/storing",
            templateUrl: "app/list/index_transaction.html",
            controller: "listCtrl"
        })
    
        .state('receive', {
            url: "/receive",
            templateUrl: "app/list/index_transaction.html",
            controller: "listCtrl"
        }) 
    
        .state('receive_by_warehouse', {
            url: "/receive_by_warehouse",
            templateUrl: "app/list/index_receive_ipad.html",
            controller: "listCtrl"
        }) 
    
        .state('transfer', {
            url: "/transfer",
            templateUrl: "app/list/index_transaction.html",
            controller: "listCtrl"
        })
    
        .state('packing', {
            url: "/packing",
            templateUrl: "app/list/index_transaction.html",
            controller: "listCtrl"
        })
    
        .state('picking', {
            url: "/picking",
            templateUrl: "app/list/index_transaction.html",
            controller: "listCtrl"
        })
    
// ###########################       
//      SELLING
// ########################### 
    
        .state('selling_order', {
            url: "/selling_order",
            templateUrl: "app/list/index_selling_order.html",
            controller: "listCtrl"
        })
    
        .state('damage_item', {
            url: "/damage_item",
            templateUrl: "app/list/index_transaction.html",
            controller: "listCtrl"
        })
    
// ###########################       
//      REPORT
// ###########################
    
        .state('report_stock_by_supplier', {
            url: "/report_stock_by_supplier",
            templateUrl: "app/report/report_stock_by_supplier.html",
            controller: "reportStockSupplierCtrl"
        })
    
        .state('report_stock_by_category', {
            url: "/report_stock_by_category",
            templateUrl: "app/report/report_stock_by_category.html",
            controller: "reportStockCategoryCtrl"
        })
    
        .state('report_stock_all', {
            url: "/report_stock_all",
            templateUrl: "app/report/report_stock_all.html",
            controller: "reportStockAllCtrl"
        })
    
        .state('report_purchase_order', {
            url: "/report_purchase_order",
            templateUrl: "app/report/report_purchase_order.html",
            controller: "reportPOCtrl"
        })
    
        .state('report_purchase_order_by_item', {
            url: "/report_purchase_order_by_item",
            templateUrl: "app/report/report_purchase_order_by_item.html",
            controller: "reportPOItemCtrl"
        })
    
        .state('report_purchase_order_by_supplier', {
            url: "/report_purchase_order_by_supplier",
            templateUrl: "app/report/report_purchase_order_by_supplier.html",
            controller: "reportPOSupplierCtrl"
        })
    
        .state('report_purchase_order_by_supplier_detail', {
            url: "/report_purchase_order_by_supplier_detail",
            templateUrl: "app/report/report_purchase_order_by_supplier_detail.html",
            controller: "reportPOSupplierDetailCtrl"
        })
    
        .state('report_purchase_order_by_supplier_summary', {
            url: "/report_purchase_order_by_supplier_summary",
            templateUrl: "app/report/report_purchase_order_by_supplier_summary.html",
            controller: "reportPOSupplierSummaryCtrl"
        })
    
        .state('report_receive_by_supplier', {
            url: "/report_receive_by_supplier",
            templateUrl: "app/report/report_receive_by_supplier.html",
            controller: "reportReceiveSupplierCtrl"
        })
    
        .state('report_receive_by_pending_per_supplier', {
            url: "/report_receive_by_pending_per_supplier",
            templateUrl: "app/report/report_receive_by_pending_per_supplier.html",
            controller: "reportReceivePendingSupplierCtrl"
        })
    
        .state('report_receive_by_over_qty', {
            url: "/report_receive_by_over_qty",
            templateUrl: "app/report/report_receive_by_over_qty.html",
            controller: "reportReceiveOverQtyCtrl"
        })
    
        .state('report_receive_by_new_item', {
            url: "/report_receive_by_new_item",
            templateUrl: "app/report/report_receive_by_new_item.html",
            controller: "reportReceiveNewItemCtrl"
        })
    
        .state('report_storing_by_item', {
            url: "/report_storing_by_item",
            templateUrl: "app/report/report_storing_by_item.html",
            controller: "reportStoringItemCtrl"
        })
    
        .state('report_pending_storing', {
            url: "/report_pending_storing",
            templateUrl: "app/report/report_pending_storing.html",
            controller: "reportPendingStoringCtrl"
        })
    
        .state('report_storing_by_receive', {
            url: "/report_storing_by_receive",
            templateUrl: "app/report/report_storing_by_receive.html",
            controller: "reportStoringReceiveCtrl"
        })
    
        .state('report_invoice_by_supplier', {
            url: "/report_invoice_by_supplier",
            templateUrl: "app/report/report_invoice_by_supplier.html",
            controller: "reportInvoiceSupplierCtrl"
        })
    
        .state('report_invoice_summary_supplier', {
            url: "/report_invoice_summary_supplier",
            templateUrl: "app/report/report_invoice_summary_supplier.html",
            controller: "reportInvoiceSummarySupplierCtrl"
        })
    
        $urlRouterProvider.otherwise("/index");
}]);

App.config(function (datepickerConfig) {
    datepickerConfig.showWeeks = false;
});

App.run(function($rootScope){
  //Just add a reference to some utility methods in rootscope.
  $rootScope.Utils = {
     keys : Object.keys
  }
});

App.run(function ($state,$rootScope) {
    $rootScope.$state = $state;
});

App.directive('formatteddate', function ($filter) {
    return {
        link: function (scope, element, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                return $filter('date')(viewValue,'dd.MM.yyyy');
            });            
        },
        restrict: 'A',
        require: 'ngModel'
    };
});

App.directive('body', ['$document', '$window', function ($document, $window) {
    return {
        link: {
            post: function (scope, element, attrs, controller) {
                
                var onClick = function (event) {
                    
                    var isChild = element[0].contains(event.target);
                    var isSelf = element[0] == event.target;
                    var isInside = isSelf || isChild;
                    if (!isInside) {
                        scope.$apply(attrs.body);
                    } 
                }
                angular.element($document).bind('click', onClick);
            }
            
        }
    }
}]);

App.directive('formTemplate', function() {
    return {
       restrict: 'E',
       link: function(scope, element, attrs) {
           scope.contentUrl = 'app/form/' + attrs.ver + '.html';
           scope.contentCtrl = attrs.ver + 'Ctrl';
           attrs.$observe('ver',function(v) {
               scope.contentUrl = 'app/form/' + v + '.html';
               scope.contentCtrl = v + 'Ctrl';
           });
       },
       template: '<div ng-include="contentUrl"></div>'
   }
});

var secretEmptyKey = '`';
App.directive('emptyTypeahead', function () {
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, modelCtrl) {
      // this parser run before typeahead's parser
      modelCtrl.$parsers.unshift(function (inputValue) {

        var value = (inputValue ? inputValue : secretEmptyKey); // replace empty string with secretEmptyKey to bypass typeahead-min-length check
        modelCtrl.$viewValue = value; // this $viewValue must match the inputValue pass to typehead directive
        return value;
      });

      // this parser run after typeahead's parser
      modelCtrl.$parsers.push(function (inputValue) {
          
        if (angular.isUndefined(inputValue)) {
            
            inputValue = '';
        } else {
            inputValue === secretEmptyKey ? '' : inputValue;
        }
        return inputValue;
      });
    }
  }
});

App.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});

App.directive('discountValidation', function(){
   return {
     require: 'ngModel',
     link: function(scope, element, attrs, modelCtrl) {
         
       modelCtrl.$parsers.push(function (inputValue) {

         var transformedInput = inputValue.toLowerCase().replace(/[^+.\d]/g, ''); 

         if (transformedInput!=inputValue) {
           modelCtrl.$setViewValue(transformedInput);
           modelCtrl.$render();
         }         

         return transformedInput;         
       });
     }
   };
});

App.directive('numberValidation', function(){
   return {
     require: 'ngModel',
     link: function(scope, element, attrs, modelCtrl) {
         
       modelCtrl.$parsers.push(function (inputValue) {

         var transformedInput = modelCtrl.$viewValue.toLowerCase().replace(/[^\d]/g, ''); 

         if (transformedInput!=modelCtrl.$viewValue) {
           modelCtrl.$setViewValue(transformedInput);
           modelCtrl.$render();
         }         

         return transformedInput;         
       });
     }
   };
});

App.directive('resizer', function($document) {

    return function($scope, $element, $attrs) {
        var startX, startY, initialMouseX, initialMouseY;
        $element.on('mousedown', function(event) {
            event.preventDefault();
            
            startX = $element.prop('offsetLeft');
            startY = $element.prop('offsetTop');
            initialMouseX = event.clientX;
            initialMouseY = event.clientY;
            
            $document.on('mousemove', mousemove);
            $document.on('mouseup', mouseup);
        });

        function mousemove(event) {
            var dx = event.clientX - initialMouseX;
            var dy = event.clientY - initialMouseY;
            
            if ($attrs.resizer == 'vertical') {

                var queryResult = $document[0].querySelectorAll('.' + $attrs.resizerX);
                
                var i;
                for(i = 0; i < queryResult.length; i++) {
                    queryResult[i].style.width = startX + dx + 'px';
                    $scope.column.width = startX + dx;
                }
            } 
        }

        function mouseup() {
            $document.unbind('mousemove', mousemove);
            $document.unbind('mouseup', mouseup);
        }
    };
});

App.directive('resize', function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind('resize', function() {
            
            scope.device = this.innerWidth;
            scope.$apply();

        });
        
        angular.element($window).bind('load',function () {
            scope.device = this.innerWidth;
            scope.$apply();
        });
    };
});

App.directive( 'ngBackspace', function()
{
    return {
        restrict: 'A',
        scope: {
            ngBackspace: '&'
        },
        link: function( scope, elem, attrs )
        {
            elem.bind( 'keyup', function( event )
            {
                if( event.which !== 8 )
                    return
 
                scope.$apply( function()
                {
                    if( scope.ngBackspace )
                    {
                        try
                        {
                            scope.ngBackspace()
                        } catch( err )
                        {
                            console.warn( err )
                        }
                    }
                } );
            } );
        }
    }
} );

App.directive('shouldFocus', function($window){
     return {
       restrict: 'A',
       link: function(scope,element,attrs){
         //angular.element($window).bind('keydown keypress', function () {

//             scope.$watch(attrs.shouldFocus,function(newVal,oldVal){
//               element[0].scrollIntoView(false);
//             });
         //});
       }
     };
  })

App.directive('format', ['$filter', function ($filter) {
    return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;


            ctrl.$formatters.unshift(function (a) {
                return $filter(attrs.format)(ctrl.$modelValue)
            });


            ctrl.$parsers.unshift(function (viewValue) {
                var plainNumber = viewValue.replace(/[^\d|\-+|\.+]/g, '');
                elem.val($filter(attrs.format)(plainNumber));
                return plainNumber;
            });
        }
    };
}]);

App.directive('numeric', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
            model: '=ngModel',
        },                
       link: function (scope, element, attrs, ngModelCtrl) {
   
            scope.$watch('model', function (newVal, oldVal) {
                
                if (newVal && typeof newVal == 'string') {
                    scope.model = parseInt(newVal);
                }
            });
    
        }
    };
});

App.directive('backButton', ['$window', function($window) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            elem.bind('click', function () {
                $window.history.back();
            });
        }
    };
}]);

App.directive('ngReallyClick', ['$modal', function($modal) {

      var ModalInstanceCtrl = function($scope, $modalInstance) {
        $scope.ok = function() {
          $modalInstance.close();
        };

        $scope.cancel = function() {
          $modalInstance.dismiss('cancel');
        };
      };

      return {
        restrict: 'A',
        scope:{
          ngReallyClick:"&",
          item:"="
        },
        link: function(scope, element, attrs) {
          element.bind('click', function() {
            var message = attrs.ngReallyMessage || "Are you sure want to delete?";

            var modalHtml = '<div class="modal-body">' + message + '</div>';
            modalHtml += '<div class="modal-footer"><button class="btn btn-primary" ng-click="ok()">OK</button><button class="btn btn-default" ng-click="cancel()">Cancel</button></div>';

            var modalInstance = $modal.open({
              template: modalHtml,
              controller: ModalInstanceCtrl
            });

            modalInstance.result.then(function() {
              scope.ngReallyClick({item:scope.item}); //raise an error : $digest already in progress
            });
            
          });

        }
      }
    }
]);

App.filter('slice', function() {
  return function(arr, start, end) {
    return arr.slice(start, end);
  };
});

App.filter('dateToISO', function() {

    return function(input) { return new Date(input); }
});

App.filter('num', function() {
    return function(input) {
        if (input)
        return parseInt(input, 10);
    }
});

App.filter('amount', [ '$filter', '$locale', function ($filter, $locale) {
    var currency = $filter('currency'), formats = $locale.NUMBER_FORMATS;
    return function (amount, symbol) {
        var value = currency(amount, '');
        return value.replace(new RegExp('\\' + formats.DECIMAL_SEP + '\\d{2}'), '')
    }
}]);

App.filter('propsFilter', function() {
  return function(items, props) {
    var out = [];

    if (angular.isArray(items)) {
      items.forEach(function(item) {
        var itemMatches = false;

        var keys = Object.keys(props);
        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }

        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }

    return out;
  };
});

App.filter('removeSpacesThenLowercase', function () {
        return function (text) {
			
			var str = text.replace(/\s+/g, '-');
			return str.toLowerCase();
        };
});

App.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});

//App.filter('sumOfValue', function () {
//    return function (data, key) {
//        if (typeof (data) === 'undefined' && typeof (key) === 'undefined') {
//            return 0;
//        }
//        var sum = 0;
//        for (var i = 0; i < Object.keys(data).length; i++) {
//            sum = sum + data[i+1][key];
//        }
//        return sum;
//    }
//});
//App.filter('totalSumPriceQty', function () {
//    return function (data, key1, key2) {
//        debugger;
//        if (typeof (data) === 'undefined' && typeof (key1) === 'undefined' && typeof (key2) === 'undefined') {
//            return 0;
//        }
//        var sum = 0;
//        for (var i = 0; i < Object.keys(data).length; i++) {
//            sum = sum + (data[i+1][key1] * data[i+1][key2]);
//        }
//        return sum;
//    }
//});

var modalCtrl = function ($scope, $modal) {

    $scope.open = function (id, $target, ctrl) {

        var modalInstance = $modal.open({
            templateUrl: 'app/modules/modal/' + $target + '.html',
            windowClass: $target,
            controller: ctrl,
            backdrop: true,
              resolve: {
                form: function () {
                  return $scope.form;
                },
                  formLabel: function () {
                  return $scope.formLabel;
                },
                  datas: function () {
                  return id;
                }
              }
        });
    };
};

var ModalDefaultCtrl = function ($scope, $modalInstance, form, formLabel, datas, $filter) {
    $scope.form = form;
    $scope.formLabel = formLabel;
    $scope.data = datas;
    
    $scope.currentPage = 1;
    $scope.pageSize = 10;
    
    $scope.filteredData = $scope.data;
    
    $scope.$watch('filt', function(query){
        $scope.filteredData = $filter('filter')($scope.data, query);
    });
    
    $scope.numberOfPages=function(){
        return Math.ceil($scope.filteredData.length/$scope.pageSize);                
    }

    $scope.cancel = function() {
        $modalInstance.close();
    }
    
};

var ModalVoidCtrl = function ($scope, $modalInstance, form, formLabel, datas, $location, $state, $stateParams, apiPutHeader) {

    $scope.form = form;
    $scope.formLabel = formLabel;
    $scope.data = datas;
    
    $scope.void = function() {    
        switch ($location.path()) {
            case '/purchase_list':
                $scope.url = 'api/admin/transaction/purchase/header/' + $scope.form.data.purhId;
                break;
            case '/purchase_approval':
                $scope.url = 'api/admin/transaction/purchaseApproval/header/' + $scope.form.data.purhId;
                break;
            case '/invoice':
                $scope.url = 'api/admin/transaction/invoice/header/' + $scope.form.data.inhId;
                break;
            case '/return':
                $scope.url = 'api/admin/transaction/returnItem/header/' + $scope.form.data.reihId;
                break;
            case '/invoice_return':
                $scope.url = 'api/admin/transaction/invoiceReturn/header/' + $scope.form.data.reihId;
                break;
            case '/sales_order_list':
                $scope.url = 'api/admin/transaction/salesOrder/header/' + $scope.form.data.sohId;
                break;
            case '/sales_order_approval':
                $scope.url = 'api/admin/transaction/salesOrderApproval/header/' + $scope.form.data.sohId;
                break;
            case '/billing':
                $scope.url = 'api/admin/transaction/billing/header/' + $scope.form.data.bihId;
                break;
            case '/journal':
                $scope.url = 'api/admin/accounting/journal/header/' + $scope.form.data.johdId;
                break;
            case '/account_payable':
                $scope.url = 'api/admin/finance/payable/header/' + $scope.form.data.aphId;
                break;
            case '/account_receivable':
                $scope.url = 'api/admin/finance/receivable/header/' + $scope.form.data.archId;
                break;
            case '/selling':
                break;
            case '/receive':
            case '/receive_by_warehouse':
                $scope.url = 'api/admin/transaction/warehouse/inbound/receive/header/' + $scope.form.data.rihdId;
                break;
            case '/storing':
                $scope.url = 'api/admin/transaction/warehouse/inbound/storing/header/' + $scope.form.data.sthId;
                break;
            case '/picking':
                $scope.url = 'api/admin/transaction/warehouse/outbound/picking/header/' + $scope.form.data.pichId;
                break;
            case '/packing':
                $scope.url = 'api/admin/transaction/warehouse/outbound/packing/header/' + $scope.form.data.pachId;
                break;
        }
        apiPutHeader.loadData($scope).then(function(dataOut) {
            $modalInstance.close();
            $state.transitionTo($state.current, $stateParams, {
                reload: true,
                inherit: false,
                notify: true
            });
        });
    }
        
    $scope.cancel = function() {
        $modalInstance.close();
    }
};

var ModalConfirmCtrl = function ($scope, $modalInstance, form, formLabel, datas, $location, $state, $stateParams, apiPutHeader) {

    $scope.form = form;
    $scope.formLabel = formLabel;
    $scope.data = datas;
    
    $scope.void = function() {    
        switch ($location.path()) {
            case '/purchase_list':
                $scope.url = 'api/admin/transaction/purchase/header/' + $scope.form.data.purhId;
                break;
            case '/purchase_approval':
                $scope.url = 'api/admin/transaction/purchaseApproval/header/' + $scope.form.data.purhId;
                break;
            case '/invoice':
                $scope.url = 'api/admin/transaction/invoice/header/' + $scope.form.data.inhId;
                break;
            case '/return':
                $scope.url = 'api/admin/transaction/returnItem/header/' + $scope.form.data.reihId;
                break;
            case '/invoice_return':
                $scope.url = 'api/admin/transaction/invoiceReturn/header/' + $scope.form.data.reihId;
                break;
            case '/sales_order_list':
                $scope.url = 'api/admin/transaction/salesOrder/header/' + $scope.form.data.sohId;
                break;
            case '/sales_order_approval':
                $scope.url = 'api/admin/transaction/salesOrderApproval/header/' + $scope.form.data.sohId;
                break;
            case '/billing':
                $scope.url = 'api/admin/transaction/billing/header/' + $scope.form.data.bihId;
                break;
            case '/journal':
                $scope.url = 'api/admin/accounting/journal/header/' + $scope.form.data.johdId;
                break;
            case '/account_payable':
                $scope.url = 'api/admin/finance/payable/header/' + $scope.form.data.aphId;
                break;
            case '/account_receivable':
                $scope.url = 'api/admin/finance/receivable/header/' + $scope.form.data.archId;
                break;
            case '/selling':
                break;
            case '/receive':
            case '/receive_by_warehouse':
                $scope.url = 'api/admin/transaction/warehouse/inbound/receive/header/' + $scope.form.data.rihdId;
                break;
            case '/storing':
                $scope.url = 'api/admin/transaction/warehouse/inbound/storing/header/' + $scope.form.data.sthId;
                break;
            case '/picking':
                $scope.url = 'api/admin/transaction/warehouse/outbound/picking/header/' + $scope.form.data.pichId;
                break;
            case '/packing':
                $scope.url = 'api/admin/transaction/warehouse/outbound/packing/header/' + $scope.form.data.pachId;
                break;
        }
        apiPutHeader.loadData($scope).then(function(dataOut) {
            $modalInstance.close();
            $state.transitionTo($state.current, $stateParams, {
                reload: true,
                inherit: false,
                notify: true
            });
        });
    }
        
    $scope.cancel = function() {
        $modalInstance.close();
    }
};