var app = angular.module('ShyftWebApp');

app.controller('addJobController',['$scope', require('./addJobController')]);
app.controller('addUserController',['$scope', require('./addUserController')]);
app.controller('mainController',['$scope', require('./maincontroller')]);
app.controller('searchController',['$scope',require('./searchcontroller')]);
app.controller('updateJobController',['$scope',require('./updateJobController')]);
app.controller('updateUserController',['$scope',require('./updateUserController')]);
app.controller('viewUsersController',['$scope',require('./viewUsersController')]);