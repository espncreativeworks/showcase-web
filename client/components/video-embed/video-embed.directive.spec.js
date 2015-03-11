'use strict';

describe('Directive: embed', function () {

  // load the directive's module and view
  beforeEach(module('espnCreativeworksShowcaseApp'));
  beforeEach(module('components/embed/embed.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<embed></embed>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the embed directive');
  }));
});