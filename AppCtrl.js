var app = angular.module("app", ["ngMd"]);
app.controller("AppCtrl", ["$scope", function($scope){
	$scope.data = "```function test() {" + 
  'console.log("notice the blank line before this function?");'
  + '}```';
}])
