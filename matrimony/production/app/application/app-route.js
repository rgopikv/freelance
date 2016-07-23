/**
 * Configuring the router providers.
 */

angular.module('matrimony')
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
        function($stateProvider, $urlRouterProvider, $httpProvider) {

            $httpProvider.defaults.withCredentials = false;

            $stateProvider
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: './pages/dashboard/dashboard-template.html',
                    controller: 'DashBoardCtrl'
                })

                .state('register', {
                    url: '/register',
                    templateUrl: './pages/login/register/user-register-template.html',
                    controller: 'UserRegisterCtrl'
                })

                .state('signin', {
                    url: '/signin',
                    templateUrl: './pages/login/signin/signin-template.html',
                    controller: 'UserSignInCtrl'
                });

            $urlRouterProvider.otherwise('/dashboard');
        }
    ]);