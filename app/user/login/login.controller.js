(function(){
	'use strict';

	var controllerId = 'LoginController';

	angular
		.module('shack')
		.controller(controllerId, LoginController);

		LoginController.$inject = [
			'$scope',
			'$mdDialog',
			'$mdToast',
			'AuthService'
		];

		function LoginController($scope, $mdDialog, $mdToast, AuthService){

			$scope.cancel = function () {
	            $mdDialog.cancel();
	        };

	        $scope.login = function () {

	        	var credentials = {
	        		email : $scope.email,
	        		pwd : $scope.password
	        	};

	        	var loginError = AuthService.login(credentials);

	        	if(!loginError)
	        	{
	        		$mdDialog.hide();	
	        	}

	        };
		
		}
})();