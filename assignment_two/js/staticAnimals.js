var app = angular.module("zooApp", []);
            app.controller('animalController', function($scope) {
        
            $scope.zoo = [
                
                {
                    "id": "1",
                    "name": "Lion",
                    "description": "Danger kitten"
                },
                {
                    "id": "2",
                    "name": "Lynel",
                    "description": "These fearsome monsters have lived in Hyrule since ancient times. They possess intense intelligence, resilience, and strength, making them among the most dangerous monsters in all the land. This is compounded by the fact that they have a natural resistance to all elements. You would be wise to challenge a Lynel only if you're very well prepared"
                },
                {
                    "id": "3",
                    "name": "Chocobo",
                    "description": "A breed of flightless birds, characterized by their yellow feathers, distinct odor, and the unforgettable chirp, 'kweh!' Domesticated for their gentle nature and quick feet, they are often used as a mode of ground transportation."
                },
                {
                    "id": "4",
                    "name": "Lizalfols",
                    "description": "Lizalfos are typically sword-wielding, lizard-like enemies with large tails."
                },
                {
                    "id": "5",
                    "name": "Chimera Ant",
                    "description": "Extremely dangerous insects designated quarantine level one. Also known as 'Gourmet Ants' due to carefully selecting their food, they have voracious appetites and can consume several times their own weight within a single day."
                },
                {
                    "id": "6",
                    "name": "Narwhal",
                    "description": "God spilled some of the unicorn powder on tiny whales and just decided to go with it."
                },
                {
                    "id": "7",
                    "name": "Freja",
                    "description": "A giant two headed spider. "
                },
                {
                    "id": "8",
                    "name": "Koopa",
                    "description": " turtle-like creatures with removable shells that come in many different colors, with red and green Koopa Troopas being the most common; green Koopa Troopas usually walk back and forth without any concerns for pits or other obstacles, and red Koopa Troopas usually walk back and forth without falling off of their platforms"
                },
                {
                    "id": "9",
                    "name": "Poro",
                    "description": "Poros are the mysterious, magical, and most-loved creatures originating from the Howling Abyss."
                },
                {
                    "id": "10",
                    "name": "Deku Baba",
                    "description": "This violent plant is widespread in wooded areas. It will attempt to bite anything that approaches it. Though it is covered in a tough outer husk, the inside of its mouth is soft."
                }
                ]

            $scope.selectedItem = $scope.zoo[0];
            $scope.selectedItemDescription = $scope.zoo[0].description;

            $scope.updateDescription = function(){
              
                $scope.selectedItemDescription = $scope.zoo[$scope.selectedItem.id-1].description;
            }
        });