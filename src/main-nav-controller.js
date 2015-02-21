app.controller('MainNavCtrl',
  ['$document', '$location', 'StringUtil', function($document, $location, StringUtil) {
    var self = this;

    // Just showing how we might set the document title the
    // Angular way... Should probably set this to the title
    // of whatever page is current...
    $document.prop('title', 'gHub');

    self.isActive = function (path) {
      // The default route is a special case.
      if (path === '/') {
        return $location.path() === '/';
      }

      return StringUtil.startsWith($location.path(), path);
    };
  }]);
