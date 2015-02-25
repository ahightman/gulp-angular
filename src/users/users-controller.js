app.config(['$routeProvider', function($routeProvider) {
    var routeDefinition = {
      templateUrl: 'users/users.html',
      controller: 'UsersCtrl',
      controllerAs: 'vm',
      resolve: {
        users: ['usersService', function (usersService) {
          return usersService.list();
        }]
      }
    };

    $routeProvider.when('/', routeDefinition);
    $routeProvider.when('/users', routeDefinition);
  }])
  .controller('UsersCtrl', ['users', function (users) {
    var self = this;

    self.users = users;

    //// If you didn't want to use resolve to grab the users
    //// from the API, you could do it this way in the controller:
    // usersService.list().then(function (users) {
    //   self.users = users;
    // });
  }]);
