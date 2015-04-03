'use strict';

App.controller('masterMenuCtrl', ['$scope', '$http', 'transformRequestAsFormPost', 'apiGet' ,function($scope, $http, transformRequestAsFormPost, apiGet) {
    
    $scope.urls = 'api/admin/config/menuapi/menu';
    delete $scope.params.page;
    
    apiGet.loadData($scope).then(function(dataOut){
        
        $scope.parent = dataOut.data;
        
        for (var i=0; i< $scope.parent.length; i++) {
            $scope.parent[i].typeahead = '`';
        }
        
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.parent.length; i++) {
                if (model === $scope.parent[i].menuId) {
                    return $scope.parent[i].menuName;
                }
            }
        };
    });

}]);

App.controller('masterRoleCtrl', ['$scope', '$http', 'transformRequestAsFormPost', 'apiGet' ,function($scope, $http, transformRequestAsFormPost, apiGet) {  
    
    $scope.loadPermission = function(id) {
        $scope.urls = 'api/admin/config/roleapi/menu';

        delete $scope.params.page;
        delete $scope.params.sort;
        delete $scope.params.order;

        apiGet.loadData($scope).then(function(dataOut){

            $scope.menuData = dataOut;
        });
    };
    
    $scope.loadPermission();
    
    $scope.form.detail = {};
    
    $scope.declare = function(id) {
        if (!$scope.form.detail[id]) {
            $scope.form.detail[id] = {};
        }
    }
}]);

App.controller('masterUserCtrl', ['$scope', '$http', 'transformRequestAsFormPost', 'apiGet' ,function($scope, $http, transformRequestAsFormPost, apiGet) {
    
    $scope.urls = 'api/admin/config/userapi/role';
    delete $scope.params.page;
    
    apiGet.loadData($scope).then(function(dataOut){
        
        $scope.role = dataOut.data;
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.role.length; i++) {
                if (model === $scope.role[i].roleId) {
                    return $scope.role[i].roleName;
                }
            }
        };
    });
    
    $scope.urls = 'api/admin/config/userapi/company';
    delete $scope.params.page;
    
    apiGet.loadData($scope).then(function(dataOut){
        
        $scope.company = dataOut.data;
  
    });
    
    $scope.Date = function(arg){
       return new Date(arg);
    };
    
    $scope.toggleCompany = function toggleCompany(dt, arr) {

        var idx = $scope.form.data['uscoCompId'].indexOf(dt);

        if (idx > -1) {
            $scope.form.data['uscoCompId'].splice(idx, 1);
        }

        else {
        $scope.form.data['uscoCompId'].push(dt);
        }
    };

}]);

// ################
// Master
// ################
App.controller('masterCompany', ['$scope', '$http', 'transformRequestAsFormPost', 'apiGet' ,function($scope, $http, transformRequestAsFormPost, apiGet) {
    
    var a = $scope.url;
    $scope.urls = 'api/' + a + 'api/accountPayableType';
    
    delete $scope.params.page;
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data = dataOut.data;
        
        for (var i=0; i< $scope.data.length; i++) {
            $scope.data[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.data.length; i++) {
                if (model === $scope.data[i].maptId) {
                    return $scope.data[i].maptDescription;
                }
            }
        };
    });
    
    $scope.urls = 'api/' + a + 'api/accountReceivableType';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data2 = dataOut.data;
        
        for (var i=0; i< $scope.data2.length; i++) {
            $scope.data2[i].typeahead = '`';
        }
  
        $scope.formatLabel2 = function(model) {
            for (var i=0; i< $scope.data2.length; i++) {
                if (model === $scope.data2[i].martId) {
                    return $scope.data2[i].martDescription;
                }
            }
        };
    });
    
    $scope.urls = 'api/' + a + 'api/chartOfAccounts';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data3 = dataOut.data;
        
        for (var i=0; i< $scope.data3.length; i++) {
            $scope.data3[i].typeahead = '`';
        }
  
        $scope.formatLabel3 = function(model) {
            for (var i=0; i< $scope.data3.length; i++) {
                if (model === $scope.data3[i].mcoaId) {
                    return $scope.data3[i].mcoaDescription;
                }
            }
        };
    });

}]);

App.controller('masterSupplier', ['$scope', '$http', 'transformRequestAsFormPost', 'apiGet' ,function($scope, $http, transformRequestAsFormPost, apiGet) {
    
    var a = $scope.url;
    $scope.urls = 'api/' + a + 'api/purchaseType';
    
    delete $scope.params.page;
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data = dataOut.data;
        
        for (var i=0; i< $scope.data.length; i++) {
            $scope.data[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.data.length; i++) {
                if (model === $scope.data[i].mpurtId) {
                    return $scope.data[i].purchaseData;
                }
            }
        };
    });
    
    $scope.urls = 'api/' + a + 'api/bank';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data2 = dataOut.data;
        
        for (var i=0; i< $scope.data2.length; i++) {
            $scope.data2[i].typeahead = '`';
        }
  
        $scope.formatLabel2 = function(model) {
            for (var i=0; i< $scope.data2.length; i++) {
                if (model === $scope.data2[i].mbId) {
                    return $scope.data2[i].bankData;
                }
            }
        };
    });
    
    $scope.urls = 'api/' + a + 'api/city';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data3 = dataOut.data;
        
        for (var i=0; i< $scope.data3.length; i++) {
            $scope.data3[i].typeahead = '`';
        }
  
        $scope.formatLabel3 = function(model) {
            for (var i=0; i< $scope.data3.length; i++) {
                if (model === $scope.data3[i].msctId) {
                    return $scope.data3[i].msctDescription;
                }
            }
        };
    });
    
    $scope.urls = 'api/' + a + 'api/regency';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data4 = dataOut.data;
        
        for (var i=0; i< $scope.data4.length; i++) {
            $scope.data4[i].typeahead = '`';
        }
  
        $scope.formatLabel4 = function(model) {
            for (var i=0; i< $scope.data4.length; i++) {
                if (model === $scope.data4[i].msreId) {
                    return $scope.data4[i].msreDescription;
                }
            }
        };
    });
    
    $scope.urls = 'api/' + a + 'api/province';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data5 = dataOut.data;
        
        for (var i=0; i< $scope.data5.length; i++) {
            $scope.data5[i].typeahead = '`';
        }
  
        $scope.formatLabel5 = function(model) {
            for (var i=0; i< $scope.data5.length; i++) {
                if (model === $scope.data5[i].msprId) {
                    return $scope.data5[i].msprDescription;
                }
            }
        };
    });
    
    $scope.urls = 'api/' + a + 'api/chartOfAccounts';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data6 = dataOut.data;
        
        for (var i=0; i< $scope.data6.length; i++) {
            $scope.data6[i].typeahead = '`';
        }
  
        $scope.formatLabel6 = function(model) {
            for (var i=0; i< $scope.data6.length; i++) {
                if (model === $scope.data6[i].mcoaId) {
                    return $scope.data6[i].mcoaDescription;
                }
            }
        };
    });
    
    $scope.urls = 'api/' + a + 'api/journalType';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data7 = dataOut.data;
        
        for (var i=0; i< $scope.data7.length; i++) {
            $scope.data7[i].typeahead = '`';
        }
  
        $scope.formatLabel7 = function(model) {
            for (var i=0; i< $scope.data7.length; i++) {
                if (model === $scope.data7[i].mjotId) {
                    return $scope.data7[i].journalData;
                }
            }
        };
    });

}]);

App.controller('masterCustomer', ['$scope', '$http', 'transformRequestAsFormPost', 'apiGet' ,function($scope, $http, transformRequestAsFormPost, apiGet) {
    
    var a = $scope.url;
    
    $scope.urls = 'api/' + a + 'api/chartOfAccounts';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data = dataOut.data;
        
        for (var i=0; i< $scope.data.length; i++) {
            $scope.data[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.data.length; i++) {
                if (model === $scope.data[i].mcoaId) {
                    return $scope.data[i].mcoaDescription;
                }
            }
        };
    });
    
    $scope.urls = 'api/' + a + 'api/journalType';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data2 = dataOut.data;
        
        for (var i=0; i< $scope.data2.length; i++) {
            $scope.data2[i].typeahead = '`';
        }
  
        $scope.formatLabel2 = function(model) {
            for (var i=0; i< $scope.data2.length; i++) {
                if (model === $scope.data2[i].mjotId) {
                    return $scope.data2[i].journalData;
                }
            }
        };
    });
    
    $scope.urls = 'api/' + a + 'api/city';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data3 = dataOut.data;
        
        for (var i=0; i< $scope.data3.length; i++) {
            $scope.data3[i].typeahead = '`';
        }
  
        $scope.formatLabel3 = function(model) {
            for (var i=0; i< $scope.data3.length; i++) {
                if (model === $scope.data3[i].msctId) {
                    return $scope.data3[i].msctDescription;
                }
            }
        };
    });
    
    $scope.urls = 'api/' + a + 'api/regency';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data4 = dataOut.data;
        
        for (var i=0; i< $scope.data4.length; i++) {
            $scope.data4[i].typeahead = '`';
        }
  
        $scope.formatLabel4 = function(model) {
            for (var i=0; i< $scope.data4.length; i++) {
                if (model === $scope.data4[i].msreId) {
                    return $scope.data4[i].msreDescription;
                }
            }
        };
    });
    
    $scope.urls = 'api/' + a + 'api/province';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data5 = dataOut.data;
        
        for (var i=0; i< $scope.data5.length; i++) {
            $scope.data5[i].typeahead = '`';
        }
  
        $scope.formatLabel5 = function(model) {
            for (var i=0; i< $scope.data5.length; i++) {
                if (model === $scope.data5[i].msprId) {
                    return $scope.data5[i].msprDescription;
                }
            }
        };
    });

}]);

App.controller('masterEmployeeDetail', ['$scope', '$http', 'transformRequestAsFormPost', 'apiGet' ,function($scope, $http, transformRequestAsFormPost, apiGet) {
    
    var a = $scope.url;
    $scope.urls = 'api/' + a + 'api/division';
    
    delete $scope.params.page;
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data = dataOut.data;
        
        for (var i=0; i< $scope.data.length; i++) {
            $scope.data[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.data.length; i++) {
                if (model === $scope.data[i].mdivId) {
                    return $scope.data[i].Division;
                }
            }
        };
    });
    
    $scope.urls = 'api/' + a + 'api/status';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data2 = dataOut.data;
        
        for (var i=0; i< $scope.data2.length; i++) {
            $scope.data2[i].typeahead = '`';
        }
  
        $scope.formatLabel2 = function(model) {
            for (var i=0; i< $scope.data2.length; i++) {
                if (model === $scope.data2[i].msesId) {
                    return $scope.data2[i].Status;
                }
            }
        };
    });

}]);

App.controller('masterItem', ['$scope', '$http', 'transformRequestAsFormPost', 'apiGet', '$timeout' ,function($scope, $http, transformRequestAsFormPost, apiGet, $timeout) {
    
    var a = $scope.url; 
    $scope.urls = 'api/' + a + 'api/brand';
    
    delete $scope.params.page;
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data = dataOut.data;
        
        for (var i=0; i< $scope.data.length; i++) {
            $scope.data[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.data.length; i++) {
                if (model === $scope.data[i].mbrnId) {
                    return $scope.data[i].mbrnDescription;
                }
            }
        };
    });
    
    $scope.urls = 'api/' + a + 'api/category';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data2 = dataOut.data;
        
        for (var i=0; i< $scope.data2.length; i++) {
            $scope.data2[i].typeahead = '`';
        }
  
        $scope.formatLabel2 = function(model) {
            for (var i=0; i< $scope.data2.length; i++) {
                if (model === $scope.data2[i].micaId) {
                    return $scope.data2[i].Category;
                }
            }
        };
        
        $scope.onSelect2 = function ($item, $model, $label) {
            $scope.$item = $item;
            $scope.$model = $model;
            $scope.$label = $label;
            
            delete $scope.form.data.mitmMiscaId;
        };
    });
    
    $scope.items = function() {
        
        if ($scope.form && $scope.form.data && $scope.form.data.mitmMicaId) {
            $scope.urls = 'api/' + a + 'api/subCategory?miscaMicaId=' + $scope.form.data.mitmMicaId;

            apiGet.loadData($scope).then(function(dataOut) {

                $scope.data6 = dataOut.data;

                for (var i=0; i< $scope.data6.length; i++) {
                    $scope.data6[i].typeahead = '`';
                }

                $scope.formatLabel6 = function(model) {
                    for (var i=0; i< $scope.data6.length; i++) {
                        if (model === $scope.data6[i].miscaId) {
                            return $scope.data6[i].SubCategory;
                        }
                    }
                };
            });
            
        } else {
            
            $scope.urls = 'api/' + a + 'api/subCategory';

            apiGet.loadData($scope).then(function(dataOut) {

                $scope.data6 = dataOut.data;

                for (var i=0; i< $scope.data6.length; i++) {
                    $scope.data6[i].typeahead = '`';
                }

                $scope.formatLabel6 = function(model) {
                    for (var i=0; i< $scope.data6.length; i++) {
                        if (model === $scope.data6[i].miscaId) {
                            return $scope.data6[i].SubCategory;
                        }
                    }
                };
            });
            
        }
    }
    
    $scope.items();
    
    $scope.urls = 'api/' + a + 'api/size';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data3 = dataOut.data;
        
        for (var i=0; i< $scope.data3.length; i++) {
            $scope.data3[i].typeahead = '`';
        }
  
        $scope.formatLabel3 = function(model) {
            for (var i=0; i< $scope.data3.length; i++) {
                if (model === $scope.data3[i].msizId) {
                    return $scope.data3[i].msizDescription;
                }
            }
        };
    });
    
    $scope.urls = 'api/' + a + 'api/store';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data4 = dataOut.data;
        
        for (var i=0; i< $scope.data4.length; i++) {
            $scope.data4[i].typeahead = '`';
        }
  
        $scope.formatLabel4 = function(model) {
            for (var i=0; i< $scope.data4.length; i++) {
                if (model === $scope.data4[i].mstoId) {
                    return $scope.data4[i].mstoDescription;
                }
            }
        };
    });
    
    $scope.urls = 'api/' + a + 'api/location';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data5 = dataOut.data;
        
        for (var i=0; i< $scope.data5.length; i++) {
            $scope.data5[i].typeahead = '`';
        }
  
        $scope.formatLabel5 = function(model) {
            for (var i=0; i< $scope.data5.length; i++) {
                if (model === $scope.data5[i].mlocId) {
                    return $scope.data5[i].mlocDescription;
                }
            }
        };
    });
    
    $scope.$watch('form.data.mitmMicaId', function (newVal, oldVal) {
        
        if(newVal > 0) {
            //$timeout (function() {
            
                delete $scope.form.data.mitmMiscaId;
                $scope.items();
            //}, 100);
        }
    });
    
    $scope.$watch('toggler', function (newVal, oldVal) {
        
        if(newVal ==false) {
            //$timeout (function() {
                $scope.items()
            //}, 100);
        }
    });

}]);

App.controller('masterItemOthers', ['$scope', '$http', 'transformRequestAsFormPost', 'apiGet' ,function($scope, $http, transformRequestAsFormPost, apiGet) {
    
    var a = $scope.url;
    $scope.urls = 'api/' + a + 'api/brand';
    
    delete $scope.params.page;
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data = dataOut.data;
        
        for (var i=0; i< $scope.data.length; i++) {
            $scope.data[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.data.length; i++) {
                if (model === $scope.data[i].mbrnId) {
                    return $scope.data[i].mbrnDescription;
                }
            }
        };
    });
    
    $scope.urls = 'api/' + a + 'api/category';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data2 = dataOut.data;
        
        for (var i=0; i< $scope.data2.length; i++) {
            $scope.data2[i].typeahead = '`';
        }
  
        $scope.formatLabel2 = function(model) {
            for (var i=0; i< $scope.data2.length; i++) {
                if (model === $scope.data2[i].micaId) {
                    return $scope.data2[i].micaDescription;
                }
            }
        };
    });
    
    $scope.urls = 'api/' + a + 'api/size';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data3 = dataOut.data;
        
        for (var i=0; i< $scope.data3.length; i++) {
            $scope.data3[i].typeahead = '`';
        }
  
        $scope.formatLabel3 = function(model) {
            for (var i=0; i< $scope.data3.length; i++) {
                if (model === $scope.data3[i].msizId) {
                    return $scope.data3[i].msizDescription;
                }
            }
        };
    });
    
    $scope.urls = 'api/' + a + 'api/store';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data4 = dataOut.data;
        
        for (var i=0; i< $scope.data4.length; i++) {
            $scope.data4[i].typeahead = '`';
        }
  
        $scope.formatLabel4 = function(model) {
            for (var i=0; i< $scope.data4.length; i++) {
                if (model === $scope.data4[i].mstoId) {
                    return $scope.data4[i].mstoDescription;
                }
            }
        };
    });
    
    $scope.urls = 'api/' + a + 'api/location';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data5 = dataOut.data;
        
        for (var i=0; i< $scope.data5.length; i++) {
            $scope.data5[i].typeahead = '`';
        }
  
        $scope.formatLabel5 = function(model) {
            for (var i=0; i< $scope.data5.length; i++) {
                if (model === $scope.data5[i].mlocId) {
                    return $scope.data5[i].mlocDescription;
                }
            }
        };
    });

}]);

