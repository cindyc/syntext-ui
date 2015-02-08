'use strict';

/* Controllers */

var noteControllers = angular.module('noteControllers', []);

noteControllers.controller('AddNoteCtrl', ['$scope',
  function($scope, $http) {
    console.log("AddNoteCtrl called");
    $scope.submit = function() {
      console.log("AddNoteCtrl.submit() called!, this title="+this.title);
    };
  }]);


noteControllers.controller('NoteListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('notes/notes.json').success(function(data) {
      $scope.notes = data;
    });

    $scope.orderProp = 'age';
  }]);

noteControllers.controller('NoteDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('notes/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.note = data;
    });
  }]);
