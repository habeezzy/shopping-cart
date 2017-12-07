(function() {
  var welcomeComponent = {
    controller: "listController",
    templateUrl: "partials/welcomescreen.html"
  };

  angular
    .module("app")
    .component("welcomeComponent", welcomeComponent)
})();
