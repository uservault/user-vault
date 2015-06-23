'use strict';

describe('Controller: AutomessagesCtrl', function () {

  // load the controller's module
  beforeEach(module('userVaultAngularApp'));

  var AutomessagesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AutomessagesCtrl = $controller('AutomessagesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
