'use strict';

angular.module('userVaultAngularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.utils',
  'angularPayments',
  
])
  .config(function ($routeProvider, $windowProvider, $httpProvider ) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/login',{
	   	templateUrl: 'views/login.html',
	   	controller: 'LoginCtrl'   
      })
      .when('/signup',{
	    templateUrl: 'views/signup.html',
	    controller: 'SignupCtrl'
      })
      .when( '/integrate', {
	   	templateUrl: 'views/integrate.html',
	   	controller: 'IntegrateCtrl' 
      })
      .when('/settings', {
	      templateUrl: 'views/settings.html',
	      controller: 'SettingsCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/dashboard/:sections', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