App.controller('masterItemLocation', ['$scope', '$http', 'transformRequestAsFormPost', 'apiGet' ,function($scope, $http, transformRequestAsFormPost, apiGet) {
    
    var a = $scope.url;
    $scope.urls = 'api/' + a + 'api/warehouse';
    
    delete $scope.params.page;
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data = dataOut.data;
        
        for (var i=0; i< $scope.data.length; i++) {
            $scope.data[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.data.length; i++) {
                if (model === $scope.data[i].mwrhId) {
                    return $scope.data[i].mwrhDescription;
                }
            }
        };
    });

}]);

App.controller('masterVehicle', ['$scope', '$http', 'transformRequestAsFormPost', 'apiGet' ,function($scope, $http, transformRequestAsFormPost, apiGet) {
    
    var a = $scope.url;
    $scope.urls = 'api/' + a + 'api/color';
    
    delete $scope.params.page;
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data = dataOut.data;
        
        for (var i=0; i< $scope.data.length; i++) {
            $scope.data[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.data.length; i++) {
                if (model === $scope.data[i].mcolId) {
                    return $scope.data[i].colorData;
                }
            }
        };
    });

}]);

App.controller('masterItemSubcategory', ['$scope', '$http', 'transformRequestAsFormPost', 'apiGet' ,function($scope, $http, transformRequestAsFormPost, apiGet) {
    
    var a = $scope.url;
    $scope.urls = 'api/' + a + 'api/category';
    
    delete $scope.params.page;
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data = dataOut.data;
        
        for (var i=0; i< $scope.data.length; i++) {
            $scope.data[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.data.length; i++) {
                if (model === $scope.data[i].micaId) {
                    return $scope.data[i].categoryDescription;
                }
            }
        };
    });

}]);

App.controller('masterBankAccount', ['$scope', '$http', 'transformRequestAsFormPost', 'apiGet' ,function($scope, $http, transformRequestAsFormPost, apiGet) {
    
    var a = $scope.url;
    $scope.urls = 'api/' + a + 'api/bank';
    
    delete $scope.params.page;
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data = dataOut.data;
        
        for (var i=0; i< $scope.data.length; i++) {
            $scope.data[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.data.length; i++) {
                if (model === $scope.data[i].mbId) {
                    return $scope.data[i].mbDescription;
                }
            }
        };
    });

}]);

App.controller('masterCOA', ['$scope', '$http', 'transformRequestAsFormPost', 'apiGet' ,function($scope, $http, transformRequestAsFormPost, apiGet) {
    
    var a = $scope.url;
    $scope.urls = 'api/' + a + 'api/chartOfAccounts';
    
    delete $scope.params.page;
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.parent = dataOut.data;
        
        for (var i=0; i< $scope.parent.length; i++) {
            $scope.parent[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.parent.length; i++) {
                if (model === $scope.parent[i].mcoaId) {
                    return $scope.parent[i].coaDesc;
                }
            }
        };
    });

}]);

// ################
// Transaction
// ################

App.controller('transactionPurchaseList', ['$scope', '$state', '$stateParams', '$rootScope', '$http', 'transformRequestAsFormPost', 'apiGet', 'apiPostHeader', 'apiPutHeader', 'apiDetail', 'apiPutDetail', 'apiPostDetail', 'apiDeleteDetail', 'dataTransactionGrid', function($scope, $state, $stateParams, $rootScope, $http, transformRequestAsFormPost, apiGet, apiPostHeader, apiPutHeader, apiDetail, apiPutDetail, apiPostDetail, apiDeleteDetail, dataTransactionGrid) {
    $scope.regEx = /^(\d*\.?\d*[-+]?)*$/;

    $scope.urls = 'api/admin/transaction/purchase/Purchaseapi/purchaseType';
    
    delete $scope.params.page;

    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data = dataOut.data;
        
        for (var i=0; i< $scope.data.length; i++) {
            $scope.data[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.data.length; i++) {
                if (model === $scope.data[i].mpurtId) {
                    return $scope.data[i].mpurtCodeDescription;
                }
            }
        };
    });
    
    $scope.urls = 'api/admin/transaction/purchase/Purchaseapi/supplier';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data2 = dataOut.data;
        
        for (var i=0; i< $scope.data2.length; i++) {
            $scope.data2[i].typeahead = '`';
        }
  
        $scope.formatLabel2 = function(model) {
            for (var i=0; i< $scope.data2.length; i++) {
                if (model === $scope.data2[i].msupId) {
                    return $scope.data2[i].msupNameDescription;
                }
            }
        };
        
        $scope.onSelect2 = function ($item, $model, $label) {
            $scope.$item = $item;
            $scope.$model = $model;
            $scope.$label = $label;
            
            $scope.form.data.msupAddress = $scope.$item.msupAddress;
            $scope.form.data.msupTelp = $scope.$item.msupTelp;
            $scope.form.data.msupFax = $scope.$item.msupFax;
        };
    });
    
    $scope.items = function() {
        
        if ($scope.form && $scope.form.data && $scope.form.data.purhMsupId) {
            $scope.urls = 'api/admin/transaction/purchase/Purchaseapi/item?purhMsupId=' + $scope.form.data.purhMsupId;
        } else {
            $scope.urls = 'api/admin/transaction/purchase/Purchaseapi/item';
        }

        apiGet.loadData($scope).then(function(dataOut) {

            $scope.data3 = dataOut.data;

            for (var i=0; i< $scope.data3.length; i++) {
                $scope.data3[i].typeahead = '`';
            }

            $scope.formatLabel3 = function(model) {
                for (var i=0; i< $scope.data3.length; i++) {
                    if (model === $scope.data3[i].mitmId) {
                        return $scope.data3[i].mitmCode;
                    }
                }
            };

            $scope.onSelect3 = function ($item, $model, $label) {
                $scope.$item = $item;
                $scope.$model = $model;
                $scope.$label = $label;

                $scope.form.data.mitmCode = $scope.$item.mitmCode;
                $scope.form.data.mitmDescription = $scope.$item.mitmDescription;
                $scope.form.detail.purdPrice = parseInt($scope.$item.mitmPriceBuy);
            };

            $scope.data4 = dataOut.data;

            for (var i=0; i< $scope.data4.length; i++) {
                $scope.data4[i].typeahead = '`';
            }

            $scope.formatLabel4 = function(model) {
                for (var i=0; i< $scope.data4.length; i++) {
                    if (model === $scope.data4[i].mitmId) {
                        return $scope.data4[i].mitmDescription;
                    }
                }
            };

            $scope.onSelect4 = function ($item, $model, $label) {
                $scope.$item = $item;
                $scope.$model = $model;
                $scope.$label = $label;

                $scope.form.data.mitmCode = $scope.$item.mitmCode;
                $scope.form.data.mitmDescription = $scope.$item.mitmDescription;
                $scope.form.detail.purdPrice = parseInt($scope.$item.mitmPriceBuy);
            };
        });
    }
    
    $scope.items();
    
    $scope.$watch('form.data.purhMsupId', function (newVal, oldVal) {
        
        if(newVal > 0) {
            $scope.items();
        }
        
        $scope.form.detail = {};
    });
    
    $scope.$watch('form.data.purhId', function (newVal, oldVal) {

        if(newVal) {
            $scope.urls = 'api/admin/transaction/purchase/Purchaseapi/void?purhId=' + $scope.form.data.purhId;
    
            apiGet.loadData($scope).then(function(dataOut) {
                $scope.voidPermission = dataOut.data[0].void;
            });
        }
    });
    
    $scope.$watch('form.detail.purdNoSeq', function (newVal, oldVal) {

        if(newVal) {
            if ($scope.form.detail.purdDisc == 0) {
                delete $scope.form.detail.purdDisc;    
            }
        }
        
    });
    
    $scope.urls = 'api/admin/transaction/purchase/Purchaseapi/unit';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data5 = dataOut.data;
        
        for (var i=0; i< $scope.data5.length; i++) {
            $scope.data5[i].typeahead = '`';
        }
  
        $scope.formatLabel5 = function(model) {
            for (var i=0; i< $scope.data5.length; i++) {
                if (model === $scope.data5[i].munitId) {
                    return $scope.data5[i].munitName ;
                }
            }
        };
    });
    
    $scope.remove = function(id) {
        delete $scope.form.data.detail[$scope.formLabel.column.detail[10].id];
    };
    
    $scope.onclear = function(id) {
        $scope.form.detail = {};
        $scope.form.gridEditor.$setPristine();
    };
    
    $scope.ondel = function(id, order) {
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.purhId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        apiDeleteDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();
            delete $scope.form.data.detail[order];
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['purhTotalQty'] = dataOut.data.purhTotalQty;  
                $scope.form.data['purhTotalAmount'] = dataOut.data.purhTotalAmount; 
                $scope.form.data['purhSubTotal'] = dataOut.data.purhSubTotal; 
                $scope.form.data['subtotal2'] = dataOut.data.subtotal2; 
                $scope.form.data['purhPpn'] = dataOut.data.purhPpn; 
                $scope.form.data['purhDiscAmount'] = dataOut.data.purhDiscAmount; 
                $scope.url = a;
            });
        });
    };
    
    $scope.onupd = function(id) {
        
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.purhId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        $scope.form.testing = {};    

        $scope.form.testing[$scope.form.detail.purdNoSeq] = $scope.form.detail;

        apiPutDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();

            $scope.tojson = angular.fromJson(dataOut);
            var result={};
            angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

            $scope.form.data.detail = result;
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['purhTotalQty'] = dataOut.data.purhTotalQty;  
                $scope.form.data['purhTotalAmount'] = dataOut.data.purhTotalAmount; 
                $scope.form.data['purhSubTotal'] = dataOut.data.purhSubTotal; 
                $scope.form.data['subtotal2'] = dataOut.data.subtotal2; 
                $scope.form.data['purhPpn'] = dataOut.data.purhPpn; 
                $scope.form.data['purhDiscAmount'] = dataOut.data.purhDiscAmount; 
                $scope.url = a;
            });
            
        });
    };
    
    $scope.onnew = function(id) {
        
        var a = $scope.url;
        if (!$scope.form.data.purhId) {
        
            $scope.urls = 'api/' + $scope.url + '/detail';
            $scope.url = 'api/' + a + '/header';
            
            apiPostHeader.loadData($scope).then(function(dataOut) { 
                $scope.form.data.purhId = dataOut.data.id;
                //$scope.form.data.detail.purhId = dataOut.data.id;
                $scope.form.data.load = true;
                $scope.form.detail.purdPurhId = dataOut.data.id;
                $scope.url = $scope.url = 'api/' + a + '/header/' + $scope.form.data.purhId;
        
                $scope.form.testing = {};    
                $scope.form.detail.purdNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
                $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;
        
                apiDetail.loadData($scope).then(function(dataOut) {
                    $scope.resetItem();

                    $scope.tojson = angular.fromJson(dataOut);
                    var result={};
                    angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

                    $scope.form.data.detail = result;
                    
                    apiPutHeader.loadData($scope).then(function(dataOut) {
                        $scope.form.data['purhTotalQty'] = dataOut.data.purhTotalQty;  
                        $scope.form.data['purhTotalAmount'] = dataOut.data.purhTotalAmount; 
                        $scope.form.data['purhSubTotal'] = dataOut.data.purhSubTotal; 
                        $scope.form.data['subtotal2'] = dataOut.data.subtotal2; 
                        $scope.form.data['purhPpn'] = dataOut.data.purhPpn; 
                        $scope.form.data['purhDiscAmount'] = dataOut.data.purhDiscAmount; 
                        $scope.url = a;
                    });
                });
            });
        } else {
        
            $scope.urls = 'api/' + $scope.url + '/detail';
            $scope.url = 'api/' + a + '/header/' + $scope.form.data.purhId;
        
            $scope.form.detail.purdPurhId = $scope.form.data.purhId;

            $scope.form.testing = {};    
            $scope.form.detail.purdNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
            $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;

            apiDetail.loadData($scope).then(function(dataOut) {
                $scope.resetItem();

                $scope.tojson = angular.fromJson(dataOut);
                var result={};
                angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

                $scope.form.data.detail = result;
                
                apiPutHeader.loadData($scope).then(function(dataOut) {
                    $scope.form.data['purhTotalQty'] = dataOut.data.purhTotalQty;  
                    $scope.form.data['purhTotalAmount'] = dataOut.data.purhTotalAmount; 
                    $scope.form.data['purhSubTotal'] = dataOut.data.purhSubTotal; 
                    $scope.form.data['subtotal2'] = dataOut.data.subtotal2; 
                    $scope.form.data['purhPpn'] = dataOut.data.purhPpn; 
                    $scope.form.data['purhDiscAmount'] = dataOut.data.purhDiscAmount; 
                    $scope.url = a;
                });
            });
        }
        $scope.formItem = false;
    };
}]);

App.controller('transactionPurchaseApproval', ['$scope', '$state', '$stateParams', '$rootScope', '$http', 'transformRequestAsFormPost', 'apiGet', 'apiPostHeader', 'apiPutHeader', 'apiDetail', 'apiPutDetail', 'apiPostDetail', 'apiDeleteDetail', 'dataTransactionGrid', function($scope, $state, $stateParams, $rootScope, $http, transformRequestAsFormPost, apiGet, apiPostHeader, apiPutHeader, apiDetail, apiPutDetail, apiPostDetail, apiDeleteDetail, dataTransactionGrid) {

    
    $scope.$watch('form.data.purhId', function (newVal, oldVal) {

        if(newVal) {
            $scope.urls = 'api/admin/transaction/PurchaseApproval/PurchaseApprovalapi/void?purhId=' + $scope.form.data.purhId;
    
            apiGet.loadData($scope).then(function(dataOut) {
                $scope.voidPermission = dataOut.data[0].void;
            });
        }
    });
        
}]);

App.controller('transactionInvoice', ['$scope', '$state', '$stateParams', '$rootScope', '$http', 'transformRequestAsFormPost', 'apiGet', 'apiPostHeader', 'apiPutHeader', 'apiDetail', 'apiPutDetail', 'apiPostDetail', 'apiDeleteDetail', 'dataTransactionGrid', function($scope, $state, $stateParams, $rootScope, $http, transformRequestAsFormPost, apiGet, apiPostHeader, apiPutHeader, apiDetail, apiPutDetail, apiPostDetail, apiDeleteDetail, dataTransactionGrid) {
    $scope.regEx = /^(\d*\.?\d*[-+]?)*$/;
    $scope.Math = Math;
    
    $scope.$watch('form.data', function() {
        
        if ($scope.form.data) {
            if (!$scope.form.data.inhDate) {
                $scope.form.data.inhDate = new Date();

            }
        }
    });
    
    $scope.$watch('form.detail.indNoSeq', function (newVal, oldVal) {

        if(newVal) {
            if ($scope.form.detail.indDisc == 0) {
                delete $scope.form.detail.indDisc;    
            }
        }
        
    });
    
    $scope.urls = 'api/admin/transaction/invoice/invoiceapi/purchaseType';
    
    //delete $scope.params.page;
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data = dataOut.data;
        
        for (var i=0; i< $scope.data.length; i++) {
            $scope.data[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.data.length; i++) {
                if (model === $scope.data[i].mpurtId) {
                    return $scope.data[i].mpurtCodeDescription;
                }
            }
        };
    });
    
    $scope.onclear = function(id) {
        $scope.form.detail = {};
        $scope.form.gridEditor.$setPristine();
    };
    
    $scope.onupd = function(id) {
        
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.inhId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        $scope.form.testing = {};    

        $scope.form.testing[$scope.form.detail.indNoSeq] = $scope.form.detail;

        apiPutDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();

            $scope.tojson = angular.fromJson(dataOut);
            var result={};
            angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

            $scope.form.data.detail = result;
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['inhTotalQty'] = dataOut.data.inhTotalQty;  
                $scope.form.data['inhTotalAmount'] = dataOut.data.inhTotalAmount; 
                $scope.form.data['inhSubTotalAmount'] = dataOut.data.inhSubTotalAmount;
                $scope.url = a;
            });
            
        });
    };
}]);

