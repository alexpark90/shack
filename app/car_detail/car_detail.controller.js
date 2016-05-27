(function(){
	'use strict';

	var controllerId = 'CarDetailController';

	angular
		.module('shack')
		.controller(controllerId, CarDetailController);

		CarDetailController.$inject = [
			'$scope',
			'$stateParams',
			'carDetailService'
		];

		function CarDetailController($scope, $stateParams, carDetailService){

			console.log("debuging: " + $stateParams.id);

			$scope.car = carDetailService.getCar($stateParams.id);


			/// functions

			$scope.goToMain = function() {

                $location.path("/main");
            };
		}
})();