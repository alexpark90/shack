(function(){
	'use strict';

	var controllerId = 'CarDetailController';

	angular
		.module('lokee')
		.controller(controllerId, CarDetailController);

		CarDetailController.$inject = [
			'$scope',
			'$stateParams'
		];

		function CarDetailController($scope, $stateParams){

			$scope.car = {

				"serial": 154204,
			    "make": "TESLA",
			    "model": "MRX",
			    "color": "red",
			    "year": 2014,
			    "enginetype": "V6",
			    "listprice": 57838,
			    "image": "pic0.jpg"

			};


			/// functions

			$scope.goToMain = function() {

                $location.path("/main");
            };
		}
})();