App.controller('transactionReturn', ['$scope', '$state', '$stateParams', '$rootScope', '$http', 'transformRequestAsFormPost', 'apiGet', 'apiPostHeader', 'apiPutHeader', 'apiDetail', 'apiPutDetail', 'apiPostDetail', 'apiDeleteDetail', 'dataTransactionGrid', function($scope, $state, $stateParams, $rootScope, $http, transformRequestAsFormPost, apiGet, apiPostHeader, apiPutHeader, apiDetail, apiPutDetail, apiPostDetail, apiDeleteDetail, dataTransactionGrid) {
    
    $scope.urls = 'api/admin/transaction/returnItem/returnItemapi/supplier';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data = dataOut.data;
        
        for (var i=0; i< $scope.data.length; i++) {
            $scope.data[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.data.length; i++) {
                if (model === $scope.data[i].msupId) {
                    return $scope.data[i].msupName;
                }
            }
        };
        
        $scope.onSelect = function ($item, $model, $label) {
            $scope.$item = $item;
            $scope.$model = $model;
            $scope.$label = $label;
            
            $scope.form.data.msupAddress = $scope.$item.msupAddress;
            $scope.form.data.msupTelp = $scope.$item.msupTelp;
            $scope.form.data.msupFax = $scope.$item.msupFax;
        };
    });
    
    $scope.items = function() {
        
        if ($scope.form && $scope.form.data && $scope.form.data.reihMsupId) {
            $scope.urls = 'api/admin/transaction/returnItem/returnItemapi/item?isspMsupId=' + $scope.form.data.reihMsupId;
        
            apiGet.loadData($scope).then(function(dataOut) {

                $scope.data2 = dataOut.data;

                for (var i=0; i< $scope.data2.length; i++) {
                    $scope.data2[i].typeahead = '`';
                }

                $scope.formatLabel2 = function(model) {
                    for (var i=0; i< $scope.data2.length; i++) {
                        if (model === $scope.data2[i].mitmId) {
                            return $scope.data2[i].mitmCode;
                        }
                    }
                };

                $scope.onSelect2 = function ($item, $model, $label) {
                    $scope.$item = $item;
                    $scope.$model = $model;
                    $scope.$label = $label;

                    $scope.form.detail.reidPrice = parseInt($scope.$item.mitmPrice);
                    $scope.form.detail.isspStock = parseInt($scope.$item.isspStock);
                };

                $scope.data3 = dataOut.data;

                for (var i=0; i< $scope.data3.length; i++) {
                    $scope.data3[i].typeahead = '`';
                }

                $scope.formatLabel3 = function(model) {
                    for (var i=0; i< $scope.data3.length; i++) {
                        if (model === $scope.data3[i].mitmId) {
                            return $scope.data3[i].mitmDescription;
                        }
                    }
                };

                $scope.onSelect3 = function ($item, $model, $label) {
                    $scope.$item = $item;
                    $scope.$model = $model;
                    $scope.$label = $label;

                    $scope.form.detail.reidPrice = parseInt($scope.$item.mitmPrice);
                    $scope.form.detail.isspStock = parseInt($scope.$item.isspStock);
                };
            });
        } 
    }
    
    $scope.items();
    
    $scope.$watch('form.data.reihMsupId', function (newVal, oldVal) {
        
        if(newVal > 0) {
            $scope.items();
            $scope.dtl = true;
        }
    });
    
    $scope.urls = 'api/admin/transaction/returnItem/returnItemapi/unit';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data4 = dataOut.data;
        
        for (var i=0; i< $scope.data4.length; i++) {
            $scope.data4[i].typeahead = '`';
        }
  
        $scope.formatLabel4 = function(model) {
            for (var i=0; i< $scope.data4.length; i++) {
                if (model === $scope.data4[i].munitId) {
                    return $scope.data4[i].munitName ;
                }
            }
        };
    });
    
    $scope.remove = function(id) {
        delete $scope.form.data.detail[$scope.formLabel.column.detail[10].id];
    };
    
    $scope.onclear = function(id) {
        $scope.form.detail = {};
        $scope.form.gridEditor.$setPristine();
    };
    
    $scope.ondel = function(id, order) {
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.reihId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        apiDeleteDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();
            delete $scope.form.data.detail[order];
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['reihTotalQty'] = dataOut.data.reihTotalQty;  
                $scope.form.data['reihTotalAmount'] = dataOut.data.reihTotalAmount; 
        
                $scope.url = a;
            });
        });
    };
    
    $scope.onupd = function(id) {
        
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.reihId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        $scope.form.testing = {};    

        $scope.form.testing[$scope.form.detail.reidNoSeq] = $scope.form.detail;

        apiPutDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();

            $scope.tojson = angular.fromJson(dataOut);
            var result={};
            angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

            $scope.form.data.detail = result;
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['reihTotalQty'] = dataOut.data.reihTotalQty;  
                $scope.form.data['reihTotalAmount'] = dataOut.data.reihTotalAmount; 
        
                $scope.url = a;
            });
            
        });
    };
    
    $scope.onnew = function(id) {
        
        var a = $scope.url;
        if (!$scope.form.data.reihId) {
        
            $scope.urls = 'api/' + a + '/detail';
            $scope.url = 'api/' + a + '/header';
            
            apiPostHeader.loadData($scope).then(function(dataOut) { 
                $scope.form.data.reihId = dataOut.data.id;
                //$scope.form.data.detail.reihId = dataOut.data.id;
                $scope.form.data.load = true;
                $scope.form.detail.reidReihId = dataOut.data.id;
                $scope.url = $scope.url = 'api/' + a + '/header/' + $scope.form.data.reihId;
        
                $scope.form.testing = {};    
                $scope.form.detail.reidNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
                $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;
        
                apiDetail.loadData($scope).then(function(dataOut) {
                    $scope.resetItem();

                    $scope.tojson = angular.fromJson(dataOut);
                    var result={};
                    angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

                    $scope.form.data.detail = result;
                    
                    apiPutHeader.loadData($scope).then(function(dataOut) {
                        $scope.form.data['reihTotalQty'] = dataOut.data.reihTotalQty;  
                        $scope.form.data['reihTotalAmount'] = dataOut.data.reihTotalAmount; 
        
                        $scope.url = a;
                    });
                });
            });
        } else {
        
            $scope.urls = 'api/' + a + '/detail';
            $scope.url = 'api/' + a + '/header/' + $scope.form.data.reihId;
        
            $scope.form.detail.reidReihId = $scope.form.data.reihId;

            $scope.form.testing = {};    
            $scope.form.detail.reidNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
            $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;

            apiDetail.loadData($scope).then(function(dataOut) {
                $scope.resetItem();

                $scope.tojson = angular.fromJson(dataOut);
                var result={};
                angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

                $scope.form.data.detail = result;
                
                apiPutHeader.loadData($scope).then(function(dataOut) {
                    $scope.form.data['reihTotalQty'] = dataOut.data.reihTotalQty;  
                    $scope.form.data['reihTotalAmount'] = dataOut.data.reihTotalAmount; 
        
                    $scope.url = a;
                });
            });
        }
    };
}]);

App.controller('transactionReturnPO', ['$scope', '$state', '$stateParams', '$rootScope', '$http', 'transformRequestAsFormPost', 'apiGet', 'apiPostHeader', 'apiPutHeader', 'apiDetail', 'apiPutDetail', 'apiPostDetail', 'apiDeleteDetail', 'dataTransactionGrid', function($scope, $state, $stateParams, $rootScope, $http, transformRequestAsFormPost, apiGet, apiPostHeader, apiPutHeader, apiDetail, apiPutDetail, apiPostDetail, apiDeleteDetail, dataTransactionGrid) {
    
    $scope.urls = 'api/admin/transaction/returnPo/returnPoapi/purchase';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data5 = dataOut.data;
        
        for (var i=0; i< $scope.data5.length; i++) {
            $scope.data5[i].typeahead = '`';
        }
  
        $scope.formatLabel5 = function(model) {
            for (var i=0; i< $scope.data5.length; i++) {
                if (model === $scope.data5[i].purhId) {
                    return $scope.data5[i].purhRefNo;
                }
            }
        };
        
        $scope.onSelect5 = function ($item, $model, $label) {
            $scope.$item = $item;
            $scope.$model = $model;
            $scope.$label = $label;
            
            $scope.form.data.supplierDesc = $scope.$item.purhMsupId;
        };
    });
    
    $scope.urls = 'api/admin/transaction/returnPo/returnPoapi/supplier';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data = dataOut.data;
        
        for (var i=0; i< $scope.data.length; i++) {
            $scope.data[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.data.length; i++) {
                if (model === $scope.data[i].isspId) {
                    return $scope.data[i].supplierDesc;
                }
            }
        };
        
        $scope.onSelect = function ($item, $model, $label) {
            $scope.$item = $item;
            $scope.$model = $model;
            $scope.$label = $label;
            
            $scope.form.data.msupAddress = $scope.$item.msupAddress;
            $scope.form.data.msupTelp = $scope.$item.msupTelp;
            $scope.form.data.msupFax = $scope.$item.msupFax;
        };
    });
    
    $scope.$watch('form.data.supplierDesc', function(newVal, oldVal) {
        
        if (newVal > 0) {
            $scope.form.data.msupAddress = $scope.data[newVal].msupAddress;
            $scope.form.data.msupTelp = $scope.data[newVal].msupTelp;
            $scope.form.data.msupFax = $scope.data[newVal].msupFax;
        }
    });
    
    $scope.items = function() {
        
        if ($scope.form && $scope.form.data && $scope.form.data.reihMsupId) {
            $scope.urls = 'api/admin/transaction/returnPo/returnPoapi/item?isspMsupId=' + $scope.form.data.reihMsupId;
        
            apiGet.loadData($scope).then(function(dataOut) {

                $scope.data2 = dataOut.data;

                for (var i=0; i< $scope.data2.length; i++) {
                    $scope.data2[i].typeahead = '`';
                }

                $scope.formatLabel2 = function(model) {
                    for (var i=0; i< $scope.data2.length; i++) {
                        if (model === $scope.data2[i].mitmId) {
                            return $scope.data2[i].mitmCode;
                        }
                    }
                };

                $scope.onSelect2 = function ($item, $model, $label) {
                    $scope.$item = $item;
                    $scope.$model = $model;
                    $scope.$label = $label;

                    $scope.form.detail.reidPrice = parseInt($scope.$item.mitmPrice);
                    $scope.form.detail.isspStock = parseInt($scope.$item.isspStock);
                };

                $scope.data3 = dataOut.data;

                for (var i=0; i< $scope.data3.length; i++) {
                    $scope.data3[i].typeahead = '`';
                }

                $scope.formatLabel3 = function(model) {
                    for (var i=0; i< $scope.data3.length; i++) {
                        if (model === $scope.data3[i].mitmId) {
                            return $scope.data3[i].mitmDescription;
                        }
                    }
                };

                $scope.onSelect3 = function ($item, $model, $label) {
                    $scope.$item = $item;
                    $scope.$model = $model;
                    $scope.$label = $label;

                    $scope.form.detail.reidPrice = parseInt($scope.$item.mitmPrice);
                    $scope.form.detail.isspStock = parseInt($scope.$item.isspStock);
                };
            });
        } 
    }
    
    $scope.items();
    
    $scope.$watch('form.data.reihMsupId', function (newVal, oldVal) {
        
        if(newVal > 0) {
            $scope.items();
            $scope.dtl = true;
        }
    });
    
    $scope.urls = 'api/admin/transaction/returnPo/returnPoapi/unit';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data4 = dataOut.data;
        
        for (var i=0; i< $scope.data4.length; i++) {
            $scope.data4[i].typeahead = '`';
        }
  
        $scope.formatLabel4 = function(model) {
            for (var i=0; i< $scope.data4.length; i++) {
                if (model === $scope.data4[i].munitId) {
                    return $scope.data4[i].munitName ;
                }
            }
        };
    });
    
    $scope.remove = function(id) {
        delete $scope.form.data.detail[$scope.formLabel.column.detail[10].id];
    };
    
    $scope.onclear = function(id) {
        $scope.form.detail = {};
        $scope.form.gridEditor.$setPristine();
    };
    
    $scope.ondel = function(id, order) {
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.reihId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        apiDeleteDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();
            delete $scope.form.data.detail[order];
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['reihTotalQty'] = dataOut.data.reihTotalQty;  
                $scope.form.data['reihTotalAmount'] = dataOut.data.reihTotalAmount; 
        
                $scope.url = a;
            });
        });
    };
    
    $scope.onupd = function(id) {
        
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.reihId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        $scope.form.testing = {};    

        $scope.form.testing[$scope.form.detail.reidNoSeq] = $scope.form.detail;

        apiPutDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();

            $scope.tojson = angular.fromJson(dataOut);
            var result={};
            angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

            $scope.form.data.detail = result;
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['reihTotalQty'] = dataOut.data.reihTotalQty;  
                $scope.form.data['reihTotalAmount'] = dataOut.data.reihTotalAmount; 
        
                $scope.url = a;
            });
            
        });
    };
    
    $scope.onnew = function(id) {
        
        var a = $scope.url;
        if (!$scope.form.data.reihId) {
        
            $scope.urls = 'api/' + a + '/detail';
            $scope.url = 'api/' + a + '/header';
            
            apiPostHeader.loadData($scope).then(function(dataOut) { 
                $scope.form.data.reihId = dataOut.data.id;
                //$scope.form.data.detail.reihId = dataOut.data.id;
                $scope.form.data.load = true;
                $scope.form.detail.reidReihId = dataOut.data.id;
                $scope.url = $scope.url = 'api/' + a + '/header/' + $scope.form.data.reihId;
        
                $scope.form.testing = {};    
                $scope.form.detail.reidNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
                $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;
        
                apiDetail.loadData($scope).then(function(dataOut) {
                    $scope.resetItem();

                    $scope.tojson = angular.fromJson(dataOut);
                    var result={};
                    angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

                    $scope.form.data.detail = result;
                    
                    apiPutHeader.loadData($scope).then(function(dataOut) {
                        $scope.form.data['reihTotalQty'] = dataOut.data.reihTotalQty;  
                        $scope.form.data['reihTotalAmount'] = dataOut.data.reihTotalAmount; 
        
                        $scope.url = a;
                    });
                });
            });
        } else {
        
            $scope.urls = 'api/' + a + '/detail';
            $scope.url = 'api/' + a + '/header/' + $scope.form.data.reihId;
        
            $scope.form.detail.reidReihId = $scope.form.data.reihId;

            $scope.form.testing = {};    
            $scope.form.detail.reidNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
            $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;

            apiDetail.loadData($scope).then(function(dataOut) {
                $scope.resetItem();

                $scope.tojson = angular.fromJson(dataOut);
                var result={};
                angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

                $scope.form.data.detail = result;
                
                apiPutHeader.loadData($scope).then(function(dataOut) {
                    $scope.form.data['reihTotalQty'] = dataOut.data.reihTotalQty;  
                    $scope.form.data['reihTotalAmount'] = dataOut.data.reihTotalAmount; 
        
                    $scope.url = a;
                });
            });
        }
    };
}]);

App.controller('transactionInvoiceReturn', ['$scope', '$state', '$stateParams', '$rootScope', '$http', 'transformRequestAsFormPost', 'apiGet', 'apiPostHeader', 'apiPutHeader', 'apiDetail', 'apiPutDetail', 'apiPostDetail', 'apiDeleteDetail', 'dataTransactionGrid', function($scope, $state, $stateParams, $rootScope, $http, transformRequestAsFormPost, apiGet, apiPostHeader, apiPutHeader, apiDetail, apiPutDetail, apiPostDetail, apiDeleteDetail, dataTransactionGrid) {
    
    $scope.$watch('form.data', function() {
        
        if ($scope.form.data) {
            if (!$scope.form.data.reihInvoiceType) {
                $scope.form.data.reihInvoiceType = '2';
            }
            
            if (!$scope.form.data.reihInvoiceDate) {
                $scope.form.data.reihInvoiceDate = new Date();
            }
        }
    });
}]);

