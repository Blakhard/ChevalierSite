/**
 * Created by VLAD on 10.07.2015.
 */
'use strict';

angular.module('chevalierApp.about', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: 'views/about/about.html',
            controller: 'AboutCtrl'
        });
    }])

    .controller('AboutCtrl', [function() {

    }]);