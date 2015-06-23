'use strict';

angular.module('userVaultAngularApp')
  .controller('DashboardCtrl', function ($scope, $routeParams, $location) {
        $scope.pageSection = $routeParams.sections;
        if($scope.pageSection == null && $location.path() == '/dashboard'){
	        $location.path('/dashboard/auto-messages');
        }
  });
