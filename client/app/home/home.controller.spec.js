'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('espnCreativeworksShowcaseApp'));
  beforeEach(module('socketMock'));

  var HomeCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/projects/featured')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of featured projects to the scope', function () {
    $httpBackend.flush();
    expect(scope.projects.length).toBe(4);
  });
});
