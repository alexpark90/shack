(function(){
	'use strict';

	var controllerId = 'MainController';

	angular
		.module('shack')
		.controller(controllerId, MainController);

		MainController.$inject = [
			'$scope',
			'$mdDialog',
			'$mdToast'
		];

		function MainController($scope, $mdDialog, $mdToast){

		
		}
})();