'use strict';

/**
 * @ngdoc function
 * @name carnotTableApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the carnotTableApp
 */
angular.module('carnotTableApp')
  .controller('MainCtrl', function ($scope,combination) {

        $scope.vars = "x,y,z";
        $scope.combinations = [];

        $scope.varsArr = [];

        $scope.orderVar = "";
        $scope.getOrder = function(){
            return $scope.orderVar;
        };

        createFunction(true);
        $scope.$watch("vars",onVarsChange);

        $scope.changeSort = function(newVal){
            $scope.orderVar = newVal;
        };

        function onVarsChange(newval,oldVal) {
            $scope.varsArr = $scope.vars.split(',');
            for (var i = 0; i < $scope.varsArr.length; i++) {
                var obj = $scope.varsArr[i];
                if(obj== "") {
                    $scope.varsArr.splice(i,1);
                    break;
                }
            }
            createFunction();
        }

        function createFunction() {

            console.log("creating combinations");
            var sepVars = $scope.varsArr;
            var rows = Math.pow(2,sepVars.length);
            $scope.functionVar = [];
            $scope.combinations = [];

            for (var i = 0; i < rows; i++) {
                var tempString = "";
                var temp = i;
                var index = sepVars.length - 1;
                var obj = {};

                for (var j = 0; j < sepVars.length; j++) {
                    obj[ sepVars[j] ] = false;
                }
                while(temp>=1) {
                    //console.log(temp,temp%2 ,Math.floor(temp/2));
                    if (temp%2 ==1){
                        obj[sepVars[index]] = true;
                        tempString += sepVars[index];
                    }
                    temp  = Math.floor(temp/2);
                    index--;
                }

                var newCombination = new combination(obj,$scope);

                $scope.combinations.push(newCombination);
            }
            $scope.orderVar = sepVars[0];
        }
  });
