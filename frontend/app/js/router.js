angular.module("app").config(function ($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/', {
    templateUrl: '/index.html',
    controller: 'TasksIndexController'
  });

});