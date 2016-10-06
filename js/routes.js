angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.Bersicht', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/Bersicht.html',
        controller: 'BersichtCtrl'
      }
    }
  })

  .state('menu.bearbeiten', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bearbeiten.html',
        controller: 'bearbeitenCtrl'
      }
    }
  })

  .state('menu.eintragung', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eintragung.html',
        controller: 'eintragungCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.login', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.signup', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('menu.wilkommen', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wilkommen.html',
        controller: 'wilkommenCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page5')

  

});