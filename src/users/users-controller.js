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
    this.users = users;
  }]);