App.controller('transactionSalesOrderList', ['$scope', '$state', '$stateParams', '$rootScope', '$http', 'transformRequestAsFormPost', 'apiGet', 'apiPostHeader', 'apiPutHeader', 'apiDetail', 'apiPutDetail', 'apiPostDetail', 'apiDeleteDetail', 'dataTransactionGrid', function($scope, $state, $stateParams, $rootScope, $http, transformRequestAsFormPost, apiGet, apiPostHeader, apiPutHeader, apiDetail, apiPutDetail, apiPostDetail, apiDeleteDetail, dataTransactionGrid) {
    
    $scope.changeqty = function() {
        if(!$scope.form.detail.sodStock) { 
            $scope.form.detail.sodQty = 0;
        } 
        
        if ($scope.form.detail.sodQty >= $scope.form.detail.sodStock) {
            $scope.form.detail.sodQty = $scope.form.detail.sodStock;
        } 
    };
    
    $scope.Math = Math;
    $scope.urls = 'api/admin/transaction/salesOrder/salesOrderapi/salesman';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data = dataOut.data;
        
        for (var i=0; i< $scope.data.length; i++) {
            $scope.data[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.data.length; i++) {
                if (model === $scope.data[i].msamId) {
                    return $scope.data[i].salesNameDescription;
                }
            }
        };
    });
    
    $scope.urls = 'api/admin/transaction/salesOrder/salesOrderapi/paymentType';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data2 = dataOut.data;
        
        for (var i=0; i< $scope.data2.length; i++) {
            $scope.data2[i].typeahead = '`';
        }
  
        $scope.formatLabel2 = function(model) {
            for (var i=0; i< $scope.data2.length; i++) {
                if (model === $scope.data2[i].mpaytId) {
                    return $scope.data2[i].mpaytCodeDescription;
                }
            }
        };
    });
    
    $scope.urls = 'api/admin/transaction/salesOrder/salesOrderapi/customer';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data3 = dataOut.data;
        
        for (var i=0; i< $scope.data3.length; i++) {
            $scope.data3[i].typeahead = '`';
            
            var display = $scope.data3[i].mcustNameDescription;
            if (display.substring(0, 3) == ' - ') {
                $scope.data3[i].mcustNameDescription = display.trim();  
            }
        }
  
        $scope.formatLabel3 = function(model) {
            for (var i=0; i< $scope.data3.length; i++) {
                if (model === $scope.data3[i].mcustId) {
                    return String($scope.data3[i].mcustNameDescription);
                }
            }
        };
        
        $scope.onSelect3 = function ($item, $model, $label) {
            $scope.$item = $item;
            $scope.$model = $model;
            $scope.$label = $label;
            
            $scope.form.data.mcustAddress = $scope.$item.mcustAddress;
    
            $scope.items();
        };
    });
    
    $scope.items = function() {
        
        if ($scope.form && $scope.form.data && $scope.form.data.sohMcustId) {
            $scope.urls = 'api/admin/transaction/salesOrder/salesOrderapi/item?sohMcustId=' + $scope.form.data.sohMcustId;
        } else {
            $scope.urls = 'api/admin/transaction/salesOrder/salesOrderapi/item';
        }

        apiGet.loadData($scope).then(function(dataOut) {

            $scope.data4 = dataOut.data;

            for (var i=0; i< $scope.data4.length; i++) {
                $scope.data4[i].typeahead = '`';
            }

            $scope.formatLabel4 = function(model) {
                for (var i=0; i< $scope.data4.length; i++) {
                    if (model === $scope.data4[i].mitmId) {
                        return $scope.data4[i].mitmCode;
                    }
                }
            };

            $scope.onSelect4 = function ($item, $model, $label) {
                $scope.$item = $item;
                $scope.$model = $model;
                $scope.$label = $label;

                $scope.form.detail.mitmCode = $scope.$item.mitmCode;
                $scope.form.detail.mitmDescription = $scope.$item.mitmDescription;
                $scope.form.detail.sodStock = parseInt($scope.$item.mitmStock);
                $scope.form.detail.sodPrice = parseInt($scope.$item.mitmPriceSell);
            };

            $scope.data5 = dataOut.data;

            for (var i=0; i< $scope.data5.length; i++) {
                $scope.data5[i].typeahead = '`';
            }

            $scope.formatLabel5 = function(model) {
                for (var i=0; i< $scope.data5.length; i++) {
                    if (model === $scope.data5[i].mitmId) {
                        return $scope.data5[i].mitmDescription;
                    }
                }
            };

            $scope.onSelect5 = function ($item, $model, $label) {
                $scope.$item = $item;
                $scope.$model = $model;
                $scope.$label = $label;

                $scope.form.detail.mitmCode = $scope.$item.mitmCode;
                $scope.form.detail.mitmDescription = $scope.$item.mitmDescription;
                $scope.form.detail.sodStock = parseInt($scope.$item.mitmStock);
                $scope.form.detail.sodPrice = parseInt($scope.$item.mitmPriceSell);
            };
        });
    }
    
    $scope.items();
    
    $scope.urls = 'api/admin/transaction/salesOrder/salesOrderapi/unit';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data6 = dataOut.data;
        
        for (var i=0; i< $scope.data6.length; i++) {
            $scope.data6[i].typeahead = '`';
        }
  
        $scope.formatLabel6 = function(model) {
            for (var i=0; i< $scope.data6.length; i++) {
                if (model === $scope.data6[i].munitId) {
                    return $scope.data6[i].munitName ;
                }
            }
        };
    });
    
    $scope.remove = function(id) {
        delete $scope.form.data.detail[$scope.formLabel.column.detail[10].id];
    };
    
    $scope.onclear = function(id) {
        $scope.form.detail = {};
        $scope.form.gridEditor.$setPristine();
    };
    
    $scope.ondel = function(id, order) {
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.sohId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        apiDeleteDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();
            delete $scope.form.data.detail[order];
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['sohTotalQty'] = dataOut.data.sohTotalQty;  
                $scope.form.data['sohSubTotalAmount'] = dataOut.data.sohSubTotalAmount;  
                $scope.form.data['sohTotalAmount'] = dataOut.data.sohTotalAmount; 
        
                $scope.url = a;
            });
        });
    };
    
    $scope.onupd = function(id) {
        
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.sohId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        $scope.form.testing = {};    

        $scope.form.testing[$scope.form.detail.sodNoSeq] = $scope.form.detail;

        apiPutDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();

            $scope.tojson = angular.fromJson(dataOut);
            var result={};
            angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

            $scope.form.data.detail = result;
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['sohTotalQty'] = dataOut.data.sohTotalQty;  
                $scope.form.data['sohSubTotalAmount'] = dataOut.data.sohSubTotalAmount;  
                $scope.form.data['sohTotalAmount'] = dataOut.data.sohTotalAmount; 
        
                $scope.url = a;
            });
            
        });
    };
    
    $scope.onnew = function(id) {
        
        var a = $scope.url;
        if (!$scope.form.data.sohId) {
        
            $scope.urls = 'api/' + a + '/detail';
            $scope.url = 'api/' + a + '/header';
            
            apiPostHeader.loadData($scope).then(function(dataOut) { 
                $scope.form.data.sohId = dataOut.data.id;
                $scope.form.detail.sodSohId = dataOut.data.id;
                $scope.form.data.load = true;
                $scope.url = $scope.url = 'api/' + a + '/header/' + $scope.form.data.sohId;
        
                $scope.form.testing = {};    
                $scope.form.detail.sodNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
                $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;
        
                apiDetail.loadData($scope).then(function(dataOut) {
                    $scope.resetItem();

                    $scope.tojson = angular.fromJson(dataOut);
                    var result={};
                    angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

                    $scope.form.data.detail = result;
                    
                    apiPutHeader.loadData($scope).then(function(dataOut) {
                        $scope.form.data['sohTotalQty'] = dataOut.data.sohTotalQty;  
                        $scope.form.data['sohSubTotalAmount'] = dataOut.data.sohSubTotalAmount;  
                        $scope.form.data['sohTotalAmount'] = dataOut.data.sohTotalAmount; 
        
                        $scope.url = a;
                    });
                });
            });
        } else {
        
            $scope.urls = 'api/' + a + '/detail';
            $scope.url = 'api/' + a + '/header/' + $scope.form.data.sohId;
        
            $scope.form.detail.sodSohId = $scope.form.data.sohId;

            $scope.form.testing = {};    
            $scope.form.detail.sodNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
            $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;

            apiDetail.loadData($scope).then(function(dataOut) {
                $scope.resetItem();

                $scope.tojson = angular.fromJson(dataOut);
                var result={};
                angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

                $scope.form.data.detail = result;
                
                apiPutHeader.loadData($scope).then(function(dataOut) {
                    $scope.form.data['sohTotalQty'] = dataOut.data.sohTotalQty;
                    $scope.form.data['sohSubTotalAmount'] = dataOut.data.sohSubTotalAmount;    
                    $scope.form.data['sohTotalAmount'] = dataOut.data.sohTotalAmount; 
        
                    $scope.url = a;
                });
            });
        }
    };
}]);

App.controller('transactionSalesOrderApproval', ['$scope', '$state', '$stateParams', '$rootScope', '$http', 'transformRequestAsFormPost', 'apiGet', 'apiPostHeader', 'apiPutHeader', 'apiDetail', 'apiPutDetail', 'apiPostDetail', 'apiDeleteDetail', 'dataTransactionGrid', function($scope, $state, $stateParams, $rootScope, $http, transformRequestAsFormPost, apiGet, apiPostHeader, apiPutHeader, apiDetail, apiPutDetail, apiPostDetail, apiDeleteDetail, dataTransactionGrid) {
    
    $scope.urls = 'api/admin/transaction/salesOrder/salesOrderapi/salesman';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data = dataOut.data;
        
        for (var i=0; i< $scope.data.length; i++) {
            $scope.data[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.data.length; i++) {
                if (model === $scope.data[i].msamId) {
                    return $scope.data[i].salesNameDescription;
                }
            }
        };
    });
    
    $scope.urls = 'api/admin/transaction/salesOrder/salesOrderapi/paymentType';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data2 = dataOut.data;
        
        for (var i=0; i< $scope.data2.length; i++) {
            $scope.data2[i].typeahead = '`';
        }
  
        $scope.formatLabel2 = function(model) {
            for (var i=0; i< $scope.data2.length; i++) {
                if (model === $scope.data2[i].mpaytId) {
                    return $scope.data2[i].mpaytCodeDescription;
                }
            }
        };
    });
    
    $scope.urls = 'api/admin/transaction/salesOrder/salesOrderapi/customer';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data3 = dataOut.data;
        
        for (var i=0; i< $scope.data3.length; i++) {
            $scope.data3[i].typeahead = '`';
        }
  
        $scope.formatLabel3 = function(model) {
            for (var i=0; i< $scope.data3.length; i++) {
                if (model === $scope.data3[i].mcustId) {
                    return $scope.data3[i].mcustNameDescription;
                }
            }
        };
        
        $scope.onSelect3 = function ($item, $model, $label) {
            $scope.$item = $item;
            $scope.$model = $model;
            $scope.$label = $label;
            
            $scope.form.data.mcustAddress = $scope.$item.mcustAddress;
        };
    });
    
    $scope.items = function() {
        
        $scope.urls = 'api/admin/transaction/salesOrder/salesOrderapi/item';

        apiGet.loadData($scope).then(function(dataOut) {

            $scope.data4 = dataOut.data;

            for (var i=0; i< $scope.data4.length; i++) {
                $scope.data4[i].typeahead = '`';
            }

            $scope.formatLabel4 = function(model) {
                for (var i=0; i< $scope.data4.length; i++) {
                    if (model === $scope.data4[i].mitmId) {
                        return $scope.data4[i].mitmCode;
                    }
                }
            };

            $scope.onSelect4 = function ($item, $model, $label) {
                $scope.$item = $item;
                $scope.$model = $model;
                $scope.$label = $label;

                $scope.form.detail.mitmCode = $scope.$item.mitmCode;
                $scope.form.detail.mitmDescription = $scope.$item.mitmDescription;
                $scope.form.detail.sodStock = parseInt($scope.$item.mitmStock);
                $scope.form.detail.sodPrice = parseInt($scope.$item.mitmPriceSell);
            };

            $scope.data5 = dataOut.data;

            for (var i=0; i< $scope.data5.length; i++) {
                $scope.data5[i].typeahead = '`';
            }

            $scope.formatLabel5 = function(model) {
                for (var i=0; i< $scope.data5.length; i++) {
                    if (model === $scope.data5[i].mitmId) {
                        return $scope.data5[i].mitmDescription;
                    }
                }
            };

            $scope.onSelect5 = function ($item, $model, $label) {
                $scope.$item = $item;
                $scope.$model = $model;
                $scope.$label = $label;

                $scope.form.detail.mitmCode = $scope.$item.mitmCode;
                $scope.form.detail.mitmDescription = $scope.$item.mitmDescription;
                $scope.form.detail.sodStock = parseInt($scope.$item.mitmStock);
                $scope.form.detail.sodPrice = parseInt($scope.$item.mitmPriceSell);
            };
        });
    }
    
    $scope.items();
    
    $scope.urls = 'api/admin/transaction/salesOrder/salesOrderapi/unit';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data6 = dataOut.data;
        
        for (var i=0; i< $scope.data6.length; i++) {
            $scope.data6[i].typeahead = '`';
        }
  
        $scope.formatLabel6 = function(model) {
            for (var i=0; i< $scope.data6.length; i++) {
                if (model === $scope.data6[i].munitId) {
                    return $scope.data6[i].munitName ;
                }
            }
        };
    });
    
    $scope.onupd = function(id) {
        
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.sohId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        $scope.form.testing = {};    

        $scope.form.testing[$scope.form.detail.sodNoSeq] = $scope.form.detail;

        apiPutDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();

            $scope.tojson = angular.fromJson(dataOut);
            var result={};
            angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

            $scope.form.data.detail = result;
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['sohTotalQty'] = dataOut.data.sohTotalQty;  
                $scope.form.data['sohTotalAmount'] = dataOut.data.sohTotalAmount; 
        
                $scope.url = a;
            });
            
        });
    };
}]);

App.controller('transactionBilling', ['$scope', '$state', '$stateParams', '$rootScope', '$http', 'transformRequestAsFormPost', 'apiGet', 'apiPostHeader', 'apiPutHeader', 'apiDetail', 'apiPutDetail', 'apiPostDetail', 'apiDeleteDetail', 'dataTransactionGrid', function($scope, $state, $stateParams, $rootScope, $http, transformRequestAsFormPost, apiGet, apiPostHeader, apiPutHeader, apiDetail, apiPutDetail, apiPostDetail, apiDeleteDetail, dataTransactionGrid) {
    $scope.regEx = /^(\d*\.?\d*[-+]?)*$/;
    $scope.Math = Math;
    
    $scope.$watch('form.data', function() {
        
        if ($scope.form.data) {
            if (!$scope.form.data.bihDate) {
                var dt = new Date();
//                $scope.form.data.bihDate = dt;
//                $scope.form.data.bihDueDate = dt.getDate() + $scope.form.data.top;

            }
        }
    });
    
    $scope.$watch('form.detail.bidNoSeq', function (newVal, oldVal) {

        if(newVal) {
            if ($scope.form.detail.bidDisc == 0) {
                delete $scope.form.detail.bidDisc;    
            }
        }
        
    });
    
    $scope.urls = 'api/admin/transaction/billing/billingapi/paymentType';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data = dataOut.data;
        
        for (var i=0; i< $scope.data.length; i++) {
            $scope.data[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.data.length; i++) {
                if (model === $scope.data[i].mpaytId) {
                    return $scope.data[i].mpaytCodeDescription;
                }
            }
        };
    });
//    
//    $scope.urls = 'api/admin/transaction/billing/billingapi/customer';
//    
//    apiGet.loadData($scope).then(function(dataOut) {
//        
//        $scope.data3 = dataOut.data;
//        
//        for (var i=0; i< $scope.data3.length; i++) {
//            $scope.data3[i].typeahead = '`';
//        }
//  
//        $scope.formatLabel3 = function(model) {
//            for (var i=0; i< $scope.data3.length; i++) {
//                if (model === $scope.data3[i].mcustId) {
//                    return $scope.data3[i].mcustNameDescription;
//                }
//            }
//        };
//        
//        $scope.onSelect3 = function ($item, $model, $label) {
//            $scope.$item = $item;
//            $scope.$model = $model;
//            $scope.$label = $label;
//            
//            $scope.form.data.mcustAddress = $scope.$item.mcustAddress;
//        };
//    });
    
    $scope.onupd = function(id) {
        
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.bihId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        $scope.form.testing = {};    

        $scope.form.testing[$scope.form.detail.bidNoSeq] = $scope.form.detail;

        apiPutDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();

            $scope.tojson = angular.fromJson(dataOut);
            var result={};
            angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

            $scope.form.data.detail = result;
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['bihTotalQty'] = dataOut.data.bihTotalQty;  
                $scope.form.data['bihTotalAmount'] = dataOut.data.bihTotalAmount; 
                $scope.form.data['bihSubTotalAmount'] = dataOut.data.bihSubTotalAmount; 
                $scope.form.data['bihTotalPpn'] = dataOut.data.bihTotalPpn; 
                $scope.form.data['bihTotalDiscount'] = dataOut.data.bihTotalDiscount; 
                $scope.form.data['bihTotalAmount'] = dataOut.data.bihTotalAmount; 
                $scope.form.data['bihRemainingAmount'] = dataOut.data.bihRemainingAmount; 
        
                $scope.url = a;
            });
            
        });
    };
}]);

App.controller('warehouseReceive', ['$scope', '$state', '$stateParams', '$rootScope', '$http', 'transformRequestAsFormPost', 'apiGet', 'apiPostHeader', 'apiPutHeader', 'apiDetail', 'apiPutDetail', 'apiPostDetail', 'apiDeleteDetail', 'dataTransactionGrid', function($scope, $state, $stateParams, $rootScope, $http, transformRequestAsFormPost, apiGet, apiPostHeader, apiPutHeader, apiDetail, apiPutDetail, apiPostDetail, apiDeleteDetail, dataTransactionGrid) {
          
    var pending;
    var pendingCal;
    var pendingVar;
    var received;
    
    $scope.$watch('form.detail.ridtNoSeq', function(newVal, oldVal) {
        
        if(newVal) {
            
            pending = parseFloat($scope.form.detail.ridtQtyPending);
            if ($scope.form.detail.ridtQtyReceived > 0) {
                received = parseFloat($scope.form.detail.ridtQtyReceived);  
            } else {
                received = 0;
            }
            
            if (received == 0) {
                pendingCal = Math.abs(pending);
            } else {
                pendingCal = pending + received;
            }

            if (pending <= 0) {
                $scope.form.detail.ridtQtyPending = 0;
            } 
        } 
        
    });
    
    $scope.changeqty = function() {
        var r;
        var subStr;
        if(!$scope.form.detail.ridtQtyReceived) { 
            //$scope.form.detail.ridtQtyReceived = '';
        } 
        
        $scope.form.detail.ridtQtyPending = parseInt(Math.abs(pendingCal) - $scope.form.detail.ridtQtyReceived);
        //pendingVar = parseInt(Math.abs(pending) - $scope.form.detail.ridtQtyReceived);
        
        if ($scope.form.detail.ridtQtyReceived >= received && pending < 0) {
            $scope.form.detail.ridtQtyReceived = received;
        } 
        
        if ($scope.form.detail.ridtQtyPending <= 0 && pending >= 0) {
            $scope.form.detail.ridtQtyReceived = $scope.form.detail.ridtQtyReceived + $scope.form.detail.ridtQtyPending;
        } 

        if ($scope.form.detail.ridtQtyPending <= 0 || !$scope.form.detail.ridtQtyPending) {
            $scope.form.detail.ridtQtyPending = 0;
        } 
    };

//    $scope.$watch('form.detail.ridtQtyReceived', function(newVal, oldVal) {
//        
//        if(newVal >= 0) {
//
//            //$scope.form.detail.ridtQtyPending = parseInt(Math.abs(pendingCal) - $scope.form.detail.ridtQtyReceived);
//            //pendingVar = parseInt(Math.abs(pending) - $scope.form.detail.ridtQtyReceived);
//
//            if ($scope.form.detail.ridtQtyReceived >= received) {
//                $scope.form.detail.ridtQtyReceived = received;
//            } 
//            
//            if ($scope.form.detail.ridtQtyPending <= 0) {
//                //$scope.form.detail.ridtQtyPending = 0;
//            } 
//
//        }
//    });
    
    $scope.$watch('form.data', function() {
        
        if ($scope.form.data) {

            if (!$scope.form.data.rihdDate) {
                $scope.form.data.rihdDate = new Date();

            }
        
            $scope.form.detail = {};
        }
    });
    
    
    $scope.$watch('form.data.rihdId', function (newVal, oldVal) {

        if(newVal) {
            $scope.urls = 'api/admin/transaction/warehouse/inbound/receive/Receiveapi/void?rihdId=' + $scope.form.data.rihdId;
    
            apiGet.loadData($scope).then(function(dataOut) {
                $scope.voidPermission = dataOut.data[0].void;
            });
        }
    });
    
    
    $scope.onclear = function(id) {
        $scope.form.detail = {};
        $scope.form.gridEditor.$setPristine();
    };
    
    $scope.onupd = function(id) {
        
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.rihdId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        $scope.form.testing = {};    

        $scope.form.testing[$scope.form.detail.ridtNoSeq] = $scope.form.detail;

        apiPutDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();

            $scope.tojson = angular.fromJson(dataOut);
            var result={};
            angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

            $scope.form.data.detail = result;
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['rihdTotalQty'] = dataOut.data.rihdTotalQty;  
                $scope.form.data['rihdTotalAmount'] = dataOut.data.rihdTotalAmount;
            
                $scope.url = a;
            }); 
            
        });
    };
    
}]);

