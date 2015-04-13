'use strict';

describe('Directive: projectCard', function () {

  // load the directive's module and view
  beforeEach(module('espnCreativeworksShowcaseApp'));
  beforeEach(module('app/projects/card/project.card.directive.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should create an element with a "project-card-container" class', inject(function ($compile) {
    element = angular.element('<project-card></project-card>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.attr('class').split(' ')[0]).toBe('project-card-container');
  }));
});