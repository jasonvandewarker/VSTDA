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
// Takes the info put into the input and the priority set by the
// select menu and pushes them both into an array.
        function postList() {
            vm.toDoArray.push({ toDo: vm.toDoObject.toDoInput, priority: vm.toDoObject.priority });
        }

    }
})();
