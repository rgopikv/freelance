Matrimony.Login.controller('UserRegisterCtrl', ['$scope', 'UserRegistrationFactory', 
	function ($scope, UserRegistrationFactory) {
	
	$scope.userRegisterFormData = {};

	$scope.userRegister = function(){
		console.log("user register click")
		// UserRegistrationFactory.registerUser($scope.userRegisterFormData)
		// .then(function(resData){

		// }, function(errData){

		// });
	}

}])