'use strict';

angular.module('apTest')
  .controller('spgridController', function ($scope, data, tasker, toastr) {
    //data.getList().then(function (data, tasker) {
    //  $scope.list = data;
    //});
    console.log(tasker);
    $scope.fields = tasker.list.customFields;

    $scope.getData = function () {
      tasker.getAllListItems().then(function (data) {
        $scope.items = data;
      });
    }
    $scope.addItem = function (item) {
      tasker.addNewItem(item).then(function (data) {
        toastr["success"]("My name is Inigo Montoya. You killed my father. Prepare to die!", "fsa");
        $scope.getData();
      })
    }
    $scope.getData();
  });
