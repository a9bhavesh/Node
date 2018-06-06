app.config(function ($routeprovider) {
    $routeprovider.when("/php",{templateUrl:"template/php.html",controller:"phpcontroller"})
                    .when("/java",{templateUrl:"template/java.html",controller:"javacontroller"})
                    .when("/dotnet",{templateUrl:"template/dotnet.html",controller:"dotnetcontroller"})
                    .otherwise("/php",{templateUrl:"template/php.html",controller:"phpcontroller"})
});