App.controller('warehouseStoring', ['$scope', '$state', '$stateParams', '$rootScope', '$http', 'transformRequestAsFormPost', 'apiGet', 'apiPostHeader', 'apiPutHeader', 'apiDetail', 'apiPutDetail', 'apiPostDetail', 'apiDeleteDetail', 'dataTransactionGrid', function($scope, $state, $stateParams, $rootScope, $http, transformRequestAsFormPost, apiGet, apiPostHeader, apiPutHeader, apiDetail, apiPutDetail, apiPostDetail, apiDeleteDetail, dataTransactionGrid) {
    
    $scope.$watch('form.data', function() {
        
        if ($scope.form.data) {
            if (!$scope.form.data.sthDate) {
                $scope.form.data.sthDate = new Date();

            }
        }
    });
    
    $scope.urls = 'api/admin/transaction/warehouse/inbound/storing/storingapi/location';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data = dataOut.data;
        
        for (var i=0; i< $scope.data.length; i++) {
            $scope.data[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.data.length; i++) {
                if (model === $scope.data[i].mlocId) {
                    return $scope.data[i].mlocDescription;
                }
            }
        };
    });
    
    $scope.onclear = function(id) {
        $scope.form.detail = {};
        $scope.form.gridEditor.$setPristine();
    };
    
    $scope.onupd = function(id) {
        
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.sthId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        $scope.form.testing = {};    

        $scope.form.testing[$scope.form.detail.stdSeqNo] = $scope.form.detail;

        apiPutDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();

            $scope.tojson = angular.fromJson(dataOut);
            var result={};
            angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

            $scope.form.data.detail = result;
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['sthTotalQty'] = dataOut.data.sthTotalQty;  
                $scope.form.data['sthTotalAmount'] = dataOut.data.sthTotalAmount; 
        
                $scope.url = a;
            });
            
        });
    };
    
}]);

App.controller('warehouseReceiveWarehouse', ['$scope', '$state', '$stateParams', '$rootScope', '$http', 'transformRequestAsFormPost', 'apiGet', 'apiPostHeader', 'apiPutHeader', 'apiDetail', 'apiPutDetail', 'apiPostDetail', 'apiDeleteDetail', 'dataTransactionGrid', function($scope, $state, $stateParams, $rootScope, $http, transformRequestAsFormPost, apiGet, apiPostHeader, apiPutHeader, apiDetail, apiPutDetail, apiPostDetail, apiDeleteDetail, dataTransactionGrid) {
    
    
    $scope.$watch('form.data', function() {
        
        if ($scope.form.data) {
            if (!$scope.form.data.rihdDate) {
                $scope.form.data.rihdDate = new Date();

            }
        }
    });
    
    var a = $scope.url;
    
    $scope.items = function() {
        
        $scope.urls = 'api/admin/transaction/warehouse/inbound/ReceiveByWarehouse/ReceiveByWarehouseapi/item';

        apiGet.loadData($scope).then(function(dataOut) {

            $scope.data = dataOut.data;

            for (var i=0; i< $scope.data.length; i++) {
                $scope.data[i].typeahead = '`';
            }

            $scope.formatLabel = function(model) {
                for (var i=0; i< $scope.data.length; i++) {
                    if (model === $scope.data[i].mitmId) {
                        return String($scope.data[i].mitmBarcode);
                    } else if (model === $scope.data[i].mitmBarcode) {
                        return String($scope.data[i].mitmBarcode);
                    }
                }
            };

            $scope.onSelect = function ($item, $model, $label) {
                $scope.$item = $item;
                $scope.$model = $model;
                $scope.$label = $label;

                $scope.form.detail.mitmDescription = $scope.$item.mitmDescription;
                //$scope.onnew();
            };
        });
    }
    
    $scope.items();
    
    $scope.onclear = function(id) {
        $scope.form.detail = {};
        $scope.form.gridEditor.$setPristine();
    };
    
    $scope.onupd = function(id) {
        
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.rihdId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        $scope.form.testing = {};    

        $scope.form.testing[$scope.form.detail.ridtNoSeq] = $scope.form.detail;

        apiPutDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();

            $scope.tojson = angular.fromJson(dataOut);
            var result={};
            angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

            $scope.form.data.detail = result;
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['rihdTotalQty'] = dataOut.data.rihdTotalQty;  
                $scope.form.data['rihdTotalAmount'] = dataOut.data.rihdTotalAmount; 
        
                $scope.url = a;
            });
            
        });
    };
    
    $scope.onnew = function(id) {
        
        var a = $scope.url;
        if (!$scope.form.data.rihdId) {
        
            $scope.urls = 'api/' + a + '/detail';
            $scope.url = 'api/' + a + '/header';
            
            apiPostHeader.loadData($scope).then(function(dataOut) { 
                $scope.form.data.rihdId = dataOut.data.id;
                $scope.form.detail.ridtRihdId = dataOut.data.id;
                $scope.form.data.load = true;
                $scope.url = $scope.url = 'api/' + a + '/header/' + $scope.form.data.rihdId;
        
                $scope.form.testing = {};    
                $scope.form.detail.ridtNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
                $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;
        
                apiDetail.loadData($scope).then(function(dataOut) {
                    $scope.resetItem();

                    $scope.tojson = angular.fromJson(dataOut);
                    var result={};
                    angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

                    $scope.form.data.detail = result;
                    
                    apiPutHeader.loadData($scope).then(function(dataOut) {
                        $scope.form.data['rihdTotalQty'] = dataOut.data.rihdTotalQty;  
                        $scope.form.data['rihdTotalAmount'] = dataOut.data.rihdTotalAmount; 
        
                        $scope.url = a;
                    });
                });
            });
        } else {
        
            $scope.urls = 'api/' + a + '/detail';
            $scope.url = 'api/' + a + '/header/' + $scope.form.data.rihdId;
        
            $scope.form.detail.ridtRihdId = $scope.form.data.rihdId;

            $scope.form.testing = {};    
            $scope.form.detail.ridtNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
            $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;

            apiDetail.loadData($scope).then(function(dataOut) {
                $scope.resetItem();

                $scope.tojson = angular.fromJson(dataOut);
                var result={};
                angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

                $scope.form.data.detail = result;
                
                apiPutHeader.loadData($scope).then(function(dataOut) {
                    $scope.form.data['rihdTotalQty'] = dataOut.data.rihdTotalQty;  
                    $scope.form.data['rihdTotalAmount'] = dataOut.data.rihdTotalAmount; 
        
                    $scope.url = a;
                });
            });
        }
    };
    
}]);

App.controller('warehousePicking', ['$scope', '$state', '$stateParams', '$rootScope', '$http', 'transformRequestAsFormPost', 'apiGet', 'apiPostHeader', 'apiPutHeader', 'apiDetail', 'apiPutDetail', 'apiPostDetail', 'apiDeleteDetail', 'dataTransactionGrid', '$timeout', function($scope, $state, $stateParams, $rootScope, $http, transformRequestAsFormPost, apiGet, apiPostHeader, apiPutHeader, apiDetail, apiPutDetail, apiPostDetail, apiDeleteDetail, dataTransactionGrid, $timeout) {
    
    $scope.$watch('form.data', function() {
        
        if ($scope.form.data) {
            
            if (!$scope.form.data.pichDate) {
                $scope.form.data.pichDate = new Date();
            }
        }
    });
    
    $scope.changeqty = function() {
        if(!$scope.form.detail.picdQtyStock) { 
            $scope.form.detail.picdQty = 0;
        } 
        
        if ($scope.form.detail.picdQty >= $scope.form.detail.picdQtyStock && $scope.form.detail.picdQtyStock < $scope.form.detail.picdSoQtyPicking) {
            $scope.form.detail.picdQty = $scope.form.detail.picdQtyStock;
        } 
        
        if ($scope.form.detail.picdQty >= $scope.form.detail.picdSoQtyPicking && $scope.form.detail.picdQtyStock > $scope.form.detail.picdSoQtyPicking) {
            $scope.form.detail.picdQty = $scope.form.detail.picdSoQtyPicking;
        } 
        
        if ($scope.form.detail.picdQty >= $scope.form.detail.picdSoQtyPicking && $scope.form.detail.picdQtyStock == $scope.form.detail.picdSoQtyPicking) {
            $scope.form.detail.picdQty = $scope.form.detail.picdSoQtyPicking;
        } 
        
        if ($scope.form.detail.picdQty < 0) {
            $scope.form.detail.picdQty = 0;   
        }
    };
    
    $scope.urls = 'api/admin/transaction/warehouse/outbound/picking/pickingapi/itemAll';

    apiGet.loadData($scope).then(function(dataOut) {

        $scope.itemAll = dataOut.data;

        $scope.formatItemCode = function(model) {
            for (var i=0; i< $scope.itemAll.length; i++) {
                if (model === $scope.itemAll[i].mitmId) {
                    return $scope.itemAll[i].mitmCode;
                }
            }
        };

        $scope.formatItemDesc = function(model) {
            for (var i=0; i< $scope.itemAll.length; i++) {
                if (model === $scope.itemAll[i].mitmId) {
                    return $scope.itemAll[i].mitmDescription;
                }
            }
        };
        
    });
    
    $scope.urls = 'api/admin/transaction/warehouse/outbound/picking/pickingapi/supplierAll';

    apiGet.loadData($scope).then(function(dataOut) {

        $scope.supplierAll = dataOut.data;

        $scope.formatSupplierAll = function(model) {
            for (var i=0; i< $scope.supplierAll.length; i++) {
                if (model === $scope.supplierAll[i].msupId) {
                    return $scope.supplierAll[i].msupName;
                }
            }
        };
        
    });
    
    $scope.urls = 'api/admin/transaction/warehouse/outbound/picking/pickingapi/locationAll';

    apiGet.loadData($scope).then(function(dataOut) {

        $scope.locationAll = dataOut.data;

        $scope.formatLocationAll = function(model) {
            for (var i=0; i< $scope.locationAll.length; i++) {
                if (model === $scope.locationAll[i].mlocId) {
                    return $scope.locationAll[i].mlocDescription;
                }
            }
        };
        
    });
    
    $scope.urls = 'api/admin/Transaction/Warehouse/Outbound/Picking/Pickingapi/detailEmployee';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data = dataOut.data;
        
        for (var i=0; i< $scope.data.length; i++) {
            $scope.data[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.data.length; i++) {
                if (model === $scope.data[i].msemId) {
                    return $scope.data[i].msemName;
                }
            }
        };
    });
    
    $scope.so = function() {
        if ($scope.form && $scope.form.data && $scope.form.data.pichId) {
            $scope.urls = 'api/admin/transaction/warehouse/outbound/picking/pickingapi/so?pichId=' + $scope.form.data.pichId;
        } else {
            $scope.urls = 'api/admin/transaction/warehouse/outbound/picking/pickingapi/so';
        }
        
        apiGet.loadData($scope).then(function(dataOut) {
        
            $scope.data1 = dataOut.data;

            for (var i=0; i< $scope.data1.length; i++) {
                $scope.data1[i].typeahead = '`';
            }

            $scope.formatLabel1 = function(model) {
                for (var i=0; i< $scope.data1.length; i++) {
                    if (model === $scope.data1[i].sohId) {
                        return $scope.data1[i].sohRefNo;
                    }
                }
            };

            $scope.formatLabel12 = function(model) {
                for (var i=0; i< $scope.data1.length; i++) {
                    if (model === $scope.data1[i].sohId) {
                        return $scope.data1[i].sohDate;
                    }
                }
            };

            $scope.onSelect1 = function ($item, $model, $label) {
                $scope.$item = $item;
                $scope.$model = $model;
                $scope.$label = $label;

                $scope.form.data.pichSohId = $scope.$item.sohId;
            };
        
            if ($scope.form.data.pichSohId) {
                var pichSohId = $scope.form.data.pichSohId;
                delete $scope.form.data.pichSohId;

                $timeout(function() {
                    $scope.form.data.pichSohId = pichSohId;
                }, 1);
            }
        });
    };
    
    $scope.so();
    
    $scope.$watch('form.data.pichId', function(newVal, oldVal) {
        
        if (newVal) {
    
            $scope.so();
            $scope.items();
            $scope.supps();
            $scope.locs();
            
        }
        
    });
    
    $scope.supps = function() {
        if ($scope.form && $scope.form.detail && $scope.form.detail.picdMitmId && $scope.form.data.pichId) {
            $scope.urls = 'api/admin/transaction/warehouse/outbound/picking/pickingapi/supplier?mitmId=' + $scope.form.detail.picdMitmId + '&pichId=' + $scope.form.data.pichId;
        } else if ($scope.form && $scope.form.detail && $scope.form.detail.picdMitmId) {
            $scope.urls = 'api/admin/transaction/warehouse/outbound/picking/pickingapi/supplier?mitmId=' + $scope.form.detail.picdMitmId;
        } else {
            $scope.urls = 'api/admin/transaction/warehouse/outbound/picking/pickingapi/supplierAll';
        }

        apiGet.loadData($scope).then(function(dataOut) {

            $scope.data2 = dataOut.data;

            for (var i=0; i< $scope.data2.length; i++) {
                $scope.data2[i].typeahead = '`';
            }

            $scope.formatLabel2 = function(model) {
                for (var i=0; i< $scope.data2.length; i++) {
                    if (model === $scope.data2[i].msupId) {
                        return $scope.data2[i].msupCodeName;
                    }
                }
            };

            $scope.onSelect2 = function ($item, $model, $label) {
                $scope.$item = $item;
                $scope.$model = $model;
                $scope.$label = $label;

                $scope.form.data.msupAddress = $scope.$item.msupAddress;
                $scope.form.data.msupTelp = $scope.$item.msupTelp;
                $scope.form.data.msupFax = $scope.$item.msupFax;
                
                delete $scope.form.detail.picdMlocId;
            };
        });
    }
    
    $scope.supps();
    
    $scope.$watch('form.detail.picdMitmId', function(newVal, oldVal) {
        
        if (newVal) {
            $scope.supps();
        }
    });
    
    $scope.items = function() {
        
        if ($scope.form && $scope.form.data && $scope.form.data.pichSohId && $scope.form.data.pichId) {
            $scope.urls = 'api/admin/transaction/warehouse/outbound/picking/pickingapi/soItem?sodSohId=' + $scope.form.data.pichSohId + '&pichId=' + $scope.form.data.pichId; 
        } else if ($scope.form && $scope.form.data && $scope.form.data.pichSohId) {
            $scope.urls = 'api/admin/transaction/warehouse/outbound/picking/pickingapi/soItem?sodSohId=' + $scope.form.data.pichSohId;
        } else {
            $scope.urls = 'api/admin/transaction/warehouse/outbound/picking/pickingapi/itemAll';
        }

        apiGet.loadData($scope).then(function(dataOut) {

            $scope.data3 = dataOut.data;

            for (var i=0; i< $scope.data3.length; i++) {
                $scope.data3[i].typeahead = '`';
            }

            $scope.formatLabel3 = function(model) {
                for (var i=0; i< $scope.data3.length; i++) {
                    if (model === $scope.data3[i].mitmId) {
                        return $scope.data3[i].mitmCode;
                    }
                }
            };

            $scope.onSelect3 = function ($item, $model, $label) {
                $scope.$item = $item;
                $scope.$model = $model;
                $scope.$label = $label;
 
                $scope.form.detail.picdSoQty = $scope.$item.sodQty;
                $scope.form.detail.picdSoQtyPicking = $scope.$item.sodQtyPicking;
                $scope.form.detail.picdMunitId = $scope.$item.sodMunitId;
                $scope.form.detail.picdSodId  = $scope.$item.sodId;
                
                delete $scope.form.detail.picdMsupId;
            };

            $scope.data4 = dataOut.data;

            for (var i=0; i< $scope.data4.length; i++) {
                $scope.data4[i].typeahead = '`';
            }

            $scope.formatLabel4 = function(model) {
                for (var i=0; i< $scope.data4.length; i++) {
                    if (model === $scope.data4[i].mitmId) {
                        return $scope.data4[i].mitmDescription;
                    }
                }
            };

            $scope.onSelect4 = function ($item, $model, $label) {
                $scope.$item = $item;
                $scope.$model = $model;
                $scope.$label = $label;

                $scope.form.detail.picdSoQty = $scope.$item.sodQty;
                $scope.form.detail.picdSoQtyPicking = $scope.$item.sodQtyPicking;
                $scope.form.detail.picdMunitId = $scope.$item.sodMunitId;
                $scope.form.detail.picdSodId  = $scope.$item.sodId;
                
                delete $scope.form.detail.picdMsupId;
            }; 
        });
    }
    
    $scope.items();
    
    $scope.urls = 'api/admin/transaction/warehouse/outbound/picking/pickingapi/unit';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data5 = dataOut.data;
        
        for (var i=0; i< $scope.data5.length; i++) {
            $scope.data5[i].typeahead = '`';
        }
  
        $scope.formatLabel5 = function(model) {
            for (var i=0; i< $scope.data5.length; i++) {
                if (model === $scope.data5[i].munitId) {
                    return $scope.data5[i].munitName ;
                }
            }
        };
    });
    
    $scope.locs = function() {
        
        if ($scope.form && $scope.form.detail && $scope.form.detail.picdMitmId && $scope.form.detail.picdMsupId && $scope.form.data.pichId) {
            $scope.urls = 'api/admin/Transaction/warehouse/outbound/picking/pickingapi/location?mitmId=' + $scope.form.detail.picdMitmId + '&msupId=' + $scope.form.detail.picdMsupId + '&pichId=' + $scope.form.data.pichId;
        } else if ($scope.form && $scope.form.detail && $scope.form.detail.picdMitmId && $scope.form.detail.picdMsupId) {
            $scope.urls = 'api/admin/Transaction/warehouse/outbound/picking/pickingapi/location?mitmId=' + $scope.form.detail.picdMitmId + '&msupId=' + $scope.form.detail.picdMsupId;
        } else {
            $scope.urls = 'api/admin/transaction/warehouse/outbound/picking/pickingapi/locationAll';
        }

        apiGet.loadData($scope).then(function(dataOut) {

            $scope.data6 = dataOut.data;

            for (var i=0; i< $scope.data6.length; i++) {
                $scope.data6[i].typeahead = '`';
            }

            $scope.formatLabel6 = function(model) {
                for (var i=0; i< $scope.data6.length; i++) {
                    if (model === $scope.data6[i].mlocId) {
                        return $scope.data6[i].mlocDescription;
                    }
                }
            };
            
            $scope.onSelect6 = function ($item, $model, $label) {
                $scope.$item = $item;
                $scope.$model = $model;
                $scope.$label = $label;

                $scope.form.detail.picdQtyStock = $scope.$item.ilsQty;
                
                delete $scope.form.detail.picdQty;
            };
        });
        
    }
    
    $scope.locs();
    
    $scope.$watch('form.detail.picdMsupId', function(newVal, oldVal) {
        
        if (newVal) {
            $scope.locs();
        }
    });
    
    $scope.$watch('form.detail.picdId', function(newVal, oldVal) {
        
        if (newVal) {
            $scope.urls = 'api/admin/transaction/warehouse/outbound/picking/detail/' + newVal;
            
            apiGet.loadData($scope).then(function(dataOut) {
                var dt = angular.fromJson(dataOut.data['1']);
                $scope.form.detail.picdSoQtyPicking = dt.picdSoQtyPicking;
            });
        }
    });
    
    $scope.$watch('form.data.pichSohId', function (newVal, oldVal) {
        
        if(newVal > 0) {
            $scope.items();
        }
        
        $scope.form.detail = {};
    });
    
    $scope.onclear = function(id) {
        $scope.form.detail = {};
        $scope.form.gridEditor.$setPristine();
    };
    
    $scope.onupd = function(id) {
        
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.pichId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        $scope.form.testing = {};    

        $scope.form.testing[$scope.form.detail.picdNoSeq] = $scope.form.detail;

        apiPutDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();

            $scope.tojson = angular.fromJson(dataOut);
            var result={};
            angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

            $scope.form.data.detail = result;
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['pichTotalQty'] = dataOut.data.pichTotalQty;  
                $scope.form.data['pichTotalAmount'] = dataOut.data.pichTotalAmount; 
        
                $scope.url = a;
            });
            
        });
    };
    
    $scope.ondel = function(id, order) {
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.pichId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        apiDeleteDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();
            delete $scope.form.data.detail[order];
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['pichTotalQty'] = dataOut.data.pichTotalQty;  
                $scope.form.data['pichTotalAmount'] = dataOut.data.pichTotalAmount; 
                $scope.url = a;
            });
        });
    };
    
    $scope.onnew = function(id) {
        
        var a = $scope.url;
        if (!$scope.form.data.pichId) {
        
            $scope.urls = 'api/' + $scope.url + '/detail';
            $scope.url = 'api/' + a + '/header';
            
            apiPostHeader.loadData($scope).then(function(dataOut) { 
                $scope.form.data.pichId = dataOut.data.id;
                //$scope.form.data.detail.pichId = dataOut.data.id;
                $scope.form.data.load = true;
                $scope.form.detail.picdPichId = dataOut.data.id;
                $scope.url = $scope.url = 'api/' + a + '/header/' + $scope.form.data.pichId;
        
                $scope.form.testing = {};    
                $scope.form.detail.picdNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
                $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;
        
                apiDetail.loadData($scope).then(function(dataOut) {
                    $scope.resetItem();

                    $scope.tojson = angular.fromJson(dataOut);
                    var result={};
                    angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

                    $scope.form.data.detail = result;
                    
                    apiPutHeader.loadData($scope).then(function(dataOut) {
                        $scope.form.data['pichTotalQty'] = dataOut.data.pichTotalQty;  
                        $scope.form.data['pichTotalAmount'] = dataOut.data.pichTotalAmount; 
                        $scope.url = a;
                    });
                });
            });
        } else {
        
            $scope.urls = 'api/' + $scope.url + '/detail';
            $scope.url = 'api/' + a + '/header/' + $scope.form.data.pichId;
        
            $scope.form.detail.picdPichId = $scope.form.data.pichId;

            $scope.form.testing = {};    
            $scope.form.detail.picdNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
            $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;

            apiDetail.loadData($scope).then(function(dataOut) {
                $scope.resetItem();

                $scope.tojson = angular.fromJson(dataOut);
                var result={};
                angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

                $scope.form.data.detail = result;
                
                apiPutHeader.loadData($scope).then(function(dataOut) {
                    $scope.form.data['pichTotalQty'] = dataOut.data.pichTotalQty;  
                    $scope.form.data['pichTotalAmount'] = dataOut.data.pichTotalAmount; 
                    $scope.url = a;
                });
            });
        }
        $scope.formItem = false;
    };
}]);

