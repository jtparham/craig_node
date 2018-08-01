/* 
* Purpose: Start the server for Node.
* Date: 7/20/2018
* Author: Judah Parham
* Credits: W3Schools, StackOverflow
*/
var express = require('express'); 
var app = express();  
var router = express.Router(); 
var port = process.env.PORT || 3000;     
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');


var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root", 
    password: "",
    port: 3306,
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });

app.use('/api', router);

app.use(express.static('node'));
app.use('/js', express.static(path.join(__dirname, '/js')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');


//PART I: load from a static js file
app.get('/', function (req, res){
    res.sendfile(__dirname + '/html/index.html');
});

//PART II: Create a web app that allows you to change the 5 names in the database dynamically via a rest call
app.get('/\\d?', function(req, res, next){
    console.log(req.path[1]);
    res.sendfile(__dirname + "/html/practice.html");
});


// START THE SERVER
// =============================================================================
app.listen(port);
console.log("server started");