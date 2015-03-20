(function () {
  "use strict";

  angular.module('admin', [
  'ngRoute',
  'ngAnimate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/adminlistings', {
      templateUrl: '/admin/admin.listings.html',
      controller: 'AdminController as adminCtrl'
    })
    .when('/addlisting', {
      templateUrl: '/admin/admin.addlisting.html',
      controller: 'AdminController as adminCtrl'
    })
    .when('/edit/:listingId', {
      templateUrl: '/admin/admin.editlisting.html',
      controller: 'AdminController as adminCtrl'
    })

  });

})();
