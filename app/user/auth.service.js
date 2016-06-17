(function () {
    'use strict';

    var serviceId = 'AuthService';

	angular
		.module('shack')
		.factory(serviceId, AuthService);

	AuthService.$inject = [
		'$rootScope',
		'$location'
	];

	function AuthService($rootScope, $http, $location) {

		var service = {
			login: login
		};

		return service;

		function login(credentials) {

			if(credentials.email == 'alex@sheridan.com' && credentials.pwd == '1111'){

				// Set values to be used later in the app
				$rootScope.loggedIn = true;
				$rootScope.currentUser = 'Alex';

				return false;
			}
			else {
				
				return true;
			};
		}
	}

})();