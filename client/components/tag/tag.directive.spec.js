'use strict';

describe('Directive: tag', function () {

  // load the directive's module and view
  beforeEach(module('espnCreativeworksShowcaseApp'));
  beforeEach(module('components/tag/tag.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tag></tag>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the tag directive');
  }));
});