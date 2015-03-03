'use strict';

describe('Directive: fullpage', function () {

  // load the directive's module and view
  beforeEach(module('espnCreativeworksShowcaseApp'));
  beforeEach(module('components/fullpage/fullpage.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fullpage></fullpage>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBeDefined();
  }));
});