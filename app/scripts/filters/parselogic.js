'use strict';

/**
 * @ngdoc filter
 * @name carnotTableApp.filter:parseLogic
 * @function
 * @description
 * # parseLogic
 * Filter in the carnotTableApp.
 */
angular.module('carnotTableApp')
  .filter('parseLogic', function () {
    return function (input) {
      var outString = "";
        angular.forEach(input, function(val, key) {
            if (key.indexOf("$$hashKey")== -1){
                outString+= key;
                if (!val) outString+="'";
            }
        });
      return outString;
    };
  });
