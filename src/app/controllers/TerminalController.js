(function () {

    angular
        .module('app')
        .controller('TerminalController', [
      'terminalService',
      TerminalController
    ]);

    function TerminalController(terminalService) {
        var vm = this;

        vm.data = [];

        terminalService
            .loadAllItems()
            .then(function (response) {
                vm.data = [].concat(response);
                var keys = response[0];
                vm.keys = [];
                for (var key in keys) {
                    var k = key.replace(/_/g, ' ');
                    vm.keys.push(k);
                }
                console.log(vm.keys);
            });
    }

})();