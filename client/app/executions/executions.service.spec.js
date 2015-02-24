'use strict';

describe('Service: Execution', function () {

  // load the service's module
  beforeEach(module('espnCreativeworksShowcaseApp'));

  // instantiate service
  var Execution;
  beforeEach(inject(function (_Execution_) {
    Execution = _Execution_;
  }));

  it('should do something', function () {
    expect(!!Execution).toBe(true);
  });

});
