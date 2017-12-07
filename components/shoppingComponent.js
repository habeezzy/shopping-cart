(function() {
  var shoppingComponent = {
    controller: "listController",
    templateUrl: "partials/shoppingcart.html"
  };

  angular
    .module("app")
    .component("shoppingComponent", shoppingComponent)
})();
