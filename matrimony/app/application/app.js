'use strict';

var Matrimony = Matrimony || {};

Matrimony.Constants = angular.module('matrimony.constants', []);
Matrimony.Controller = angular.module('matrimony.controller', []);
Matrimony.Service = angular.module('matrimony.service', []);

Matrimony.Login = angular.module('login', []);

angular.module('matrimony', [
	'ui.router',
	'ngCookies',

    'matrimony.constants',
    'matrimony.controller',
    'matrimony.service',
    'login'

])

.run(['$cookies', '$rootScope', '$window', function($cookies, $rootScope, $window){

	var appCookie = $cookies.get('appSessionId');

	// if ('undefined' != typeof appCookie) {

 //    } else {
 //        $window.location.href = "http://" + $window.location.host;
 //    }

}]);
