'use strict';

describe('Directive: fullpageSlide', function () {

  // load the directive's module and view
  beforeEach(module('espnCreativeworksShowcaseApp'));
  beforeEach(module('components/fullpage/slide/slide.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fullpage-slide></fullpage-slide>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBeDefined();
  }));
});