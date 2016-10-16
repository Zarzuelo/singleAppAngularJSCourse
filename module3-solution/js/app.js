(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')
.directive('foundItems', FoundItemsDirective);

// Controller
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;
  // At the begining dont show any error message
  ctrl.notFoundMessage = '';
  
  // Intialize search term and found elements list
  ctrl.term = '';
  ctrl.found = [];

  // When click on Narrow button, execute search method and call promise from service
  ctrl.search = function () {
      // After first search, set no found message
      var promise = MenuSearchService.getMatchedMenuItems(ctrl.term);

      promise.then(function (response) {
        ctrl.found = MenuSearchService.setFound (response);
        
        if (ctrl.found.length) {
            ctrl.notFoundMessage = '';
        }
        else {
            ctrl.notFoundMessage = 'Nothing found!';
        }
      })
      .catch(function (error) {
            // If any API error occurs, show error on screen too
            ctrl.notFoundMessage = 'Error retrieving menu from server';
      });
  }
  
  ctrl.removeItem = MenuSearchService.removeItem;
}

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'ctrl',
    bindToController: true
  };

  return ddo;
}

// Service
MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;
    
  var found = [];

  // Get marched items from restaurant API
  service.getMatchedMenuItems = function (searchTerm) {
    var searchTermLowercase = searchTerm.toLowerCase();
      
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
      var rawMenu = result.data.menu_items;
      
      var filteredMenu = rawMenu.filter(function(obj){
        var name = obj.name.toLowerCase();
        if (name.indexOf(searchTermLowercase) !== -1) {
            return obj;
        }
      });
        
      if (!searchTerm) {
        return [];
      }
      
      return filteredMenu;
    });

    return response;
  };
    
  service.removeItem = function (index) {
    found.splice(index, 1);
  }
  
  service.setFound = function (newFound) {
      found = newFound;
      return found;
  }
}

})()