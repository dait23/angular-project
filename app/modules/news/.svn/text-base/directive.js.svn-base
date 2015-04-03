App.directive('news', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "app/modules/news/index.html";
    directive.controller = function($scope, $http, $state, $interval, apiGet) {
        $scope.news = [];
        $scope.conf = {
            news_length: false,
            news_pos: 0, // the starting position from the right in the news container
            news_margin: 0,
            news_move_flag: true
        };

        $scope.init = function() {
            /*$http.post('the_news_file.json', null).success(function(data) {
                if (data && data.length > 0) {*/
                    $scope.news = [{"title":"askdjkjshd akjsdh akjsdhk asjdhk asjd aksjdh aksj","link":"http:\/\/news.walla.co.il\/?w=\/\/2790612","pubDate":"12/12/14","user":"Abc"},{"title":"asdfoisdhfoaisdfhoasmofi mi osiduf oif oaisduf oaisdfu oaisf","link":"http:\/\/news.walla.co.il\/?w=\/\/2790623","pubDate":"13/12/14","user":"Abc"},{"title":"adfjsldfjo iasofojaopfda shiusf aisufh  hasifh asiuf pasidu","link":"http:\/\/news.walla.co.il\/?w=\/\/2790558","pubDate":"14/12/14","user":"Abc"},{"title":"asdfo m owej pwieu oaijfoiasdf osidfu oasiduf osifu oasiuf oasifuoasidf","link":"http:\/\/news.walla.co.il\/?w=\/\/2790641","pubDate":"15/12/14","user":"Abc"},{"title":"aoqijrpqjr qpi qpirwu pqwiue pqwurpqieurpqiewurpw iqpwiru qpiru pqiur pqwiurpqiurpqiw","link":"http:\/\/news.walla.co.il\/?w=\/\/2790689","pubDate":"16/12/14","user":"Abc"},{"title":"asdoiajsdoioasido osfuhiuyafi aof oaiuowiu foaiuf oaiwu oaiwuefo iuaoiu owiuf ","link":"http:\/\/www.globes.co.il\/news\/article.aspx?did=1000976251","pubDate":"17/12/14","user":"Abc"}];
                    $interval($scope.news_move, 20);
            /*  }
            });*/
        };

//        $scope.get_news_right = function(idx) {
//            var $right = $scope.conf.news_pos;
//            for (var ri=0; ri < idx; ri++) {
//                if (document.getElementById('news_'+ri)) {
//                    $right += $scope.conf.news_margin + angular.element(document.getElementById('news_'+ri))[0].offsetWidth;
//                }
//            }
//            return $right+'px';
//        };
//
//        $scope.news_move = function() {
//            if ($scope.conf.news_move_flag) {
//                $scope.conf.news_pos--;
//
//                $scope.a = angular.element(document.getElementById('news_0'))[0].offsetWidth + angular.element(document.getElementById('news_0'))[0].offsetLeft;
//                $scope.b = 0;
//
//                if ( angular.element(document.getElementById('news_0'))[0].offsetWidth + angular.element(document.getElementById('news_0'))[0].offsetLeft < 0 ) {
//                    var first_new = $scope.news[0];
//                    $scope.news.push($scope.news.shift());
//                    $scope.conf.news_pos += angular.element(document.getElementById('news_0'))[0].offsetWidth + $scope.conf.news_margin;
//                }
//            }
//        };
    }

    return directive;
});