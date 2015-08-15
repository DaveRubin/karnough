'use strict';

describe('Filter: parseLogic', function () {

  // load the filter's module
  beforeEach(module('carnotTableApp'));

  // initialize a new instance of the filter before each test
  var parseLogic;
  beforeEach(inject(function ($filter) {
    parseLogic = $filter('parseLogic');
  }));

  it('should return the input prefixed with "parseLogic filter:"', function () {
    var text = 'angularjs';
    expect(parseLogic(text)).toBe('parseLogic filter: ' + text);
  });

});
