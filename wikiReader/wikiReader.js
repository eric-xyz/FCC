var firstApp = angular.module('firstApp',['ngAnimate']);

firstApp.controller('ctrl', function($scope, $http){
	$scope.showIcon = true;
	$scope.inputClass = "";
	$scope.inputHide = true;
	$scope.keyword ="";
	//var textInput = $("#keyWordInput");

	$scope.hideIcon = function(){
		$scope.showIcon = false;
		$scope.inputClass = "keyWordInput";
		$scope.inputHide = false;
		setTimeout(function(){
            $("#keyWordInput").focus();
        }, 1);
	}
	$scope.fetchData = function(){
		console.log($scope.keyword);
	}
	//$scope.iconDivClass = iconClass;
});