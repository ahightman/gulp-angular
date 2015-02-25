app.factory('usersService', ['$http', '$log', function($http, $log) {
  function sanitizeUser(ghUser) {
    return {
      name: ghUser.name || ghUser.login,
      username: ghUser.login,
      htmlUrl: ghUser.html_url,
      avatarUrl: ghUser.avatar_url,
      profileUrl: '#/users/' + ghUser.login,
      repoCount: ghUser.public_repos,
      reposUrl: ghUser.repos_url,
      company: ghUser.company,
      blog: ghUser.blog,
      location: ghUser.location,
      email: ghUser.email,
      created: ghUser.created_at
    };
  }

  return {
    list: function () {
      return $http.get('https://api.github.com/users')
        .then(function (response) {
          return (response.data || []).map(sanitizeUser);
        })
        .catch(function (error) {
          $log.log(error);
        });
    },

    getByUsername: function (username) {
      if (!username) {
        throw new Error('getByUsername requires a username');
      }

      return $http.get('https://api.github.com/users/' + username)
        .then(function (response) {
          $log.log(response);
          return sanitizeUser(response.data);
        })
        .catch(function (error) {
          $log.log(error);
        });
    }
  };
}]);
