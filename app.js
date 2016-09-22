var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/about.html",
		controller : 'about-controller'
    })
    .when("/contact", {
        templateUrl : "views/contact.html",
		controller : 'contact-controller'
    })
    .when("/faq", {
        templateUrl : "views/faq.html",
		controller : 'faq-controller'
    })
	
    .when("/last", {
        templateUrl : "views/last.html"
    });
});