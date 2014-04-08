var md = angular.module("ngMd", []);

md.directive("markdown", ["$window", function($window){
	var converter = function(text, elm){
		if(!$window.Showdown){
			throw new Error("Showdown is not defined.");
		}
		var md = new Showdown.converter({extensions: ['github']});
		var html = md.makeHtml(text);
		if($window.hljs) {
			var parser = new DOMParser();
			var doc = parser.parseFromString(html, "text/html");
			var code = doc.getElementsByTagName("code");

			for(var i = 0; i < code.length; i++) {
				code[i].innerHTML = hljs.highlightAuto(code[i].innerHTML).value;
			}
			console.log(code);
			console.log(code.innerHTML);
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