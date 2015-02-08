'use strict';

/* App Module */

var syntacticApp = angular.module('syntacticApp', [
  'ngRoute',
  'noteControllers',
  'noteFilters',
]);

syntacticApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/note', {
        templateUrl: 'partials/add-note.html',
        controller: 'AddNoteCtrl'
      }).
      when('/note-list', {
        templateUrl: 'partials/note-list.html',
        controller: 'NoteListCtrl'
      }).
      when('/notes/:noteId', {
        templateUrl: 'partials/note-detail.html',
        controller: 'NoteDetailCtrl'
      }).
      otherwise({
        redirectTo: '/note'
      });
  }]);
