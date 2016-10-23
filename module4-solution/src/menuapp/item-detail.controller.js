(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// 'item' is injected through state's resolve
ItemDetailController.$inject = ['items']
function ItemDetailController(items) {
  var itemsDetails = this;
  itemsDetails.category = items.category.name;
  itemsDetails.items = items.menu_items;
}

})();
