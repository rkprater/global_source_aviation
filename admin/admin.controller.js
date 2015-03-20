(function () {
  "use strict";
  angular.module('airplane')
    .controller('AdminController', function (ListingService, UserService, $scope, $location, $routeParams){

      var adminCtrl = this;

      ListingService.getListings().success(function(data){
        adminCtrl.listings = data;
      });

      ListingService.getSingleListing($routeParams.ListingId).success(function(data){
        adminCtrl.singleListing = data;
        console.log(data);
      });

      adminCtrl.username = UserService.getUser();

//add new listing
    adminCtrl.addListing = function (newListing) {
      ListingService.addListing(newListing);
    };

//delete listing
    adminCtrl.deleteListing = function (id) {
      ListingService.deleteListing(id);
    };

//edit listing
    adminCtrl.editListing = function (listing) {
      ListingService.editListing (listing, listing._id); //or $routeParams.listingId?
    };
  });

})();
