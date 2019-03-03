angular
  .module('home', [])
  .controller('home_ctrl', function ($scope) {
    $scope.title = 'Home';

    document.title = $scope.title;

  });