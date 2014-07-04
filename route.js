// route
'use static'
var ccmsApp = angular.module('ccmsApp', []).
    config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/home', {'templateUrl': 'views/home.html', controller: 'homeCtr'})
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);