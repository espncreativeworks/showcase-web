'use strict';

describe('Controller: VideosDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('espnCreativeworksShowcaseApp'));

  var VideosDetailCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VideosDetailCtrl = $controller('VideosDetailCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
