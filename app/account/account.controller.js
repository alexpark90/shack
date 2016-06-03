(function(){
	'use strict';

	var controllerId = 'AccountController';

	angular
		.module('shack')
		.controller(controllerId, AccountController);

		AccountController.$inject = [
			'$rootScope',
			'$scope',
			'$mdDialog',
			'$mdToast'
		];

		function AccountController($rootScope, $scope, $mdDialog, $mdToast){

		
		}
})();