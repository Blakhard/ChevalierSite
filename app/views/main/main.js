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
            //��� ���. ���������� ������ ��� � �������� type ��������� ����.
            //���-�� �� ���� ����� ��� ����� ���������, ���� ����� result.type
            //���� ���, ��������, "teacher", �� �������� ���� ��������.
            //���� ��� "file", �� ������.
            //�� ���� ���� ����� ���� (�� ������ �����������) ������ ���� � index. TODO: ��������.
            //alert(result.type);
            $scope.teachers = result.content;
        })
    }]);

