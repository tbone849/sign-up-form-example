angular.module('signUpFormApp', []).directive('optIn', function(){
	return {
		restrict: 'E',
		templateUrl: 'optIn.html',
		transclude: true
	}
});