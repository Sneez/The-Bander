angular.module('bander.controllers', []);
angular.module('bander.services', []);
angular.module('bander.filters', []);

angular.module('bander', ['ionic', 'bander.controllers', 'bander.services', 'bander.filters', 'simpleLogin', 'firebase', 'simpleLoginTools'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})



.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('login', {
      url: '/login',
          templateUrl: 'login/login.html',
          controller: 'LoginCtrl'
    })

    .state('tab.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: 'profile/profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })

    .state('profile', {
        // Profile when viewed by different user
        url: '/other/profile/:profileId',
        controller: 'ProfileCtrl',
        templateUrl: 'profile/profile.html'
    })


    .state('chat', {
        url: '/chat/:chatId',
        controller: 'ChatCtrl',
        templateUrl: 'messages/chat.html'
    })

    .state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'friends/friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })

    .state('tab.search', {
      url: '/search',
      views: {
        'tab-search': {
          templateUrl: 'search/search.html',
          controller: 'SearchCtrl'
        }
      }
    })

    .state('tab.messages', {
      url: '/messages',
      views: {
        'tab-messages': {
          templateUrl: 'messages/messages.html',
          controller: 'MessagesCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

})
