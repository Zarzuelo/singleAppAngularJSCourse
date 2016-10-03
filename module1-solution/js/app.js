(function(){
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

DIController.$inject = ['$scope', '$filter'];
function DIController($scope, $filter) {
  $scope.food = "";

  $scope.calculateFood = function () {
    // If dishes field is empty, set message and finish
    if (!$scope.food) {
        $scope.message = "Please enter data first";
        return;
    }
    
    // Split dishes to make count
    var foodArray = $scope.food.split(',');
      
    
    if (foodArray.length <= 3) {
        $scope.message = "Enjoy!";
    }
    else {
        $scope.message = "Too much!"
    }
  };
}
})()