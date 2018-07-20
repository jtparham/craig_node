/* 
* Purpose: Start the server for Node.
* Date: 7/20/2018
* Author: Judah Parham
* Credits: W3Schools, StackOverflow
*/
var express = require('express'); 
var app = express();   
var port = process.env.PORT || 3000;     
var router = express.Router();
var path = require('path');
var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "name", 
//     password: "pass",
//   });

//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE mydb", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });
// 
app.use('/api', router);

app.use(express.static('node'));
app.use('/js', express.static(path.join(__dirname, '/js')));
app.set('view engine', 'ejs');


//PART I: load from animals from static js file
app.get('/', function (req, res){
    res.sendfile(__dirname + '/html/index.html');
});



// START THE SERVER
// =============================================================================
app.listen(port);
console.log("server started");