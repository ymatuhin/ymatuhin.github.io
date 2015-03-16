angular.module('myApp.views', []);

"use strict";
angular.module('myApp.services', []).factory('twitterService', function($q) {
  var authorizationResult;
  authorizationResult = false;
  return {
    initialize: function() {
      OAuth.initialize('tuKatNHNT1CMQZvR9f8tIUia76k', {
        cache: true
      });
      authorizationResult = OAuth.create('twitter');
    },
    isReady: function() {
      return authorizationResult;
    },
    connectTwitter: function() {
      var deferred;
      deferred = $q.defer();
      OAuth.popup('twitter', {
        cache: true
      }, function(error, result) {
        if (!error) {
          authorizationResult = result;
          deferred.resolve();
        } else {
          alert('Some error with Twitter Connection');
        }
      });
      return deferred.promise;
    },
    clearCache: function() {
      OAuth.clearCache('twitter');
      authorizationResult = false;
    },
    getLatestTweets: function() {
      var deferred, promise;
      deferred = $q.defer();
      promise = authorizationResult.get('/1.1/statuses/home_timeline.json').done(function(data, error) {
        deferred.resolve(data);
      }).fail((function(err) {
        alert('Ошибка!');
        return deferred.reject(err);
      }));
      return deferred.promise;
    },
    getUserById: function(id) {
      var deferred, e, promise;
      deferred = $q.defer();
      try {
        promise = authorizationResult.get({
          url: '/1.1/users/show.json',
          data: {
            user_id: id
          }
        }).done(function(data, error) {
          deferred.resolve(data);
        }).fail((function(err) {
          alert('Ошибка!');
          return deferred.reject(err);
        }));
      } catch (_error) {
        e = _error;
        deferred.reject({
          error: e
        });
      }
      return deferred.promise;
    },
    messageToUserId: function(id, text) {
      var deferred, promise;
      deferred = $q.defer();
      promise = authorizationResult.post({
        url: '/1.1/direct_messages/new.json',
        data: {
          user_id: id,
          text: text
        }
      }).done(function(data, error) {
        deferred.resolve(data);
      });
      return deferred.promise;
    }
  };
});

"use strict";
angular.module("myApp.filters", []);

"use strict";
angular.module("myApp.directives", []);

"use strict";
var controllers;

controllers = angular.module("myApp.controllers", []);

controllers.controller('MyCtrl1', function($scope, $q, twitterService) {
  $scope.tweets;
  twitterService.initialize();
  $scope.twReady = function() {
    return !!twitterService.isReady();
  };
  $scope.refreshTimeline = function(update) {
    if (update || (!localStorage['tweets'])) {
      console.log('Update', update);
      twitterService.getLatestTweets().then((function(data) {
        $scope.tweets = data;
        localStorage['tweets'] = JSON.stringify(data);
      }), (function() {
        return console.log('Error');
      }));
    } else {
      if (localStorage['tweets']) {
        $scope.tweets = JSON.parse(localStorage['tweets']);
      }
    }
  };
  $scope.connectButton = function() {
    twitterService.connectTwitter().then(function() {
      if (twitterService.isReady()) {
        $scope.refreshTimeline(true);
        return;
      }
    });
  };
  $scope.signOut = function() {
    twitterService.clearCache();
    localStorage.removeItem('tweets');
    if ($scope.tweets) {
      $scope.tweets.length = 0;
    }
  };
  if (twitterService.isReady()) {
    $scope.refreshTimeline();
  }
});

controllers.controller('MyCtrl2', function($scope, $routeParams, twitterService, $location) {
  $scope.id = $routeParams.id;
  $scope.sendMessage = function(text) {
    return twitterService.messageToUserId($scope.id, text).then(function(response) {
      $scope.textToUser = "";
      return alert('Message sent!');
    });
  };
  return twitterService.getUserById($scope.id).then((function(user) {
    $scope.user = user;
  }), (function(err) {
    return $location.path('/');
  }));
});

"use strict";
angular.module("myApp", ["myApp.views", "myApp.filters", "myApp.services", "myApp.directives", "myApp.controllers", "ngRoute"]).config([
  "$routeProvider", function($routeProvider) {
    $routeProvider.when("/view1", {
      templateUrl: "/partial1.html",
      controller: "MyCtrl1"
    });
    $routeProvider.when("/view2/:id", {
      templateUrl: "/partial2.html",
      controller: "MyCtrl2"
    });
    return $routeProvider.otherwise({
      redirectTo: "/view1"
    });
  }
]);
