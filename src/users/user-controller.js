app.config(['$routeProvider', function($routeProvider) {
    var routeDefinition = {
      templateUrl: 'users/user.html',
      controller: 'UserCtrl',
      controllerAs: 'vm',
      resolve: {
        user: ['usersService', '$route', function (usersService, $route) {
          var routeParams = $route.current.params;
          return usersService.getByUsername(routeParams.username);
        }]
      }
    };

    $routeProvider.when('/users/:username', routeDefinition);
  }])
  .controller('UserCtrl', ['user', function (user) {
    this.user = user;
  }]);
