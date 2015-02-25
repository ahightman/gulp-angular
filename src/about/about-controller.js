app.config(['$routeProvider', function($routeProvider) {
    var routeDefinition = {
      templateUrl: 'about/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'vm'
    };

    $routeProvider.when('/about', routeDefinition);
  }])
  .controller('AboutCtrl', [function () {
    var self = this;

    self.isWarning = false;

    self.toggleWarning = function () {
      self.isWarning = !self.isWarning;
    };

  }]);
