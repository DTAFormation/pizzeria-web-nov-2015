angular.module('pzWebApp', [
    'ui.utils',
    'ngRoute',
    'ngAnimate',
    'pzWebApp.shared',
    'pzWebApp.home',
    'pzWebApp.users',
    'pzWebApp.products',
    'pzWebApp.orders',
    'ngStorage'
]);


angular.module('pzWebApp').config(function ($routeProvider) {

    // Ici, les routes générales de l'application
    // Pas de route spécifique ici !
    // Elles doivent être déclarées dans des sous-modules (comme 'home')   
    $routeProvider
        .otherwise({ redirectTo: '/home' });

});

angular.module('pzWebApp').run(function ($rootScope) {

});

// Contrôleur qui pilote globalement l'application
angular.module('pzWebApp').controller("pzWebAppCtrl", function (userService, $localStorage, $scope) {
    this.title = "Pizzeria Web";
    this.connected = userService.isConnected;
    this.logout = userService.logout;
});
