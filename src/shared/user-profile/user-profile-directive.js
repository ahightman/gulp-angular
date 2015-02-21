app.directive('userProfile', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'shared/user-profile/user-profile.html',
    scope: {
      user: '='
    }
  };
});
