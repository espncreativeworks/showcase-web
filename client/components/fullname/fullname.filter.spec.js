'use strict';

describe('Filter: fullname', function () {

  // load the filter's module
  beforeEach(module('espnCreativeworksShowcaseApp'));

  // initialize a new instance of the filter before each test
  var fullname;
  beforeEach(inject(function ($filter) {
    fullname = $filter('fullname');
  }));

  it('should return the input prefixed with "fullname filter:"', function () {
    var text = 'angularjs';
    expect(fullname(text)).toBe('fullname filter: ' + text);
  });

});