App.controller('warehousePacking', ['$scope', '$state', '$stateParams', '$rootScope', '$http', 'transformRequestAsFormPost', 'apiGet', 'apiPostHeader', 'apiPutHeader', 'apiDetail', 'apiPutDetail', 'apiPostDetail', 'apiDeleteDetail', 'dataTransactionGrid', '$timeout', function($scope, $state, $stateParams, $rootScope, $http, transformRequestAsFormPost, apiGet, apiPostHeader, apiPutHeader, apiDetail, apiPutDetail, apiPostDetail, apiDeleteDetail, dataTransactionGrid, $timeout   ) {
    
    $scope.changeqty = function() {
        if(!$scope.form.detail.pacdPackingQty) { 
            $scope.form.detail.pacdQty = 0;
        } 
        
        if ($scope.form.detail.pacdQty >= $scope.form.detail.pacdPickingQty) {
            $scope.form.detail.pacdQty = $scope.form.detail.pacdPickingQty;
        } 
        
        if ($scope.form.detail.pacdQty < 0) {
            $scope.form.detail.pacdQty = 0;   
        }
    };
    
    $scope.urls = 'api/admin/transaction/warehouse/outbound/packing/packingapi/itemAll';

    apiGet.loadData($scope).then(function(dataOut) {

        $scope.itemAll = dataOut.data;

        $scope.formatItemCode = function(model) {
            for (var i=0; i< $scope.itemAll.length; i++) {
                if (model === $scope.itemAll[i].mitmId) {
                    return $scope.itemAll[i].mitmCode;
                }
            }
        };

        $scope.formatItemDesc = function(model) {
            for (var i=0; i< $scope.itemAll.length; i++) {
                if (model === $scope.itemAll[i].mitmId) {
                    return $scope.itemAll[i].mitmDescription;
                }
            }
        };
        
    });
    
    $scope.so = function() {
        if ($scope.form && $scope.form.data && $scope.form.data.pachId) {
            $scope.urls = 'api/admin/transaction/warehouse/outbound/packing/packingapi/so?pachId=' + $scope.form.data.pachId;
        } else {
            $scope.urls = 'api/admin/transaction/warehouse/outbound/packing/packingapi/so';
        }
        
        apiGet.loadData($scope).then(function(dataOut) {
        
            $scope.data1 = dataOut.data;

            for (var i=0; i< $scope.data1.length; i++) {
                $scope.data1[i].typeahead = '`';
            }

            $scope.formatLabel1 = function(model) {
                for (var i=0; i< $scope.data1.length; i++) {
                    if (model === $scope.data1[i].sohId) {
                        return $scope.data1[i].sohRefNo;
                    }
                }
            };

            $scope.formatLabel12 = function(model) {
                for (var i=0; i< $scope.data1.length; i++) {
                    if (model === $scope.data1[i].sohId) {
                        return $scope.data1[i].sohDate;
                    }
                }
            };

            $scope.onSelect1 = function ($item, $model, $label) {
                $scope.$item = $item;
                $scope.$model = $model;
                $scope.$label = $label;

                $scope.form.data.pachSohId = $scope.$item.sohId;
            };
        
            if ($scope.form.data.pachSohId) {
                var pachSohId = $scope.form.data.pachSohId;
                delete $scope.form.data.pachSohId;

                $timeout(function() {
                    $scope.form.data.pachSohId = pachSohId;
                }, 1);
            }
        });
    };
    
    $scope.so();
    
    $scope.$watch('form.data.pachId', function(newVal, oldVal) {
        
        if (newVal) {
    
            $scope.so();
            $scope.items();
            
        }
        
    });
    
//    $scope.urls = 'api/admin/Transaction/Warehouse/Outbound/Packing/Packingapi/so';
//    
//    apiGet.loadData($scope).then(function(dataOut) {
//        
//        $scope.data1 = dataOut.data;
//        
//        for (var i=0; i< $scope.data1.length; i++) {
//            $scope.data1[i].typeahead = '`';
//        }
//  
//        $scope.formatLabel1 = function(model) {
//            for (var i=0; i< $scope.data1.length; i++) {
//                if (model === $scope.data1[i].sohId) {
//                    return $scope.data1[i].sohRefNo;
//                }
//            }
//        };
//        
//        $scope.onSelect1 = function ($item, $model, $label) {
//            $scope.$item = $item;
//            $scope.$model = $model;
//            $scope.$label = $label;
//
//            $scope.form.data.sohDate = $scope.$item.sohDate;
//        };
//        
//        $scope.formatLabel12 = function(model) {
//            for (var i=0; i< $scope.data1.length; i++) {
//                if (model === $scope.data1[i].sohId) {
//                    return $scope.data1[i].sohDate;
//                }
//            }
//        };
//        
//        $scope.onSelect12 = function ($item, $model, $label) {
//            $scope.$item = $item;
//            $scope.$model = $model;
//            $scope.$label = $label;
//
//            $scope.form.data.sohDate = $scope.$item.sohDate;
//        };
//        
//        if ($scope.form.data.pachSohId) {
//            var pachSohId = $scope.form.data.pachSohId;
//            delete $scope.form.data.pachSohId;
//
//            $timeout(function() {
//                $scope.form.data.pachSohId = pachSohId;
//            }, 1);
//        }
//    });
    
    $scope.items = function() {
        
        if ($scope.form && $scope.form.data && $scope.form.data.pachSohId && $scope.form.data.pachId) {
            $scope.urls = 'api/admin/transaction/warehouse/outbound/Packing/Packingapi/soItem?sodSohId=' + $scope.form.data.pachSohId + '&pachId=' + $scope.form.data.pachId; 
        } else if ($scope.form && $scope.form.data && $scope.form.data.pachSohId) {
            $scope.urls = 'api/admin/transaction/warehouse/outbound/Packing/Packingapi/soItem?sodSohId=' + $scope.form.data.pachSohId;
        } else {
            $scope.urls = 'api/admin/transaction/warehouse/outbound/Packing/Packingapi/soItem';
        }

        apiGet.loadData($scope).then(function(dataOut) {

            $scope.data3 = dataOut.data;

            for (var i=0; i< $scope.data3.length; i++) {
                $scope.data3[i].typeahead = '`';
            }

            $scope.formatLabel3 = function(model) {
                for (var i=0; i< $scope.data3.length; i++) {
                    if (model === $scope.data3[i].mitmId) {
                        return $scope.data3[i].mitmCode;
                    }
                }
            };

            $scope.onSelect3 = function ($item, $model, $label) {
                $scope.$item = $item;
                $scope.$model = $model;
                $scope.$label = $label;

                $scope.form.detail.pacdPickingQty = $scope.$item.sodQtyPicking;
                $scope.form.detail.pacdPackingQty = $scope.$item.sodQtyPacking;
            };

            $scope.data4 = dataOut.data;

            for (var i=0; i< $scope.data4.length; i++) {
                $scope.data4[i].typeahead = '`';
            }

            $scope.formatLabel4 = function(model) {
                for (var i=0; i< $scope.data4.length; i++) {
                    if (model === $scope.data4[i].mitmId) {
                        return $scope.data4[i].mitmDescription;
                    }
                }
            };

            $scope.onSelect4 = function ($item, $model, $label) {
                $scope.$item = $item;
                $scope.$model = $model;
                $scope.$label = $label;

                $scope.form.detail.pacdPickingQty = $scope.$item.sodQtyPicking;
                $scope.form.detail.pacdPackingQty = $scope.$item.sodQtyPacking;
            };
        });
    }
    
    $scope.items();
    
    $scope.$watch('form.data', function() {
        
        if ($scope.form.data) {

            if (!$scope.form.data.pachDate) {
                $scope.form.data.pachDate = new Date();
            }
        }
    });
    
    $scope.$watch('form.data.pachSohId', function (newVal, oldVal) {
        
        if(newVal > 0) {
            $scope.items();
        }
        
        $scope.form.detail = {};
    });
    
    $scope.onclear = function(id) {
        $scope.form.detail = {};
        $scope.form.gridEditor.$setPristine();
    };
    
    $scope.ondel = function(id, order) {
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.pachId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        apiDeleteDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();
            delete $scope.form.data.detail[order];
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.url = a;
            });
        });
    };
    
    $scope.onupd = function(id) {
        
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.pachId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        $scope.form.testing = {};    

        $scope.form.testing[$scope.form.detail.pacdNoSeq] = $scope.form.detail;

        apiPutDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();

            $scope.tojson = angular.fromJson(dataOut);
            var result={};
            angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

            $scope.form.data.detail = result;
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['pachTotalQty'] = dataOut.data.pachTotalQty;  
                $scope.form.data['pachTotalAmount'] = dataOut.data.pachTotalAmount; 
        
                $scope.url = a;
            });
            
        });
    };
    
    $scope.onnew = function(id) {
        
        var a = $scope.url;
        if (!$scope.form.data.pachId) {
        
            $scope.urls = 'api/' + $scope.url + '/detail';
            $scope.url = 'api/' + a + '/header';
            
            apiPostHeader.loadData($scope).then(function(dataOut) { 
                $scope.form.data.pachId = dataOut.data.id;
                //$scope.form.data.detail.pachId = dataOut.data.id;
                $scope.form.data.load = true;
                $scope.form.detail.pacdPachId = dataOut.data.id;
                $scope.url = $scope.url = 'api/' + a + '/header/' + $scope.form.data.pachId;
        
                $scope.form.testing = {};    
                $scope.form.detail.pacdNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
                $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;
        
                apiDetail.loadData($scope).then(function(dataOut) {
                    $scope.resetItem();

                    $scope.tojson = angular.fromJson(dataOut);
                    var result={};
                    angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

                    $scope.form.data.detail = result;
                    
                    apiPutHeader.loadData($scope).then(function(dataOut) {
                        $scope.form.data['pachTotalQty'] = dataOut.data.pachTotalQty;  
                        $scope.form.data['pachTotalAmount'] = dataOut.data.pachTotalAmount; 
                        $scope.url = a;
                    });
                });
            });
        } else {
        
            $scope.urls = 'api/' + $scope.url + '/detail';
            $scope.url = 'api/' + a + '/header/' + $scope.form.data.pachId;
        
            $scope.form.detail.pacdPachId = $scope.form.data.pachId;

            $scope.form.testing = {};    
            $scope.form.detail.pacdNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
            $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;

            apiDetail.loadData($scope).then(function(dataOut) {
                $scope.resetItem();

                $scope.tojson = angular.fromJson(dataOut);
                var result={};
                angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

                $scope.form.data.detail = result;
                
                apiPutHeader.loadData($scope).then(function(dataOut) {
                    $scope.form.data['pachTotalQty'] = dataOut.data.pachTotalQty;  
                    $scope.form.data['pachTotalAmount'] = dataOut.data.pachTotalAmount; 
                    $scope.url = a;
                });
            });
        }
        $scope.formItem = false;
    };
}]);

