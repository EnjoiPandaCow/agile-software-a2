require('angular');
require('angular-route');
var app = angular.module('ShyftWebApp', ['ngRoute']);
require('./controllers/index');

app.service('myService', function(){
   var myService = {
       fName0: '',
       lName0: '',
       email0: '',
       password0: '',
       contactNo0: '',
       street0: '',
       town0: '',
       county0: '',
       identity0: ''
   };
   return myService;
});

app.service('myService1', function(){
    var myService1 = {
        title1: '',
        desc1: '',
        size1: '',
        cStreet1: '',
        cTown1: '',
        cCounty1: '',
        dStreet1: '',
        dTown1: '',
        dCounty1: '',
        dTime: '',
        price: '',
        identity1: ''
    };
    return myService1;
});

app.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'public/pages/home.ejs',
            controller  : 'mainController'
        })

        .when('/job', {
            templateUrl : 'public/pages/addjob.ejs',
            controller : 'addjobController'
        })

        .when('/jobs', {
            templateUrl : 'public/pages/search.ejs',
            controller :  'searchController'
        })

        .when('/user', {
            templateUrl : 'public/pages/adduser.ejs',
            controller : 'adduserController'
        })

        .when('/updateUser', {
            templateUrl : 'public/pages/updateUser.ejs',
            controller : 'updateUserController'

        })

        .when('/updateJob', {
            templateUrl : 'public/pages/updateJob.ejs',
            controller : 'updateJobController'

        })

        .when('/users', {
            templateUrl : 'public/pages/viewusers.ejs',
            controller : 'viewUsersController'

        });
});
