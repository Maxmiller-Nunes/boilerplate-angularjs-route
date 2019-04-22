contatos_module.factory('contatosService', function ($http) {
  return {
    list: function (response) {
      $http.get('https://randomuser.me/api').then(response);
    }
  }
})