'use-strict';

angular.module('userVaultAngularApp')
  .controller('SignupCtrl', function ($scope, $routeParams, $location) {
	
	$scope.userfirstname = "";
	$scope.userlastname = "";
	$scope.companyname = "";
	$scope.useremail = "";
	$scope.userpassword = "";
	$scope.currentSignupView = 'companyInformationView';
	$scope.changeView = function (type) {
		$scope.currentSignupView = type.toString();
	};
	$scope.number = "";
	$scope.expirymonth = "";
	$scope.expiryyear = "";
	$scope.expiry = $scope.expirymonth + $scope.expiryyear;
	$scope.cvc = "";	
	
	$scope.stripeCallback = function (code, result) {
		if (result.error) {
			window.alert('it failed! erros' + result.error.message);
		} else {
			window.alert('success! token: ' + result.id);
		}
	}
});
