(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);


MyInfoService.$inject = [];
function MyInfoService() {
  var service = this;
  var savedFormData = {};

  service.signUp = function (formData) {
    savedFormData = formData;
  };


  service.getMyInfo = function () {
      return $.isEmptyObject(savedFormData) ? false : savedFormData;
  };

}

})();
