'use strict';

describe('Controller: CarnotCtrl', function () {

  // load the controller's module
  beforeEach(module('carnotTableApp'));

  var CarnotCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarnotCtrl = $controller('CarnotCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CarnotCtrl.awesomeThings.length).toBe(3);
  });
});
