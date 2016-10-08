var firstApp = angular.module('firstApp',['ngAnimate']);

firstApp.controller('ctrl', function($scope, $http, $log){
	$scope.showIcon = true;
	$scope.inputClass = "";
	$scope.inputHide = true;
	$scope.keyword ="";
	// var baseUrl ="https://en.wikipedia.org/w/api.php?format=json&action=query&" + 
	// 			 "generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts" + 
	// 			 "&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
    var suffix = "&callback=JSON_CALLBACK";

	$scope.hideIcon = function(){
		$scope.showIcon = false;
		$scope.inputClass = "keyWordInput";
		$scope.inputHide = false;
		setTimeout(function(){
            $("#keyWordInput").focus();
        }, 1);
	}
	$scope.fetchData = function(){
		if(typeof $scope.keyword != undefined && 
			$scope.keyword != ""){
			getWikiResult();
		}
		
	}
	var getWikiResult = function(){
		var realUrl = baseUrl+$scope.keyword+suffix;
		$http.jsonp(realUrl).then(function(response){
			//$log.info(response);
			angular.forEach(response.data.query.pages, function(v , k){
				console.log(v.title);
			});
		}, function(response){
			console.log("fail");
		});
	}

	//$scope.iconDivClass = iconClass;
});