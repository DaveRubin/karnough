'use strict';

describe('Controller: TablecontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('carnotTableApp'));

  var TablecontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TablecontrollerCtrl = $controller('TablecontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TablecontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
