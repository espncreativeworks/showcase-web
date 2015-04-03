'use strict';

describe('Service: CollectionItem', function () {

  // load the service's module
  beforeEach(module('espnCreativeworksShowcaseApp'));

  // instantiate service
  var CollectionItem;
  beforeEach(inject(function (_CollectionItem_) {
    CollectionItem = _CollectionItem_;
  }));

  it('should do something', function () {
    expect(!!CollectionItem).toBe(true);
  });

});
