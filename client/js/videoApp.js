var vidApp = angular.module("vidApp", []);

vidApp.config(function($routeProvider){
    console.log($routeProvider);
    $routeProvider
        .when("/",{
            controller: "videoControl",
            templateUrl: "js/views/videoView.html"
        });
 
    $routeProvider.otherwise({"redirectTo": "/"});  //.otherwise("/"); //does not work
});