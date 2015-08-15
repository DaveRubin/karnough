'use strict';

describe('Service: combination', function () {

  // load the service's module
  beforeEach(module('carnotTableApp'));

  // instantiate service
  var combination;
  beforeEach(inject(function (_combination_) {
    combination = _combination_;
  }));

  it('should do something', function () {
    expect(!!combination).toBe(true);
  });

});
