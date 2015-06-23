'use strict';

angular.module('userVaultAngularApp')
  .controller('AutomessagesCtrl', function ($scope) {
    $scope.draftTitle = 'Name Your Campaign';
    $scope.showTitle = true;
    $scope.editTitle = function (){
		$scope.showTitle = false;
    };
    $scope.currentComposerView = 'emailComposer';
    $scope.composerType = function (type){
		$scope.currentComposerView = type.toString();   
	}
	$scope.message = { };
	$scope.saveMessage = function (message){
		$scope.message = message.toString();
	}
	$scope.agents = [
		{id: 'bac64181-9288-4281-8f3f-285a7d214f7f', name: 'Ryan Koven'},
		{id: 'daniel tawfik', name: 'Daniel Tawfik'},
		{id: 'aman fahimullah', name: 'Aman Fahimullah'}
	];
  });
