(function () {
'use strict';

angular.module('MenuApp')
.component('menu', {
  templateUrl: 'src/menuapp/templates/menuapp.template.html',
  bindings: {
    items: '<'
  }
});

})();
