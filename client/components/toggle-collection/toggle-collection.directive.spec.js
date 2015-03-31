'use strict';

describe('Directive: addToCollection', function () {

  // load the directive's module and view
  beforeEach(module('espnCreativeworksShowcaseApp'));
  beforeEach(module('components/toggle-collection/toggle-collection.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<toggle-collection></toggle-collection>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the toggleCollection directive');
  }));
});