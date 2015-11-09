angular.module('starter', ['ionic', 'starter.controllers', 'test', 'ngStorage'])
// and test here as well?^
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/list1.html',
          controller: 'TodoBizCtrl'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/list2.html',
            controller: 'TodoHomeCtrl'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/list3.html',
          controller: 'TodoJobsCtrl'
        }
      }
    })
  
    .state('app.settings', {
    url: '/settings',
    views: {  
      'menuContent': {
        templateUrl: 'templates/settings.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/app/search');
});
