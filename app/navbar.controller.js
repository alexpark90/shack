(function(){
	'use strict';

	var controllerId = 'NavBarController';

	angular
		.module('shack')
		.controller(controllerId, NavBarController);

		NavBarController.$inject = [
			'$scope',
			'$mdDialog',
			'$mdToast'
		];

		function NavBarController($scope, $mdDialog, $mdToast){

			$scope.showLogin = function(event) {

			    $mdDialog.show({
			    	templateUrl: 'user/login/login.html',
			    	controller: 'LoginController',
			    	targetEvent: event,
			    	clickOutsideToClose: true
			    	})
			    	.then(function (){
			    		// show success message
			    		$mdToast.show(
	                        $mdToast.simple()
	                        .content('You are logged in!')
	                        .hideDelay(3000)
	            		);
			    	}, function() {
			    		// show cancel message
			      		$mdToast.show(
	                        $mdToast.simple()
	                        .content('Login canceled')
	                        .hideDelay(3000)
	                	);
			    	});	
	    	};
		
		}
})();