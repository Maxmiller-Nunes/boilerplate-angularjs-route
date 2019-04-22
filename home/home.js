const home_module = angular.module('home', []);

home_module.controller('home_ctrl', function ($scope) {
  $scope.title = 'Home';

  document.title = $scope.title;

});