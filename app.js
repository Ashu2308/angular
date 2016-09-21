var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/about.html"
    })
    .when("/contact", {
        templateUrl : "views/contact.html"
    })
    .when("/faq", {
        templateUrl : "views/faq.html",
		controller : 'faq-controller'
    })
	
    .when("/last", {
        templateUrl : "views/last.html"
    });
});