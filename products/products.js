// Déclaration du module 'products'
angular.module('pzWebApp.products', [
    'ngRoute',
    'pzWebApp.shared'
]);

// Configuration du module 'products'
angular.module('pzWebApp.products').config(function($routeProvider) {

    // TODO Définir les routes spécifiques au module 'products' ici
    $routeProvider
    .when("/products",{
        templateUrl:"products/template/products.tpl.html",
        controller:"productsCtrl",
        controllerAs: "ctrl"
    })
    .when("/desserts",{
        templateUrl:"products/view/dessert.html",
        controller:"dessertCtrl",
        controllerAs: "ctrl"
    })
     .when("/details_pizza", {
            templateUrl: "products/template/details_pizza.tpl.html",
            controller: "details_pizzaCtrl",
            controllerAs: "ctrl"
        })
     .when("/boissons",{
        templateUrl:"products/view/boisson.html",
        controller:"boissonCtrl",
        controllerAs: "ctrl"
    })
    ;

});

// Contrôleur principal du module 'products'
// Usage de la syntaxe 'controller as', pas besoin du '$scope'
angular.module('pzWebApp.products').controller('details_pizzaCtrl', function (userService, detPizService) {

    var self = this;
    var id = 0;
    
    self.title = "Détails pizza";
    detPizService.promesse.then(function (pizza) {
        self.pizza = pizza[id];
        
    }.bind(this))
    
    // ...

})
.controller('productsCtrl', function(userService) {

    var self = this;

    self.title = "Page Products";

})
.controller('dessertCtrl', function(dessertService, $location) {

    var self = this;

    self.title = "Choisissez un dessert:";

    self.dessertForm = null; //formulaire correspondant au choix du dessert

    self.dessert = null; //dessert sélectionné par l'utilisateur

    //liste des desserts
    dessertService.getDesserts().then(function(data){
       self.desserts = data;
   })

    //sauvegarde du choix du dessert de l'utilisateur
    this.saveForm = function(){

        if(this.dessertForm.$invalid || self.dessert == null)
        {
            alert("Merci de sélectionner un dessert");
            return;
        }

        console.log("Target dessert is "+self.dessert);
        $location.path('/')
    }

})
.controller('boissonCtrl', function(boissonService, $location) {

    var self = this;

    self.title = "Choisissez une boisson:";

    self.boissonForm = null; //formulaire correspondant au choix de la boisson

    self.boisson = null; //boisson sélectionnée par l'utilisateur

    //liste des boissons
    boissonService.getBoissons().then(function(data){
       self.boissons = data;
   })

    //sauvegarde du choix de la boisson de l'utilisateur
    this.saveForm = function(){

        if(this.boissonForm.$invalid || self.boisson == null)
        {
            alert("Merci de sélectionner une boisson");
            return;
        }

        console.log("Target boisson is "+self.boisson);
        $location.path('/')
    }

})
;