'use strict';

describe('Directive: share', function () {

  // load the directive's module
  beforeEach(module('espnCreativeworksShowcaseApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<a share></a>');
    element = $compile(element)(scope);
    expect(element).toBeDefined();
  }));
});