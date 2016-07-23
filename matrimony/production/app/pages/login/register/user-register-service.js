Matrimony.Login.service('UserRegistrationService', ['$http', 'APICONSTANTS',
    function($http, APICONSTANTS) {

        this.registerUser = function(param) {
            return $http.post(APICONSTANTS.PROTOCOL.HTTP + APICONSTANTS.DOMAIN.LOCAL +
                    APICONSTANTS.TYPE.LOGIN + APICONSTANTS.VERSION.V1 + APICONSTANTS.API.REGISTERUSER,
                    $httpParamSerializerJQLike({
                        requestData: angular.toJson(param)
                    })
                )
                .then(function(resData) {
                    return resData; //return the data response
                }, function(errData) {
                    return errData; //return the error data
                });
        };
    }
])
