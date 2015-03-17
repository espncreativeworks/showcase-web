'use strict';

describe('Service: ProjectFilters', function () {

  // load the service's module
  beforeEach(module('espnCreativeworksShowcaseApp'));

  // instantiate service
  var ProjectFilters;
  beforeEach(inject(function (_ProjectFilters_) {
    ProjectFilters = _ProjectFilters_;
  }));

  it('should do something', function () {
    expect(!!ProjectFilters).toBe(true);
  });

});
