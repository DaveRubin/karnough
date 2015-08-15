"use strict";angular.module("carnotTableApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("carnotTableApp").controller("MainCtrl",["$scope","combination",function(a,b){function c(b,c){a.varsArr=a.vars.split(",");for(var e=0;e<a.varsArr.length;e++){var f=a.varsArr[e];if(""==f){a.varsArr.splice(e,1);break}}d()}function d(){console.log("creating combinations");var c=a.varsArr,d=Math.pow(2,c.length);a.functionVar=[],a.combinations=[];for(var e=0;d>e;e++){for(var f="",g=e,h=c.length-1,i={},j=0;j<c.length;j++)i[c[j]]=!1;for(;g>=1;)g%2==1&&(i[c[h]]=!0,f+=c[h]),g=Math.floor(g/2),h--;var k=new b(i,a);a.combinations.push(k)}a.orderVar=c[0]}a.vars="x,y,z",a.combinations=[],a.varsArr=[],a.orderVar="",a.getOrder=function(){return a.orderVar},d(!0),a.$watch("vars",c),a.changeSort=function(b){a.orderVar=b}}]),angular.module("carnotTableApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("carnotTableApp").controller("TablecontrollerCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]});var coombinationId=0;angular.module("carnotTableApp").factory("combination",function(){var a=function(a,b){this.sc=b,this.vars=a,this.result=0;var c=this;this.id=coombinationId,coombinationId++,this.getVal=function(){var a=c.sc.orderVar;return c.vars[a]},this.changedResult=function(){""==c.result?c.result=0:c.result>1&&(c.result=1)},this.same=function(a){for(var b in c.vars)if(c.vars[b]!=a[b])return!1;return!0}};return a}),angular.module("carnotTableApp").controller("CarnotCtrl",["$scope",function(a){function b(b,d){var e=Math.floor(a.varsArr.length/2),f=[],g=[];a.rows=[],a.columns=[],console.log(e);for(var h=0;h<a.varsArr.length;h++){var i=a.varsArr[h];e>h?f.push(i):g.push(i)}var j={1:[[!1],[!0]],2:[[!1,!1],[!1,!0],[!0,!0],[!0,!1]],3:[[!1,!1,!1],[!1,!1,!0],[!1,!0,!0],[!1,!0,!1],[!0,!0,!1],[!0,!0,!0],[!0,!1,!0],[!0,!1,!1]]};a.rows=c(f,j[f.length]),a.columns=c(g,j[g.length]),console.log("vars",f,g,e)}function c(a,b){for(var c=[],d=Math.pow(2,a.length),e=0;d>e;e++){for(var f={},g=0;g<a.length;g++){var h=a[g];console.log(b[e],e),f[h]=b[e][g]}c.push(f)}return c}a.$watch("varsArr",b,!0),a.rows=[],a.columns=[],a.getCombnation=function(b){for(var c=0;c<a.combinations.length;c++){for(var d={},e=a.combinations[c],f=0;f<b.length;f++){var g=b[f];for(var h in g)d[h]=g[h]}if(e.same(d))return e}return{}}}]),angular.module("carnotTableApp").filter("parseLogic",function(){return function(a){var b="";return angular.forEach(a,function(a,c){-1==c.indexOf("$$hashKey")&&(b+=c,a||(b+="'"))}),b}}),angular.module("carnotTableApp").run(["$templateCache",function(a){a.put("views/about.html","<p>Just a simple truth table to karnough converter</p>"),a.put("views/main.html",'<input ng-model="vars" type="text"> <br> <div id="truth-table" class="table-container col-xs-12 col-sm-6"> <h2>Truth table </h2> <table class="table table-condensed table-bordered"> <thead> <tr> <th class="clickable" ng-class="{selected:orderVar==var} " ng-repeat="var in varsArr" ng-click="changeSort(var)"> {{var}} </th> <th> f </th> </tr> </thead> <tbody> <tr ng-repeat="combination in combinations | orderBy:\'getVal()\'" ng-class="{highlight:($index/4 - ($index/4 % 1))%2 == 1}"> <td ng-repeat="var in combination.vars"> {{var? 1:0 }} </td> <td> <input type="text" ng-model="combination.result" ng-change="combination.changedResult()"> </td> </tr> </tbody> </table> </div> <div id="carnot-table" class="table-container col-xs-12 col-sm-6"> <h2>Carnot table</h2> <table ng-controller="CarnotCtrl" class="table table-bordered"> <thead> <tr> <th> + </th> <th ng-repeat="col in columns"> {{col|parseLogic}} </th> </tr> </thead> <tbody> <tr ng-repeat="row in rows"> <td> {{row|parseLogic}} </td> <th ng-repeat="col in columns"> {{getCombnation([col,row]).result}} </th> </tr> </tbody> </table> </div>')}]);