App.controller('warehouseTransfer', ['$scope', '$state', '$stateParams', '$rootScope', '$http', 'transformRequestAsFormPost', 'apiGet', 'apiPostHeader', 'apiPutHeader', 'apiDetail', 'apiPutDetail', 'apiPostDetail', 'apiDeleteDetail', 'dataTransactionGrid', function($scope, $state, $stateParams, $rootScope, $http, transformRequestAsFormPost, apiGet, apiPostHeader, apiPutHeader, apiDetail, apiPutDetail, apiPostDetail, apiDeleteDetail, dataTransactionGrid) {
    
    $scope.$watch('form.data', function() {
        
        if ($scope.form.data) {
            
            if (!$scope.form.data.pachDate) {
                $scope.form.data.pachDate = new Date();
            }
        }
    });
    
    $scope.urls = 'api/admin/Transaction/Warehouse/Outbound/Transfer/Transferapi/Warehouse';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data = dataOut.data;
        
        for (var i=0; i< $scope.data.length; i++) {
            $scope.data[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.data.length; i++) {
                if (model === $scope.data[i].mwrhId) {
                    return $scope.data[i].mwrhCodeDescription;
                }
            }
        };
    });
    
    $scope.items1 = function() {
    
        $scope.urls = 'api/admin/Transaction/Warehouse/Outbound/Transfer/Transferapi/location?islMlocId=' + $scope.form.data.trahMwrhIdTo;

        apiGet.loadData($scope).then(function(dataOut) {

            $scope.data2 = dataOut.data;

            for (var i=0; i< $scope.data2.length; i++) {
                $scope.data2[i].typeahead = '`';
            }

            $scope.formatLabel2 = function(model) {
                for (var i=0; i< $scope.data2.length; i++) {
                    if (model === $scope.data2[i].mlocId) {
                        return $scope.data2[i].mlocDescription;
                    }
                }
            };
        });
    }
    
    $scope.$watch('form.data.trahMwrhIdTo', function (newVal, oldVal) {
        
        if(newVal > 0) {
            $scope.items1();
        }
    });
    
    $scope.items = function() {
        
        if ($scope.form && $scope.form.data && $scope.form.data.trahMwrhIdFrom) {
            $scope.urls = 'api/admin/transaction/Warehouse/Outbound/Transfer/Transferapi/item?trahMwrhIdFrom=' + $scope.form.data.trahMwrhIdFrom;
        } else {
            $scope.urls = 'api/admin/transaction/Warehouse/Outbound/Transfer/Transferapi/item';
        }

        apiGet.loadData($scope).then(function(dataOut) {

            $scope.data3 = dataOut.data;

            for (var i=0; i< $scope.data3.length; i++) {
                $scope.data3[i].typeahead = '`';
            }

            $scope.formatLabel3 = function(model) {
                for (var i=0; i< $scope.data3.length; i++) {
                    if (model === $scope.data3[i].mitmId) {
                        return $scope.data3[i].mitmCode;
                    }
                }
            };

            $scope.onSelect3 = function ($item, $model, $label) {
                $scope.$item = $item;
                $scope.$model = $model;
                $scope.$label = $label;

                $scope.form.data.mitmCode = $scope.$item.mitmCode;
                $scope.form.data.mitmDescription = $scope.$item.mitmDescription;
                $scope.form.detail.purdPrice = parseInt($scope.$item.mitmPrice);
            };

            $scope.data4 = dataOut.data;

            for (var i=0; i< $scope.data4.length; i++) {
                $scope.data4[i].typeahead = '`';
            }

            $scope.formatLabel4 = function(model) {
                for (var i=0; i< $scope.data4.length; i++) {
                    if (model === $scope.data4[i].mitmId) {
                        return $scope.data4[i].mitmDescription;
                    }
                }
            };

            $scope.onSelect4 = function ($item, $model, $label) {
                $scope.$item = $item;
                $scope.$model = $model;
                $scope.$label = $label;

                $scope.form.data.mitmCode = $scope.$item.mitmCode;
                $scope.form.data.mitmDescription = $scope.$item.mitmDescription;
                $scope.form.detail.purdPrice = parseInt($scope.$item.mitmPrice);
            };
        });
    }
    
    $scope.items();
    
    $scope.onclear = function(id) {
        $scope.form.detail = {};
        $scope.form.gridEditor.$setPristine();
    };
//    $scope.$watch('form.data.trahMwrhIdFrom', function (newVal, oldVal) {
//        
//        if(newVal > 0) {
//            $scope.items();
//        }
//    });
    
}]);

App.controller('transactionDamageItem', ['$scope', '$state', '$stateParams', '$rootScope', '$http', 'transformRequestAsFormPost', 'apiGet', 'apiPostHeader', 'apiPutHeader', 'apiDetail', 'apiPutDetail', 'apiPostDetail', 'apiDeleteDetail', 'dataTransactionGrid', function($scope, $state, $stateParams, $rootScope, $http, transformRequestAsFormPost, apiGet, apiPostHeader, apiPutHeader, apiDetail, apiPutDetail, apiPostDetail, apiDeleteDetail, dataTransactionGrid) {
    
    delete $scope.params.page;
    
    $scope.items = function() {
        
        if ($scope.form && $scope.form.data && $scope.form.data.dmihMsupId) {
            $scope.urls = 'api/admin/transaction/DamageItem/DamageItemapi/item?dmihMsupId=' + $scope.form.data.dmihMsupId;
        } else {
            $scope.urls = 'api/admin/transaction/DamageItem/DamageItemapi/item';
        }

        apiGet.loadData($scope).then(function(dataOut) {

            $scope.data3 = dataOut.data;

            for (var i=0; i< $scope.data3.length; i++) {
                $scope.data3[i].typeahead = '`';
            }

            $scope.formatLabel3 = function(model) {
                for (var i=0; i< $scope.data3.length; i++) {
                    if (model === $scope.data3[i].mitmId) {
                        return $scope.data3[i].mitmCode;
                    }
                }
            };

            $scope.onSelect3 = function ($item, $model, $label) {
                $scope.$item = $item;
                $scope.$model = $model;
                $scope.$label = $label;

                $scope.form.data.mitmCode = $scope.$item.mitmCode;
                $scope.form.data.mitmDescription = $scope.$item.mitmDescription;
                $scope.form.detail.dmidPrice = parseInt($scope.$item.mitmPrice);
            };

            $scope.data4 = dataOut.data;

            for (var i=0; i< $scope.data4.length; i++) {
                $scope.data4[i].typeahead = '`';
            }

            $scope.formatLabel4 = function(model) {
                for (var i=0; i< $scope.data4.length; i++) {
                    if (model === $scope.data4[i].mitmId) {
                        return $scope.data4[i].mitmDescription;
                    }
                }
            };

            $scope.onSelect4 = function ($item, $model, $label) {
                $scope.$item = $item;
                $scope.$model = $model;
                $scope.$label = $label;

                $scope.form.data.mitmCode = $scope.$item.mitmCode;
                $scope.form.data.mitmDescription = $scope.$item.mitmDescription;
                $scope.form.detail.dmidPrice = parseInt($scope.$item.mitmPrice);
            };
        });
    }
    
    $scope.items();
    
    $scope.$watch('form.data.dmihMsupId', function (newVal, oldVal) {
        
        if(newVal > 0) {
            $scope.items();
        }
    });
    
    $scope.urls = 'api/admin/transaction/DamageItem/DamageItemapi/unit';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data5 = dataOut.data;
        
        for (var i=0; i< $scope.data5.length; i++) {
            $scope.data5[i].typeahead = '`';
        }
  
        $scope.formatLabel5 = function(model) {
            for (var i=0; i< $scope.data5.length; i++) {
                if (model === $scope.data5[i].munitId) {
                    return $scope.data5[i].munitName ;
                }
            }
        };
    });
    
    $scope.remove = function(id) {
        delete $scope.form.data.detail[$scope.formLabel.column.detail[10].id];
    };
    
    $scope.ondel = function(id, order) {
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.dmihId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        apiDeleteDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();
            delete $scope.form.data.detail[order];
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['dmihTotalQty'] = dataOut.data.dmihTotalQty;  
                $scope.form.data['dmihTotalAmount'] = dataOut.data.dmihTotalAmount; 
                $scope.url = a;
            });
        });
    };
    
    $scope.onupd = function(id) {
        
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.dmihId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        $scope.form.testing = {};    

        $scope.form.testing[$scope.form.detail.dmidNoSeq] = $scope.form.detail;

        apiPutDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();

            $scope.tojson = angular.fromJson(dataOut);
            var result={};
            angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

            $scope.form.data.detail = result;
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['dmihTotalQty'] = dataOut.data.dmihTotalQty;  
                $scope.form.data['dmihTotalAmount'] = dataOut.data.dmihTotalAmount; 
                $scope.url = a;
            });
            
        });
    };
    
    $scope.onnew = function(id) {
        
        var a = $scope.url;
        if (!$scope.form.data.dmihId) {
        
            $scope.urls = 'api/' + $scope.url + '/detail';
            $scope.url = 'api/' + a + '/header';
            
            apiPostHeader.loadData($scope).then(function(dataOut) { 
                $scope.form.data.dmihId = dataOut.data.id;
                //$scope.form.data.detail.dmihId = dataOut.data.id;
                $scope.form.data.load = true;
                $scope.form.detail.dmiddmihId = dataOut.data.id;
                $scope.url = $scope.url = 'api/' + a + '/header/' + $scope.form.data.dmihId;
        
                $scope.form.testing = {};    
                $scope.form.detail.dmidNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
                $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;
        
                apiDetail.loadData($scope).then(function(dataOut) {
                    $scope.resetItem();

                    $scope.tojson = angular.fromJson(dataOut);
                    var result={};
                    angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

                    $scope.form.data.detail = result;
                    
                    apiPutHeader.loadData($scope).then(function(dataOut) {
                        $scope.form.data['dmihTotalQty'] = dataOut.data.dmihTotalQty;  
                        $scope.form.data['dmihTotalAmount'] = dataOut.data.dmihTotalAmount; 
                        $scope.url = a;
                    });
                });
            });
        } else {
        
            $scope.urls = 'api/' + $scope.url + '/detail';
            $scope.url = 'api/' + a + '/header/' + $scope.form.data.dmihId;
        
            $scope.form.detail.dmiddmihId = $scope.form.data.dmihId;

            $scope.form.testing = {};    
            $scope.form.detail.dmidNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
            $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;

            apiDetail.loadData($scope).then(function(dataOut) {
                $scope.resetItem();

                $scope.tojson = angular.fromJson(dataOut);
                var result={};
                angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

                $scope.form.data.detail = result;
                
                apiPutHeader.loadData($scope).then(function(dataOut) {
                    $scope.form.data['dmihTotalQty'] = dataOut.data.dmihTotalQty;  
                    $scope.form.data['dmihTotalAmount'] = dataOut.data.dmihTotalAmount; 
                    $scope.url = a;
                });
            });
        }
        $scope.formItem = false;
    };
}]);

App.controller('sellingOrder', ['$scope', '$state', '$stateParams', '$rootScope', '$http', 'transformRequestAsFormPost', 'apiGet', 'apiPostHeader', 'apiPutHeader', 'apiDetail', 'apiPutDetail', 'apiPostDetail', 'apiDeleteDetail', 'dataTransactionGrid', function($scope, $state, $stateParams, $rootScope, $http, transformRequestAsFormPost, apiGet, apiPostHeader, apiPutHeader, apiDetail, apiPutDetail, apiPostDetail, apiDeleteDetail, dataTransactionGrid) {
    
//    delete $scope.params.page;
//    
//    $scope.items = function() {
//        
//        if ($scope.form && $scope.form.data && $scope.form.data.dmihMsupId) {
//            $scope.urls = 'api/admin/transaction/DamageItem/DamageItemapi/item?dmihMsupId=' + $scope.form.data.dmihMsupId;
//        } else {
//            $scope.urls = 'api/admin/transaction/DamageItem/DamageItemapi/item';
//        }
//
//        apiGet.loadData($scope).then(function(dataOut) {
//
//            $scope.data3 = dataOut.data;
//
//            for (var i=0; i< $scope.data3.length; i++) {
//                $scope.data3[i].typeahead = '`';
//            }
//
//            $scope.formatLabel3 = function(model) {
//                for (var i=0; i< $scope.data3.length; i++) {
//                    if (model === $scope.data3[i].mitmId) {
//                        return $scope.data3[i].mitmCode;
//                    }
//                }
//            };
//
//            $scope.onSelect3 = function ($item, $model, $label) {
//                $scope.$item = $item;
//                $scope.$model = $model;
//                $scope.$label = $label;
//
//                $scope.form.data.mitmCode = $scope.$item.mitmCode;
//                $scope.form.data.mitmDescription = $scope.$item.mitmDescription;
//                $scope.form.detail.dmidPrice = parseInt($scope.$item.mitmPrice);
//            };
//
//            $scope.data4 = dataOut.data;
//
//            for (var i=0; i< $scope.data4.length; i++) {
//                $scope.data4[i].typeahead = '`';
//            }
//
//            $scope.formatLabel4 = function(model) {
//                for (var i=0; i< $scope.data4.length; i++) {
//                    if (model === $scope.data4[i].mitmId) {
//                        return $scope.data4[i].mitmDescription;
//                    }
//                }
//            };
//
//            $scope.onSelect4 = function ($item, $model, $label) {
//                $scope.$item = $item;
//                $scope.$model = $model;
//                $scope.$label = $label;
//
//                $scope.form.data.mitmCode = $scope.$item.mitmCode;
//                $scope.form.data.mitmDescription = $scope.$item.mitmDescription;
//                $scope.form.detail.dmidPrice = parseInt($scope.$item.mitmPrice);
//            };
//        });
//    }
//    
//    $scope.items();
//    
//    $scope.$watch('form.data.dmihMsupId', function (newVal, oldVal) {
//        
//        if(newVal > 0) {
//            $scope.items();
//        }
//    });
//    
//    $scope.$watch('form.data', function() {
//        
//        if ($scope.form.data) {
//            
//            if (!$scope.form.data.sellhDate) {
//                $scope.form.data.sellhDate = new Date();
//            }
//        }
//    });
//    
//    $scope.urls = 'api/admin/transaction/DamageItem/DamageItemapi/unit';
//    
//    apiGet.loadData($scope).then(function(dataOut) {
//        
//        $scope.data5 = dataOut.data;
//        
//        for (var i=0; i< $scope.data5.length; i++) {
//            $scope.data5[i].typeahead = '`';
//        }
//  
//        $scope.formatLabel5 = function(model) {
//            for (var i=0; i< $scope.data5.length; i++) {
//                if (model === $scope.data5[i].munitId) {
//                    return $scope.data5[i].munitName ;
//                }
//            }
//        };
//    });
//    
//    $scope.remove = function(id) {
//        delete $scope.form.data.detail[$scope.formLabel.column.detail[10].id];
//    };
//    
//    $scope.ondel = function(id, order) {
//        var a = $scope.url;
//        $scope.url = 'api/' + a + '/header/' + $scope.form.data.dmihId;
//        $scope.urls = 'api/' + a + '/detail/' + id;
//
//        apiDeleteDetail.loadData($scope).then(function(dataOut) {
//            $scope.resetItem();
//            delete $scope.form.data.detail[order];
//        
//            apiPutHeader.loadData($scope).then(function(dataOut) {
//                $scope.form.data['dmihTotalQty'] = dataOut.data.dmihTotalQty;  
//                $scope.form.data['dmihTotalAmount'] = dataOut.data.dmihTotalAmount; 
//                $scope.url = a;
//            });
//        });
//    };
//    
//    $scope.onupd = function(id) {
//        
//        var a = $scope.url;
//        $scope.url = 'api/' + a + '/header/' + $scope.form.data.dmihId;
//        $scope.urls = 'api/' + a + '/detail/' + id;
//
//        $scope.form.testing = {};    
//
//        $scope.form.testing[$scope.form.detail.dmidNoSeq] = $scope.form.detail;
//
//        apiPutDetail.loadData($scope).then(function(dataOut) {
//            $scope.resetItem();
//
//            $scope.tojson = angular.fromJson(dataOut);
//            var result={};
//            angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));
//
//            $scope.form.data.detail = result;
//        
//            apiPutHeader.loadData($scope).then(function(dataOut) {
//                $scope.form.data['dmihTotalQty'] = dataOut.data.dmihTotalQty;  
//                $scope.form.data['dmihTotalAmount'] = dataOut.data.dmihTotalAmount; 
//                $scope.url = a;
//            });
//            
//        });
//    };
//    
//    $scope.onnew = function(id) {
//        
//        var a = $scope.url;
//        if (!$scope.form.data.dmihId) {
//        
//            $scope.urls = 'api/' + $scope.url + '/detail';
//            $scope.url = 'api/' + a + '/header';
//            
//            apiPostHeader.loadData($scope).then(function(dataOut) { 
//                $scope.form.data.dmihId = dataOut.data.id;
//                //$scope.form.data.detail.dmihId = dataOut.data.id;
//                $scope.form.data.load = true;
//                $scope.form.detail.dmiddmihId = dataOut.data.id;
//                $scope.url = $scope.url = 'api/' + a + '/header/' + $scope.form.data.dmihId;
//        
//                $scope.form.testing = {};    
//                $scope.form.detail.dmidNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
//                $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;
//        
//                apiDetail.loadData($scope).then(function(dataOut) {
//                    $scope.resetItem();
//
//                    $scope.tojson = angular.fromJson(dataOut);
//                    var result={};
//                    angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));
//
//                    $scope.form.data.detail = result;
//                    
//                    apiPutHeader.loadData($scope).then(function(dataOut) {
//                        $scope.form.data['dmihTotalQty'] = dataOut.data.dmihTotalQty;  
//                        $scope.form.data['dmihTotalAmount'] = dataOut.data.dmihTotalAmount; 
//                        $scope.url = a;
//                    });
//                });
//            });
//        } else {
//        
//            $scope.urls = 'api/' + $scope.url + '/detail';
//            $scope.url = 'api/' + a + '/header/' + $scope.form.data.dmihId;
//        
//            $scope.form.detail.dmiddmihId = $scope.form.data.dmihId;
//
//            $scope.form.testing = {};    
//            $scope.form.detail.dmidNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
//            $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;
//
//            apiDetail.loadData($scope).then(function(dataOut) {
//                $scope.resetItem();
//
//                $scope.tojson = angular.fromJson(dataOut);
//                var result={};
//                angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));
//
//                $scope.form.data.detail = result;
//                
//                apiPutHeader.loadData($scope).then(function(dataOut) {
//                    $scope.form.data['dmihTotalQty'] = dataOut.data.dmihTotalQty;  
//                    $scope.form.data['dmihTotalAmount'] = dataOut.data.dmihTotalAmount; 
//                    $scope.url = a;
//                });
//            });
//        }
//        $scope.formItem = false;
//    };
}]);

