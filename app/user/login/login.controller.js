(function(){
	'use strict';

	var controllerId = 'LoginController';

	angular
		.module('shack')
		.controller(controllerId, LoginController);

		LoginController.$inject = [
			'$scope',
			'$mdDialog',
			'$mdToast'
		];

		function LoginController($scope, $mdDialog, $mdToast){

			$scope.cancel = function () {
	            $mdDialog.cancel();
	        };
		
		}
})();