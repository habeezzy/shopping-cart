(function() {
  function listController() {
    var vm = this;
    vm.itemList = ["bread", "fruit", "tissue"];
    vm.addItems = function(newItem) {
      vm.itemList.push(newItem);
      vm.newItem = "";
    };
    vm.remove = function(index) {
      vm.todos.splice(index, 1);
    };

  }

  angular
    .module("app")
    .controller("listController", listController);
})();
