'use strict';

/**
 * @ngdoc function
 * @name carnotTableApp.controller:CarnotCtrl
 * @description
 * # CarnotCtrl
 * Controller of the carnotTableApp
 */
angular.module('carnotTableApp')
  .controller('CarnotCtrl', function ($scope) {

        $scope.$watch('varsArr',updateTable,true);

        $scope.rows = [];
        $scope.columns = [];

        function updateTable(newVal,oldVal){

            //get the vars, and seperate them into cols and rows
            var rowCount = Math.floor($scope.varsArr.length/2);
            var rowVars = [];
            var colVars = [];
            $scope.rows = [];
            $scope.columns = [];
            console.log(rowCount);
            for (var i = 0; i < $scope.varsArr.length; i++) {
                var tempVar =  $scope.varsArr[i];
                if (i<rowCount) {
                    rowVars.push(tempVar);
                }
                else {
                    colVars.push(tempVar);
                }
            }
            //after that permutate cols and rows
            var bools = {
                1: [[false],[true]],
                2: [[false,false],[false,true],[true,true],[true,false]],
                3: [[false,false,false],[false,false,true],[false,true,true],[false,true,false],
                    [true,true,false],[true,true,true],[true,false,true],[true,false,false]]
            }
            $scope.rows = permutation(rowVars,bools[rowVars.length]);
            $scope.columns = permutation(colVars,bools[colVars.length]);

            console.log("vars",rowVars,colVars,rowCount);
        };

        function permutation(baseArr,permutationArr) {
            var tmpArr = [];
            var permutations = Math.pow(2,baseArr.length);
            for (var i = 0; i < permutations; i++) {
                var tempObj = {};
                for (var j = 0; j < baseArr.length; j++) {
                    var tmpV = baseArr[j];
                    console.log(permutationArr[i],i);
                    tempObj[tmpV] = permutationArr[i][j];
                }
                tmpArr.push(tempObj);
            }
            return tmpArr;
        }

        $scope.getCombnation = function(objArr){

            for (var j = 0 ; j < $scope.combinations.length ; j++) {

                var combinedObj = {};
                var combination = $scope.combinations[j];

                for (var i = 0; i < objArr.length; i++) {
                    var tempObj = objArr[i];
                    for (var field in tempObj) {
                        combinedObj[field] = tempObj[field];
                    }
                }

                if (combination.same(combinedObj)) {
                    return combination;
                }
            }
            return {};
        };
  });
