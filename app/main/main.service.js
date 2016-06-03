(function() {
	'use strict';

	var serviceID = 'mainService';

	angular
		.module('shack')
		.factory(serviceID, mainService);

	mainService.$inject = [];

	function mainService(){

		var service = {

			getAllCars : getAllCars
		}

		return service;

		////////// functions

		function getAllCars() {

			return [
				  {
				    "serial": 154204,
				    "make": "TESLA",
				    "model": "MRX",
				    "color": "red",
				    "year": 2014,
				    "enginetype": "V6",
				    "listprice": 57838,
				    "image": "pic0.jpg"
				  },
				  {
				    "serial": 857088,
				    "make": "LANDROVER",
				    "model": "XKR",
				    "color": "red",
				    "year": 2013,
				    "enginetype": "V4",
				    "listprice": 63617,
				    "image": "pic1.jpg"
				  },
				  {
				    "serial": 948559,
				    "make": "MERCEDES",
				    "model": "RX4",
				    "color": "white",
				    "year": 2008,
				    "enginetype": "V8",
				    "listprice": 47805,
				    "image": "pic2.jpg"
				  },
				  {
				    "serial": 921244,
				    "make": " HONDA",
				    "model": "CSX",
				    "color": "gray",
				    "year": 2008,
				    "enginetype": "V4",
				    "listprice": 36437,
				    "image": "pic3.jpg"
				  },
				  {
				    "serial": 200501,
				    "make": "ACURA",
				    "model": "XKR",
				    "color": "black",
				    "year": 2012,
				    "enginetype": "V12",
				    "listprice": 61434,
				    "image": "pic4.jpg"
				  },
				  {
				    "serial": 584342,
				    "make": "MERCEDES",
				    "model": "RX4",
				    "color": "white",
				    "year": 2007,
				    "enginetype": "V12",
				    "listprice": 34641,
				    "image": "pic5.jpg"
				  },
				  {
				    "serial": 224277,
				    "make": "MERCEDES",
				    "model": "RX4",
				    "color": "red",
				    "year": 2015,
				    "enginetype": "V6",
				    "listprice": 66182,
				    "image": "pic6.jpg"
				  },
				  {
				    "serial": 393361,
				    "make": "TESLA",
				    "model": "DU",
				    "color": "gray",
				    "year": 2015,
				    "enginetype": "V4",
				    "listprice": 45861,
				    "image": "pic7.jpg"
				  },
				  {
				    "serial": 185951,
				    "make": "MERCEDES",
				    "model": "RX4",
				    "color": "black",
				    "year": 2008,
				    "enginetype": "V8",
				    "listprice": 62893,
				    "image": "pic8.jpg"
				  },
				  {
				    "serial": 307146,
				    "make": "MERCEDES",
				    "model": "XKR",
				    "color": "white",
				    "year": 2011,
				    "enginetype": "V6",
				    "listprice": 68684,
				    "image": "pic9.jpg"
				  },
				  {
				    "serial": 103487,
				    "make": "LANDROVER",
				    "model": "XKR",
				    "color": "gray",
				    "year": 2011,
				    "enginetype": "V6",
				    "listprice": 45043,
				    "image": "pic10.jpg"
				  },
				  {
				    "serial": 743475,
				    "make": "TESLA",
				    "model": "RX4",
				    "color": "black",
				    "year": 2010,
				    "enginetype": "V6",
				    "listprice": 50242,
				    "image": "pic11.jpg"
				  },
				  {
				    "serial": 659103,
				    "make": " HONDA",
				    "model": "MRX",
				    "color": "gray",
				    "year": 2007,
				    "enginetype": "V12",
				    "listprice": 54825,
				    "image": "pic12.jpg"
				  },
				  {
				    "serial": 355030,
				    "make": "LANDROVER",
				    "model": "XKR",
				    "color": "red",
				    "year": 2010,
				    "enginetype": "V4",
				    "listprice": 69859,
				    "image": "pic13.jpg"
				  },
				  {
				    "serial": 404423,
				    "make": "MERCEDES",
				    "model": "RX4",
				    "color": "yellow",
				    "year": 2013,
				    "enginetype": "V6",
				    "listprice": 50531,
				    "image": "pic14.jpg"
				  },
				  {
				    "serial": 158810,
				    "make": "ACURA",
				    "model": "XKR",
				    "color": "black",
				    "year": 2015,
				    "enginetype": "V8",
				    "listprice": 65493,
				    "image": "pic15.jpg"
				  },
				  {
				    "serial": 687604,
				    "make": " HONDA",
				    "model": "CSX",
				    "color": "yellow",
				    "year": 2010,
				    "enginetype": "V8",
				    "listprice": 47543,
				    "image": "pic16.jpg"
				  },
				  {
				    "serial": 602656,
				    "make": "LANDROVER",
				    "model": "MRX",
				    "color": "red",
				    "year": 2016,
				    "enginetype": "V8",
				    "listprice": 38261,
				    "image": "pic17.jpg"
				  },
				  {
				    "serial": 678519,
				    "make": "TOYOTA",
				    "model": "MRX",
				    "color": "gray",
				    "year": 2012,
				    "enginetype": "V6",
				    "listprice": 61883,
				    "image": "pic18.jpg"
				  },
				  {
				    "serial": 637231,
				    "make": " HONDA",
				    "model": "MRX",
				    "color": "yellow",
				    "year": 2007,
				    "enginetype": "V4",
				    "listprice": 36892,
				    "image": "pic19.jpg"
				  }
			]
		};
	}
})();