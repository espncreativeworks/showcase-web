'use strict';

describe('Controller: ExecutionTagsCtrl', function () {

  // load the controller's module
  beforeEach(module('espnCreativeworksShowcaseApp'));

  var ExecutionTagsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExecutionTagsCtrl = $controller('ExecutionTagsListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
