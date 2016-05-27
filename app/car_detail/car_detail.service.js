(function(){

	'use strict';

	var serviceId = 'carDetailService';

	angular
		.module('shack')
		.factory(serviceId, carDetailService);

	carDetailService.$inject = ['$resource'];

	function carDetailService($resource){

		var service = {

			getCar : getCar
		};

		return service;


		////// functions 

		function getCar(id) {
			
			return $resource("json/oakville.json/:id", {});
		}
	}

})();