var app = angular.module("myApp", ["ui.router"]);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    // HOME STATES AND NESTED VIEWS ========================================
        .state('about', {
            url: '/about'
            , templateUrl: "views/about.html"
            , controller: 'about-controller'
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('faq', {
            // we'll get to this in a bit  
            url: '/faq'
            , templateUrl: "views/faq.html"
            , controller: 'faq-controller'
        }).state('contact', {
            // we'll get to this in a bit  
            url: '/contact'
            , templateUrl: "views/contact.html"
            , controller: 'contact-controller'
        }).state('last', {
            // we'll get to this in a bit  
            url: '/last'
            , templateUrl: "views/last.html"
            , controller: 'last-controller'
        });
    /*
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
    });*/
});
app.directive('myCustomer', function () {
    return {
        template: 'hgdskhjg jhvw fgliuwg '
    };
});