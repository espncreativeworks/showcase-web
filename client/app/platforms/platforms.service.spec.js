'use strict';

describe('Service: Platform', function () {

  // load the service's module
  beforeEach(module('espnCreativeworksShowcaseApp'));

  // instantiate service
  var Platform;
  beforeEach(inject(function (_Platform_) {
    Platform = _Platform_;
  }));

  it('should do something', function () {
    expect(!!Platform).toBe(true);
  });

});
