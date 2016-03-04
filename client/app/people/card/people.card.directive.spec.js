'use strict';

describe('Directive: peopleCard', function () {

  // load the directive's module and view
  beforeEach(module('espnCreativeworksShowcaseApp'));
  beforeEach(module('app/people/card/people.card.directive.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should create an element with a "people-card-container" class', inject(function ($compile) {
    element = angular.element('<people-card></people-card>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.attr('class').split(' ')[0]).toBe('people-card-container');
  }));
});