'use strict';

angular.module('apTest')
  .service('data', function ($q, apDataService) {
    var self = this;

    self.getList = function (login) {
      var def = $q.defer();
      apDataService.getListFields({listName:'if5'}).then(function (list) {
        def.resolve(list);
      }, function (data) {
        def.reject(data);
      });
      return def.promise;;
    }

  });
