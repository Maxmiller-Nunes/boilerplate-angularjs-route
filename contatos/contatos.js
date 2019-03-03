angular
  .module('contatos', [])
  .controller('contatos_ctrl', function ($scope) {
    $scope.title = 'Contatos';

    document.title = $scope.title;
  });