App.controller('accJournal', ['$scope', '$state', '$stateParams', '$rootScope', '$http', 'transformRequestAsFormPost', 'apiGet', 'apiPostHeader', 'apiPutHeader', 'apiDetail', 'apiPutDetail', 'apiPostDetail', 'apiDeleteDetail', 'dataTransactionGrid', function($scope, $state, $stateParams, $rootScope, $http, transformRequestAsFormPost, apiGet, apiPostHeader, apiPutHeader, apiDetail, apiPutDetail, apiPostDetail, apiDeleteDetail, dataTransactionGrid) {
    
    var a = $scope.url;
    delete $scope.params.page;
    
    $scope.urls = 'api/' + a + '/journalapi/journalType';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data = dataOut.data;
        
        for (var i=0; i< $scope.data.length; i++) {
            $scope.data[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.data.length; i++) {
                if (model === $scope.data[i].mjotId) {
                    return $scope.data[i].journalData;
                }
            }
        };
    });
    
    $scope.urls = 'api/' + a + '/journalapi/chartOfAccounts';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data2 = dataOut.data;
        
        for (var i=0; i< $scope.data2.length; i++) {
            $scope.data2[i].typeahead = '`';
        }
  
        $scope.formatLabel2 = function(model) {
            for (var i=0; i< $scope.data2.length; i++) {
                if (model === $scope.data2[i].mcoaId) {
                    return $scope.data2[i].mcoaCode;
                }
            }
        };
  
        $scope.formatLabel3 = function(model) {
            for (var i=0; i< $scope.data2.length; i++) {
                if (model === $scope.data2[i].mcoaId) {
                    return $scope.data2[i].mcoaDescription;
                }
            }
        };
    });
    
    $scope.remove = function(id) {
        delete $scope.form.data.detail[$scope.formLabel.column.detail[10].id];
    };
    
    $scope.ondel = function(id, order) {
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.johdId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        apiDeleteDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();
            delete $scope.form.data.detail[order];
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['johdDebet'] = dataOut.data.johdDebet;  
                $scope.form.data['johdCredit'] = dataOut.data.johdCredit; 
                $scope.url = a;
            });
        });
    };
    
    $scope.onupd = function(id) {
        
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.johdId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        $scope.form.testing = {};    

        $scope.form.testing[$scope.form.detail.jodtNoSeq] = $scope.form.detail;

        apiPutDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();

            $scope.tojson = angular.fromJson(dataOut);
            var result={};
            angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

            $scope.form.data.detail = result;
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['johdDebet'] = dataOut.data.johdDebet;  
                $scope.form.data['johdCredit'] = dataOut.data.johdCredit; 
                $scope.url = a;
            });
            
        });
    };
    
    $scope.onnew = function(id) {
        
        var a = $scope.url;
        if (!$scope.form.data.johdId) {
        
            $scope.urls = 'api/' + $scope.url + '/detail';
            $scope.url = 'api/' + a + '/header';
            
            apiPostHeader.loadData($scope).then(function(dataOut) { 
                $scope.form.data.johdId = dataOut.data.id;
                //$scope.form.data.detail.johdId = dataOut.data.id;
                $scope.form.data.load = true;
                $scope.form.detail.jodtJohdId = dataOut.data.id;
                $scope.url = $scope.url = 'api/' + a + '/header/' + $scope.form.data.johdId;
        
                $scope.form.testing = {};    
                $scope.form.detail.jodtNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
                $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;
        
                apiDetail.loadData($scope).then(function(dataOut) {
                    $scope.resetItem();

                    $scope.tojson = angular.fromJson(dataOut);
                    var result={};
                    angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

                    $scope.form.data.detail = result;
                    
                    apiPutHeader.loadData($scope).then(function(dataOut) {
                        $scope.form.data['johdDebet'] = dataOut.data.johdDebet;  
                        $scope.form.data['johdCredit'] = dataOut.data.johdCredit; 
                        $scope.url = a;
                    });
                });
            });
        } else {
        
            $scope.urls = 'api/' + $scope.url + '/detail';
            $scope.url = 'api/' + a + '/header/' + $scope.form.data.johdId;
        
            $scope.form.detail.jodtJohdId = $scope.form.data.johdId;

            $scope.form.testing = {};    
            $scope.form.detail.jodtNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
            $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;

            apiDetail.loadData($scope).then(function(dataOut) {
                $scope.resetItem();

                $scope.tojson = angular.fromJson(dataOut);
                var result={};
                angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

                $scope.form.data.detail = result;
                
                apiPutHeader.loadData($scope).then(function(dataOut) {
                    $scope.form.data['johdDebet'] = dataOut.data.johdDebet;  
                    $scope.form.data['johdCredit'] = dataOut.data.johdCredit; 
                    $scope.url = a;
                });
            });
        }
        $scope.formItem = false;
    };
}]);

App.controller('accAR', ['$scope', '$state', '$stateParams', '$rootScope', '$http', 'transformRequestAsFormPost', 'apiGet', 'apiPostHeader', 'apiPutHeader', 'apiDetail', 'apiPutDetail', 'apiPostDetail', 'apiDeleteDetail', 'dataTransactionGrid', function($scope, $state, $stateParams, $rootScope, $http, transformRequestAsFormPost, apiGet, apiPostHeader, apiPutHeader, apiDetail, apiPutDetail, apiPostDetail, apiDeleteDetail, dataTransactionGrid) {
    
    $scope.changeqty = function() {
        var r;
        var subStr;
        
        if ($scope.form.detail.arcdAmount >= $scope.form.data.archAmountRemaining) {
            $scope.form.detail.arcdAmount = $scope.form.data.archAmountRemaining;
        } 
    };
    
    var a = $scope.url;
    delete $scope.params.page;
    
    $scope.urls = 'api/' + a + '/receivableapi/paymentType';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data = dataOut.data;
        
        for (var i=0; i< $scope.data.length; i++) {
            $scope.data[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.data.length; i++) {
                if (model === $scope.data[i].mpaytId) {
                    return $scope.data[i].mpaytCodeDescription;
                }
            }
        };
    });
    
    $scope.urls = 'api/' + a + '/receivableapi/bankAccount';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data2 = dataOut.data;
        
        for (var i=0; i< $scope.data2.length; i++) {
            $scope.data2[i].typeahead = '`';
        }
  
        $scope.formatLabel2 = function(model) {
            for (var i=0; i< $scope.data2.length; i++) {
                if (model === $scope.data2[i].mbacId) {
                    return $scope.data2[i].mbacCodeDescription;
                }
            }
        };
    });
    
    $scope.$watch('form.data.archId', function (newVal, oldVal) {
        
        if(newVal > 0) {
            if (!$scope.form.data.archDate) {
                $scope.form.data.archDate = new Date();
            }
        }
    });
    
    $scope.remove = function(id) {
        delete $scope.form.data.detail[$scope.formLabel.column.detail[10].id];
    };
    
    $scope.onclear = function(id) {
        $scope.form.detail = {};
        $scope.form.gridEditor.$setPristine();
    };
    
    $scope.ondel = function(id, order) {
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.archId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        apiDeleteDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();
            delete $scope.form.data.detail[order];
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['archTotalAmount'] = dataOut.data.archTotalAmount;  
                $scope.form.data['archAmountRemaining'] = dataOut.data.archAmount - dataOut.data.archTotalAmount; 
                $scope.url = a;
            });
        });
    };
    
    $scope.onupd = function(id) {
        
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.archId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        $scope.form.testing = {};    

        $scope.form.testing[$scope.form.detail.arcdNoSeq] = $scope.form.detail;

        apiPutDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();

            $scope.tojson = angular.fromJson(dataOut);
            var result={};
            angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

            $scope.form.data.detail = result;
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['archTotalAmount'] = dataOut.data.archTotalAmount;  
                $scope.form.data['archAmountRemaining'] = dataOut.data.archAmount - dataOut.data.archTotalAmount;  
                $scope.url = a;
            });
            
        });
    };
    
    $scope.onnew = function(id) {
        
        var a = $scope.url;
        if (!$scope.form.data.archId) {
        
            $scope.urls = 'api/' + $scope.url + '/detail';
            $scope.url = 'api/' + a + '/header';
            
            apiPostHeader.loadData($scope).then(function(dataOut) { 
                $scope.form.data.archId = dataOut.data.id;
                //$scope.form.data.detail.archId = dataOut.data.id;
                $scope.form.data.load = true;
                $scope.form.detail.arcdArchId = dataOut.data.id;
                $scope.url = $scope.url = 'api/' + a + '/header/' + $scope.form.data.archId;
        
                $scope.form.testing = {};    
                $scope.form.detail.arcdNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
                $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;
        
                apiDetail.loadData($scope).then(function(dataOut) {
                    $scope.resetItem();

                    $scope.tojson = angular.fromJson(dataOut);
                    var result={};
                    angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

                    $scope.form.data.detail = result;
                    
                    apiPutHeader.loadData($scope).then(function(dataOut) {
                        $scope.form.data['archTotalAmount'] = dataOut.data.archTotalAmount;  
                        $scope.form.data['archAmountRemaining'] = dataOut.data.archAmount - dataOut.data.archTotalAmount; 
                        $scope.url = a;
                    });
                });
            });
        } else {
        
            $scope.urls = 'api/' + $scope.url + '/detail';
            $scope.url = 'api/' + a + '/header/' + $scope.form.data.archId;
        
            $scope.form.detail.arcdArchId = $scope.form.data.archId;

            $scope.form.testing = {};    
            $scope.form.detail.arcdNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
            $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;

            apiDetail.loadData($scope).then(function(dataOut) {
                $scope.resetItem();

                $scope.tojson = angular.fromJson(dataOut);
                var result={};
                angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

                $scope.form.data.detail = result;
                
                apiPutHeader.loadData($scope).then(function(dataOut) {
                    $scope.form.data['archTotalAmount'] = dataOut.data.archTotalAmount;  
                    $scope.form.data['archAmountRemaining'] = dataOut.data.archAmount - dataOut.data.archTotalAmount; 
                    $scope.url = a;
                });
            });
        }
        $scope.formItem = false;
    };
}]);

App.controller('accAP', ['$scope', '$state', '$stateParams', '$rootScope', '$http', 'transformRequestAsFormPost', 'apiGet', 'apiPostHeader', 'apiPutHeader', 'apiDetail', 'apiPutDetail', 'apiPostDetail', 'apiDeleteDetail', 'dataTransactionGrid', function($scope, $state, $stateParams, $rootScope, $http, transformRequestAsFormPost, apiGet, apiPostHeader, apiPutHeader, apiDetail, apiPutDetail, apiPostDetail, apiDeleteDetail, dataTransactionGrid) {
    
    var a = $scope.url;
    delete $scope.params.page;
    
    $scope.urls = 'api/' + a + '/payableapi/paymentType';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data = dataOut.data;
        
        for (var i=0; i< $scope.data.length; i++) {
            $scope.data[i].typeahead = '`';
        }
  
        $scope.formatLabel = function(model) {
            for (var i=0; i< $scope.data.length; i++) {
                if (model === $scope.data[i].mpaytId) {
                    return $scope.data[i].mpaytCodeDescription;
                }
            }
        };
    });
    
    $scope.urls = 'api/' + a + '/payableapi/bankAccount';
    
    apiGet.loadData($scope).then(function(dataOut) {
        
        $scope.data2 = dataOut.data;
        
        for (var i=0; i< $scope.data2.length; i++) {
            $scope.data2[i].typeahead = '`';
        }
  
        $scope.formatLabel2 = function(model) {
            for (var i=0; i< $scope.data2.length; i++) {
                if (model === $scope.data2[i].mbacId) {
                    return $scope.data2[i].mbacCodeDescription;
                }
            }
        };
    });
    
    $scope.$watch('form.data.aphId', function (newVal, oldVal) {
        
        if(newVal > 0) {
            if (!$scope.form.data.aphDate) {
                $scope.form.data.aphDate = new Date();
            }
        }
    });
    
    $scope.remove = function(id) {
        delete $scope.form.data.detail[$scope.formLabel.column.detail[10].id];
    };
    
    $scope.onclear = function(id) {
        $scope.form.detail = {};
        $scope.form.gridEditor.$setPristine();
    };
    
    $scope.ondel = function(id, order) {
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.aphId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        apiDeleteDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();
            delete $scope.form.data.detail[order];
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['aphTotalAmount'] = dataOut.data.aphTotalAmount;  
                $scope.url = a;
            });
        });
    };
    
    $scope.onupd = function(id) {
        
        var a = $scope.url;
        $scope.url = 'api/' + a + '/header/' + $scope.form.data.aphId;
        $scope.urls = 'api/' + a + '/detail/' + id;

        $scope.form.testing = {};    

        $scope.form.testing[$scope.form.detail.apdNoSeq] = $scope.form.detail;

        apiPutDetail.loadData($scope).then(function(dataOut) {
            $scope.resetItem();

            $scope.tojson = angular.fromJson(dataOut);
            var result={};
            angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

            $scope.form.data.detail = result;
        
            apiPutHeader.loadData($scope).then(function(dataOut) {
                $scope.form.data['aphTotalAmount'] = dataOut.data.aphTotalAmount;  
                $scope.url = a;
            });
            
        });
    };
    
    $scope.onnew = function(id) {
        
        var a = $scope.url;
        if (!$scope.form.data.aphId) {
        
            $scope.urls = 'api/' + $scope.url + '/detail';
            $scope.url = 'api/' + a + '/header';
            
            apiPostHeader.loadData($scope).then(function(dataOut) { 
                $scope.form.data.aphId = dataOut.data.id;
                //$scope.form.data.detail.aphId = dataOut.data.id;
                $scope.form.data.load = true;
                $scope.form.detail.apdAphId = dataOut.data.id;
                $scope.url = $scope.url = 'api/' + a + '/header/' + $scope.form.data.aphId;
        
                $scope.form.testing = {};    
                $scope.form.detail.apdNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
                $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;
        
                apiDetail.loadData($scope).then(function(dataOut) {
                    $scope.resetItem();

                    $scope.tojson = angular.fromJson(dataOut);
                    var result={};
                    angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

                    $scope.form.data.detail = result;
                    
                    apiPutHeader.loadData($scope).then(function(dataOut) {
                        $scope.form.data['aphTotalAmount'] = dataOut.data.aphTotalAmount;  
                        $scope.url = a;
                    });
                });
            });
        } else {
        
            $scope.urls = 'api/' + $scope.url + '/detail';
            $scope.url = 'api/' + a + '/header/' + $scope.form.data.aphId;
        
            $scope.form.detail.apdAphId = $scope.form.data.aphId;

            $scope.form.testing = {};    
            $scope.form.detail.apdNoSeq = $rootScope.Utils.keys($scope.form.data.detail).length + 1;
            $scope.form.testing[$rootScope.Utils.keys($scope.form.data.detail).length + 1] = $scope.form.detail;

            apiDetail.loadData($scope).then(function(dataOut) {
                $scope.resetItem();

                $scope.tojson = angular.fromJson(dataOut);
                var result={};
                angular.extend(result, $scope.form.data.detail, angular.fromJson($scope.tojson.data));

                $scope.form.data.detail = result;
                
                apiPutHeader.loadData($scope).then(function(dataOut) {
                    $scope.form.data['aphTotalAmount'] = dataOut.data.aphTotalAmount;  
                    $scope.url = a;
                });
            });
        }
        $scope.formItem = false;
    };
}]);