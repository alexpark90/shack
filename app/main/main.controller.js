(function(){
	'use strict';

	var controllerId = 'MainController';

	angular
		.module('shack')
		.controller(controllerId, MainController);

	MainController.$inject = [
		'mainService'
	];

	function MainController(mainService) {

		var vm = this;

		vm.cars = mainService.getAllCars();
	}

})();
