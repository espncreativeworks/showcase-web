'use strict';

describe('Service: Brand', function () {

  // load the service's module
  beforeEach(module('espnCreativeworksShowcaseApp'));

  // instantiate service
  var Brand;
  beforeEach(inject(function (_Brand_) {
    Brand = _Brand_;
  }));

  it('should do something', function () {
    expect(!!Brand).toBe(true);
  });

});
