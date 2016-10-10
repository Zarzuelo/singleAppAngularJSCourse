(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// Controllers
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBougth = this;
    
  alreadyBougth.list = ShoppingListCheckOffService.getBoughtListItems();
}
    
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
    
  toBuy.list = ShoppingListCheckOffService.getToBuyListItems();
  toBuy.buy = ShoppingListCheckOffService.buyItem;
}

// Service
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyList = [
      { name: "Cookies", quantity: 10 },
      { name: "Beer cans", quantity: 24 },
      { name: "Spicy chicken wings", quantity: 12 },
      { name: "Bacon&Cheese Chips bags", quantity: 3 },
      { name: "Sushi Pieces", quantity: 8 }
  ];  

  // List of bougth items (empty)
  var boughtList = [];

  // Buy an item means move it from toBuy to alreaduBought list
  service.buyItem = function (itemIndex) {
    boughtList.push(toBuyList[itemIndex]);
    toBuyList.splice(itemIndex, 1);
  };

  // Getters
  service.getToBuyListItems = function () {
    return toBuyList;
  };
    
  service.getBoughtListItems = function () {
    return boughtList;
  };
}

})()