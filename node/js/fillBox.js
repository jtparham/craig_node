var app = angular.module('fillBox', []);

app.controller('fillBoxController', function($scope){
    var getNames = require("./getNames.js");
    console.log("Tada ", getNames);
    $scope.options = getNames;
});

