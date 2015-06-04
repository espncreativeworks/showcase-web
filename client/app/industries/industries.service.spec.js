'use strict';

describe('Service: Industry', function () {

  // load the service's module
  beforeEach(module('espnCreativeworksShowcaseApp'));

  // instantiate service
  var Industry;
  beforeEach(inject(function (_Industry_) {
    Industry = _Industry_;
  }));

  it('should do something', function () {
    expect(!!Industry).toBe(true);
  });

});
