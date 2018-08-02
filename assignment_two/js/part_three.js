var app = angular.module("zooApp", []);
            app.controller('animalController', function($scope) {

            $scope.options = {
                url: 'http://localhost:3000/db_pull'
            };
            
            $scope.load = function() {
                fetch($scope.options.url, {
                method: 'get'
                }).then(function(response) {
                    if(response.ok)
                    {
                        response.json().then( function(json){
                            $scope.$apply(function (){
                                $scope.zoo = json;
                                $scope.selectedItem = $scope.zoo[0];
                                $scope.selectedItemDescription = $scope.zoo[0].description;}) 
                        });
                    }
                }).catch(function(err) {
                    console.log("Error fetching route /db_pull: ", err);
                });
            }

            $scope.updateDescription = function(){
              
                $scope.selectedItemDescription = $scope.zoo[$scope.selectedItem.id-1].description;
            }
            
});