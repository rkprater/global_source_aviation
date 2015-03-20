(function () {
  "use strict";
  angular.module('airplane', [
  'ngRoute',
  'ngAnimate',
  'admin',
  'login',
  'clientmain'
  ])
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'views/splash.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/splash', {
      templateUrl: 'views/splash.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/not-found', {
      templateUrl: 'views/404.html',
      controller: 'MainController as mainCtrl'
    })
    .otherwise({
      redirectTo: '/not-found'
    })
  })
  .constant('_', _)


})();
