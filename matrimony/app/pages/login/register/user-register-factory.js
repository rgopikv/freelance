
Matrimony.Login.service('UserRegistrationFactory', ['$q', 'UserRegistrationService',
    function($q, UserRegistrationService) {

    	var param = {
    		//Prepare the parameter for api call
    	}

    	/**
    	 * [registerUser description]
    	 * @param  {[type]} param [description]
    	 * @return {[type]}       [description]
    	 */
        var registerUser = function(param) {
            return $q(function(resolve, reject) {
                UserRegistrationService.registerUser()
                    .then(function(resData) {
                    	resolve(resData); //Need to check condition based on response format
                    }, function(errData) {
                    	reject(errData);
                    });
            });
        };

        //Returns factory object which contains the available methods for this factory
        return UserRegistrationFactory = {
        	registerUser : registerUser
        }
    }
])
