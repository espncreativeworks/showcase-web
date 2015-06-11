'use strict';

describe('Service: vimeo', function () {

  // load the service's module
  beforeEach(module('espnCreativeworksShowcaseApp'));

  // instantiate service
  var vimeo;
  beforeEach(inject(function (_vimeo_) {
    vimeo = _vimeo_;
  }));

  it('should do something', function () {
    expect(!!vimeo).toBe(true);
  });

});
