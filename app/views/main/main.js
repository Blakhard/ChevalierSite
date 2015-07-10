/**
 * Created by VLAD on 10.07.2015.
 */
'use strict';

angular.module('chevalierApp.main', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: 'views/main/main.html',
            controller: 'MainCtrl'
        });
    }])

    .controller('MainCtrl', ['$scope', 'dataFactory', function($scope, dataFactory) {
        var result = dataFactory.teachers.query();
        result.$promise.then(function(result) {
            //Так вот. Сосбтвенно нахера нам в джейсоне type указывать надо.
            //Где-то на этом этапе нам нужно проверять, чему равен result.type
            //Если это, например, "teacher", то рисовать одну страницу.
            //Если это "file", то другую.
            //По идее этот кусок кода (всё внутри контроллера) должен уйти в index. TODO: подумать.
            //alert(result.type);
            $scope.teachers = result.content;
        })
    }]);

