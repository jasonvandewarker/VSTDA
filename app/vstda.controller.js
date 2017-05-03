(function() {
    'use strict';

    angular
        .module('app')
        .controller('VstdaController', VstdaController);

    VstdaController.$inject = [];

    /* @ngInject */
    function VstdaController() {
        var vm = this;
        vm.title = 'VstdaController';

        vm.toDoArray = [];
        vm.postList = postList;

        function postList() {
            vm.toDoArray.push({ toDo: vm.toDoObject.toDoInput, priority: vm.toDoObject.priority });
        }

    }
})();
