const app = angular.module('app', ['ngRoute', 'contatos', 'home']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home/home.html',
      controller: 'home_ctrl'
    })
    .when('/contatos', {
      templateUrl: 'contatos/contatos.html',
      controller: 'contatos_ctrl'
    })
    .otherwise({ redirectTo: '/' });

  $locationProvider.hashPrefix('');

});

app.controller('main', function ($scope) {
  $scope.title = 'Main';
  $scope.version = '1.0.0';
});