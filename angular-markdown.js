var md = angular.module("ngMd", []);

md.directive("markdown", ["$window", function($window){
	var converter = function(text, elm){
		if(!$window.Showdown){
			throw new Error("Showdown is not defined.");
		}
		var md = new Showdown.converter();
		var html = md.makeHtml(text);
		if($window.hljs) {
			var parser = new DOMParser("text/html");
		}
		console.log(html)
		elm.html(html);
	}
	return {
		restrict: 'EA',
		scope: {
			md: "@"
		},
		link: function(scope, elm, attr) {

			scope.$watch("md", function(){
				converter(scope.md, elm);
			})
		}
	}
}])