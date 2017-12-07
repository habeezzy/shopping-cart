(function() {
  angular
  .module("app")
  .config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl:"../partials/welcomescreen.html"
    })
    .when("/shoppingcart", {
      templateUrl: "../partials/shoppingcart.html"
    });
  })
})();
