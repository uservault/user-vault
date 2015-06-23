'use strict';

angular.module('userVaultAngularApp')
  .controller('IntegrateCtrl', function ($scope, $timeout, $location) {
  	$scope.loader = false;
  	$scope.submitIntegrate =  function(){
	  	$scope.loader = true;
	  	$timeout(function(){
		  	$location.path('/dashboard/campaigns');
	  	},
	  	2000
	  	);
  	};
  	
});
