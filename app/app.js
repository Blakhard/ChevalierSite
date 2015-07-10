'use strict';

// Declare app level module which depends on views, and components
angular.module('chevalierApp', [
  'ngRoute',
  'chevalierApp.view1',
  'chevalierApp.view2',
  'chevalierApp.main',
  'chevalierApp.version',
  'chevalierApp.providers',
  'chevalierApp.contacts',
  'chevalierApp.about'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/main'});
}]);
