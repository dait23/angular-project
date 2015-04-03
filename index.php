<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" ng-app="exoduz"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" ng-app="exoduz"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" ng-app="exoduz"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" ng-app="exoduz"> <!--<![endif]-->
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <title>Exoduz</title>

    <link rel="shortcut icon" href="//inventory.server/assets/img/LogoBG.png">

    <meta name="description" content=""/>
    <meta name="fragment" content="!" />
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/admin.css">
    
    <script type="text/javascript" id="mobileDeviceDetect">
        !function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/IEMobile/i,h=/(?=.*\bWindows\b)(?=.*\bTouch\b)/i,i=/BlackBerry/i,j=/Opera Mini/i,k=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,l=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),m=function(a,b){return a.test(b)},n=function(a){var n=a||navigator.userAgent;this.apple={phone:m(b,n),ipod:m(c,n),tablet:m(d,n),device:m(b,n)||m(c,n)||m(d,n)},this.android={phone:m(e,n),tablet:!m(e,n)&&m(f,n),device:m(e,n)||m(f,n)},this.windows={phone:m(g,n),tablet:m(h,n),device:m(g,n)||m(h,n)},this.other={blackberry:m(i,n),opera:m(j,n),firefox:m(k,n),device:m(i,n)||m(j,n)||m(k,n)},this.seven_inch=m(l,n),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet},o=new n;o.Class=n,"undefined"!=typeof module&&module.exports?module.exports=o:"function"==typeof define&&define.amd&&define(o),a.isMobile=o}(this);
    </script>
</head>
<body class="ng-cloak">
   
    <!--[if lt IE 7]>
<p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
<![endif]-->

    <!--[if lt IE 9]>
<script src="lib/es5-shim/es5-shim.min.js"></script>
<script src="lib/json3/json3.min.js"></script>
<![endif]-->

    <!-- Add your site or application content here -->
    
    <div class="output">
        <div ng-controller="bodyCtrl" ng-mousemove="idle()" ng-keypress="idle()">
            <header ng-hide="$state.includes('index') || $state.includes('login')"></header>

            <menu ng-hide="$state.includes('index') || $state.includes('login')"></menu>
            <div ui-view></div>
        </div>
        
    </div>
    <!-- End adding site content -->

    <script type="text/javascript">
        var common = {
            path : "<?php if (!empty($_SERVER['PATH_INFO'])) echo str_replace("/","",$_SERVER['PATH_INFO'])?>"
        }
    </script>

    <!--        <script src="http://maps.googleapis.com/maps/api/js?key=&sensor=false&extension=.js"></script>-->

    <script src="lib/fastclick/fastclick.js"></script>
    <script src="lib/angular/angular.min.js"></script>
    <script src="lib/angular-seo/angular-seo.js"></script>
    <script src="lib/angular-touch/angular-touch.js"></script>
    <script src="lib/angular-sanitize/angular-sanitize.min.js"></script>
    <script src="lib/angular-ui-router/angular-ui-router.min.js"></script>
    <script src="lib/angular-ui-bootstrap/angular-ui-bootstrap.min.js"></script>
    <script src="lib/angular-ui-utils/angular-ui-mask.js"></script>

    <script src="app/app.js"></script>
    <script src="app/config.js"></script>
    <script src="app/factory.js"></script>
    
    <script src="app/index/controller.js"></script>
    <script src="app/login/controller.js"></script>
    <script src="app/dashboard/controller.js"></script>
    <script src="app/list/controller.js"></script>
    <script src="app/form/controller.js"></script>
    <script src="app/report/controller.js"></script>
    
    <script src="app/modules/header/directive.js"></script>
    <script src="app/modules/menu/directive.js"></script>
    <script src="app/modules/news/directive.js"></script>
    <script src="app/modules/footer/directive.js"></script>
    <script src="app/modules/grid/directive.js"></script>
    <script src="app/modules/gridtransaction/directive.js"></script>
    <script src="app/modules/gridform/directive.js"></script>
</body>
</html>