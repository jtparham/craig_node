window.onload = function(){
    
    var animals = ["Lion", "Lynel", "Chocobo", "Lizalfos", "Chimera", "Cheetah", "Narhwal", "Sif", "Koopa", "Poro"];

var selectBox = document.getElementById('animals');

for( var i = 0; i < animals.length; i++){
    var option = document.createElement('option');
    option.innerHTML = animals[i];
    option.value = animals[i];
    option.id = i;
    selectBox.appendChild(option);
    }
}