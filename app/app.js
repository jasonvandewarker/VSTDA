(function() {
    'use strict';

    angular
        .module('app', []);
})();

(function() {
    'use strict';

    angular
        .module('app')
        .controller('VstdaController', VstdaController);

    VstdaController.$inject = [];

    /* @ngInject */
    function VstdaController() {
        var vm = this;

        vm.todDoArray = [];
        vm.toDoObject = {};

        vm.postList = function() {
          vm.toDoArray.push(vm.toDoObject);
          vm.toDoObject = ' ';
          console.log(vm.toDoArray);
        };



    }
})();
