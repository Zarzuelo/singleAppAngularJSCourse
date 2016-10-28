(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['menuItems', 'MyInfoService'];
function SignUpController(menuItems, MyInfoService) {
  var $ctrl = this;
  $ctrl.menuItems = menuItems;
  
  $ctrl.submit = function () {
    MyInfoService.signUp($ctrl.signupdata);
    $ctrl.saved = true;
  };
}

})();