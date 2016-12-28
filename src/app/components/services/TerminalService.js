(function () {
    'use strict';

    angular.module('app')
        .service('terminalService', [
        '$q', '$http',
      terminalService
  ]);

    function terminalService($q, $http) {
        var data;
        var url = "./assets/jsons/terminals.json";

        return {
            loadAllItems: function () {
                return $http.get(url).then(successCallback, errorCallback);
            }
        };

        function successCallback(response) {
            console.log(response);
            data = response.data;
            return data;
        }

        function errorCallback(error) {
            console.log(error);
            data = [];
            return error;
        }
    }
})();