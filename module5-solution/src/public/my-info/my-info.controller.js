(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['menuItems', 'MyInfoService'];
function MyInfoController(menuItems, MyInfoService) {
  var $ctrl = this;
  $ctrl.myInfo = MyInfoService.getMyInfo();
    
  if ($ctrl.myInfo) {
    for (var i = 0; i < menuItems.menu_items.length; i++) {
        if (menuItems.menu_items[i].short_name == $ctrl.myInfo.favorite) {
            $ctrl.menuItem = menuItems.menu_items[i];
        }
    }
  }
}

})();