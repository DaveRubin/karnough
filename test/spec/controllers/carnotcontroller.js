'use strict';

describe('Controller: CarnotcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('carnotTableApp'));

  var CarnotcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarnotcontrollerCtrl = $controller('CarnotcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CarnotcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
