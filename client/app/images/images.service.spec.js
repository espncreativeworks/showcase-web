'use strict';

describe('Service: Image', function () {

  // load the service's module
  beforeEach(module('espnCreativeworksShowcaseApp'));

  // instantiate service
  var Image;
  beforeEach(inject(function (_Project_) {
    Image = _Project_;
  }));

  it('should do something', function () {
    expect(!!Image).toBe(true);
  });

});
