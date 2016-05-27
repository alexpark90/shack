angular
    .module('shack')
    .directive('img', defaultPicture);

function defaultPicture() {
    var directive = {
		restrict: 'E',
		link: function(scope, element, attrs) {
			element.bind('error', function() {
				element.prop('src', 'asset/images/default_car.jpg');
			});
		}
	};
	
	return directive;
}