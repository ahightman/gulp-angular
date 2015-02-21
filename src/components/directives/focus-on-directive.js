// A directive to set focus on an element
// when some condition is true...
app.directive('focusOn', function() {
  return function($scope, elem, attr) {
    $scope.$on(attr.focusOn, function(e) {
      elem[0].focus();
    });
  };
});
