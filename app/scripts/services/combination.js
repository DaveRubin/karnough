'use strict';

/**
 * @ngdoc service
 * @name carnotTableApp.combination
 * @description
 * # combination
 * Factory in the carnotTableApp.
 */
var coombinationId = 0;
angular.module('carnotTableApp')
  .factory('combination', function () {
    // Service logic
    // ...


        var combination = function(varsObj,scope) {

            this.sc = scope;
            this.vars  = varsObj;
            this.result = 0;
            var that = this;
            this.id = coombinationId;
            coombinationId++;

            this.getVal = function () {
                var selectedVar = that.sc.orderVar;
                return that.vars[selectedVar];
            };

            this.changedResult = function (){
                if (that.result == ""  || that.result == "0") that.result = 0;
                else that.result = 1;
            };


            this.same = function(obj){
                for (var field in that.vars){
                    if (that.vars[field] != obj[field] ) return false;
                }
                return true;
            };

        };
        // Public API here
      return combination;
  });
