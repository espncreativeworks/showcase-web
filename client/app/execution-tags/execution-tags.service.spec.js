'use strict';

describe('Service: ExecutionTag', function () {

  // load the service's module
  beforeEach(module('espnCreativeworksShowcaseApp'));

  // instantiate service
  var ExecutionTag;
  beforeEach(inject(function (_ExecutionTag_) {
    ExecutionTag = _ExecutionTag_;
  }));

  it('should do something', function () {
    expect(!!ExecutionTag).toBe(true);
  });

});
