'use strict';

describe('Service: PeopleFilters', function () {

  // load the service's module
  beforeEach(module('espnCreativeworksShowcaseApp'));

  // instantiate service
  var PeopleFilters;
  beforeEach(inject(function (_PeopleFilters_) {
    PeopleFilters = _PeopleFilters_;
  }));

  it('should do something', function () {
    expect(!!PeopleFilters).toBe(true);
  });

});