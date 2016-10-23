(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuController', MainMenuController);


MainMenuController.$inject = ['items'];
function MainMenuController(items) {
  var mainMenu = this;
  mainMenu.items = items;
}

})();
