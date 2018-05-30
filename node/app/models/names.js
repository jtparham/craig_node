var mysql = require('mysql');
var resultSet = [];
var con = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "",
    database: "people"
  });
  
  con.connect(function(err) {
    if (err){ 
        throw err;
    }
    console.log("Connected");
    con.query("SELECT * from names ORDER BY usernames", function (err, result, fields) {
      if (err) throw err;

      Object.keys(result).forEach(function(key) {
        var row = result[key];
        console.log(row.usernames);
        resultSet.push(row.usernames);
      });
      });

    });
console.log("tada: ", resultSet);
exports.results = resultSet;

// window.onload = function(){
    
//   var usernames = ["Nick", "Tommy", "Marc", "Mike", "Ryan"];

// var selectBox = document.getElementById('userNames');

// for( var i = 0; i < usernames.length; i++){
//   var option = document.createElement('option');
//   option.innerHTML = usernames[i];
//   option.value = usernames[i];
//   selectBox.appendChild(option);
//   }
// }