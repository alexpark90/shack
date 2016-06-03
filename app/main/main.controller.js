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

		vm.currentPage = 1;
		vm.pageSize = 5;
		vm.cars = mainService.getAllCars();
	}

})();