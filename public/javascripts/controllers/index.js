var app = angular.module('ShyftWebApp');

app.controller('addJobController', require('./addjobcontroller'));
app.controller('addUserController', require('./addusercontroller'));
app.controller('mainController', require('./maincontroller'));
app.controller('searchController', require('./searchcontroller'));
app.controller('updateJobController', require('./updateJobController'));
app.controller('updateUserController', require('./updateUserController'));
app.controller('viewUsersController', require('./viewUsersController'));