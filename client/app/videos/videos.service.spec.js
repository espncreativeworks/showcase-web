'use strict';

describe('Service: Video', function () {

  // load the service's module
  beforeEach(module('espnCreativeworksShowcaseApp'));

  // instantiate service
  var Video;
  beforeEach(inject(function (_Project_) {
    Video = _Project_;
  }));

  it('should do something', function () {
    expect(!!Video).toBe(true);
  });

});
