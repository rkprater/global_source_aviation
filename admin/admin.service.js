(function () {
  "use strict";
  angular.module('airplane')
    .factory('ListingService', function($http, $location) {  //check: $routeParams

      var url = 'http://tiy-fee-rest.herokuapp.com/collections/airplanes';

      var getListings = function () {
        return $http.get(url);
      };

      var getSingleListing = function (id) {
        return $http.get(url + '/' + id);
      };

      var addListing = function (company) {
        $http.post(url, listing).success(function(){
          $location.path('/admincompanies');
        });
      };

      var deleteListing = function (id) {
        $http.delete(url + '/' + id).success(function(){
          $location.path('/admincompanies')
        });
      };

      var editListing = function (company, id) {
        $http.put(url + '/' + id, company).success(function(){
          $location.path('/admincompanies');
        });
      };
      return {
        getListings: getListings,
        getSingleListing: getSingleListing,
        addListing: addListing,
        deleteListing: deleteListing,
        editListing: editListing,
      };

    });
})();
