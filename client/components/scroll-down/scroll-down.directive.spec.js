'use strict';

describe('Directive: scrollDown', function () {

  // load the directive's module and view
  beforeEach(module('espnCreativeworksShowcaseApp'));
  beforeEach(module('components/scrollDown/scrollDown.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<scroll-down></scroll-down>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the scrollDown directive');
  }));
});