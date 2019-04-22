const contatos_module = angular.module('contatos', []);

contatos_module.controller('contatos_ctrl', function ($scope, contatosService) {
  $scope.title = 'Contatos';

  document.title = $scope.title;

  $scope.contatos = {};

  contatosService.list(
    response => {
      $scope.contato = response;
    }
  )
});