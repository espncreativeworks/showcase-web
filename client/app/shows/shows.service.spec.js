'use strict';

describe('Service: Shows', function () {

  // load the service's module
  beforeEach(module('espnCreativeworksShowcaseApp'));

  // instantiate service
  var Show;
  beforeEach(inject(function (_Show_) {
    Show = _Show_;
  }));

  it('should do something', function () {
    expect(!!Show).toBe(true);
  });

});
