'use strict';

angular.module('apTest', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'angularPoint'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/bs',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('spgrid', {
        url: '/spgrid',
        templateUrl: 'app/spgrid/spgrid.html',
        controller: 'spgridController'
      })
    ;

    $urlRouterProvider.otherwise('/spgrid');
  })
  .run(function(apConfig) {
              //To set the default site root
              apConfig.defaultUrl =
                '//sp2010';

              //To set the default location to look for
              //offline xml files.
              //apConfig.offlineXML = 'myCachedQueries/';
          });

