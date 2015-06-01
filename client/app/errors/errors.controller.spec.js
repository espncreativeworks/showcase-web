'use strict';

describe('Controller: ErrorsCtrl', function () {

  // load the controller's module
  beforeEach(module('espnCreativeworksShowcaseApp'));

  var ErrorsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ErrorsCtrl = $controller('ErrorsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
