/**
 * Created by VLAD on 10.07.2015.
 */
'use strict';

angular.module('chevalierApp.contacts', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/contacts', {
            templateUrl: 'views/contacts/contacts.html',
            controller: 'ContactsCtrl'
        });
    }])

    .controller('ContactsCtrl', [function() {

    }]);