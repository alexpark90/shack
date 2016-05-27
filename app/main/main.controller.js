(function(){
	'use strict';

	var controllerId = 'MainController';

	angular
		.module('shack')
		.controller(controllerId, MainController);

	MainController.$inject = [
		'$scope',
		'$http',
		'$mdDialog',
		'$mdToast'
	];

	function MainController($scope, $http, $mdDialog, $mdToast){

		$http.get("carinfo2.json").then(function(response){
			$scope.cars = response.data;
		});
		$scope.currentPage = 1;
		$scope.pageSize = 5;
	}
})();