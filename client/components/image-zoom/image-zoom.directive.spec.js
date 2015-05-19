'use strict';

describe('Directive: imageZoom', function () {

  // load the directive's module
  beforeEach(module('espnCreativeworksShowcaseApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<image-zoom></image-zoom>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the imageZoom directive');
  }));
});