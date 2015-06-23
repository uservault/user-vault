'use-strict';

angular.module('userVaultAngularApp')
  .controller('LoginCtrl', function ($scope, $routeParams, $location) {
  		$scope.stayLoggedin = true;
  		$scope.logInFalse = function(){
	  		$scope.stayLoggedin = false;
  		}
  		$scope.loginTrue = function(){
	  		$scope.stayLoggedin = true;
	  	}
	  	$scope.loginSwitch = function(){
		  	if ($scope.stayLoggedin == true){
			  	$scope.stayLoggedin = false;
		  	}
		  	else {
			  	$scope.stayLoggedin = true;
		  	}
	  	}
	  	$scope.forgotemail = false;
	  	$scope.sendEmail = function (){
		  	$scope.forgotemail = true;
	  	}
	  	$scope.forgotEmailEscape = function (){
		  	$scope.forgotemail = false;
	  	}
  });