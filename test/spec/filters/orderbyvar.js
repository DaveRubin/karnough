'use strict';

describe('Filter: orderByVar', function () {

  // load the filter's module
  beforeEach(module('carnotTableApp'));

  // initialize a new instance of the filter before each test
  var orderByVar;
  beforeEach(inject(function ($filter) {
    orderByVar = $filter('orderByVar');
  }));

  it('should return the input prefixed with "orderByVar filter:"', function () {
    var text = 'angularjs';
    expect(orderByVar(text)).toBe('orderByVar filter: ' + text);
  });

});
