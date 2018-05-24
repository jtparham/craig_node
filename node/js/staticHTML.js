window.onload = function(){
    
    var usernames = ["Nick", "Tommy", "Marc", "Mike", "Ryan"];

var selectBox = document.getElementById('userNames');

for( var i = 0; i < usernames.length; i++){
    var option = document.createElement('option');
    option.innerHTML = usernames[i];
    option.value = usernames[i];
    selectBox.appendChild(option);
    }
}