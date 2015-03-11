'use strict';

describe('Controller: VideosModalCtrl', function () {

  // load the controller's module
  beforeEach(module('espnCreativeworksShowcaseApp'));

  var VideosModalCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VideosModalCtrl = $controller('VideosModalCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
