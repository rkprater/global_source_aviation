(function() {
  "use srtict";

  angular.module('airplane')
  .controller('MainController', function ($location) {
    var mainCtrl = this;

    mainCtrl.goToAdmin = function (){
      $location.path('/admin');
    };
    mainCtrl.goToList = function (){
      $location.path('/list');
    };
  });
})();
