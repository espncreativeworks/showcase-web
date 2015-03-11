'use strict';

describe('Controller: VideosListCtrl', function () {

  // load the controller's module
  beforeEach(module('espnCreativeworksShowcaseApp'));

  var VideosListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VideosListCtrl = $controller('VideosListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
