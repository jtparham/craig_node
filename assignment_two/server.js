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
    host: "localhost",
    user: "root", 
    password: "",
    port: 3306,
    database: "people"
  });

  con.connect(function(err) {
    if (err) throw err;
    
    else console.log("Connected!");
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

//PART II: connect to any database of your choosing, and be able to grab all animals in the database or an individual animal given an id
app.get('/\\d?', function(req, res, next){
    
    con.query("SELECT * FROM zoo WHERE id = ('"+ req.path[1] +"')",
    function(err, result, fields){
      if(err) 
        console.log("Error: ", err);
      else{
      res.writeHead(200, {"Content-Type" : "text/plain"});
      res.write("[\n{\n \"id\": \""+ [result[0].id] + "\",\n"
                +" \"name\": \""+[result[0].name] + "\",\n"
                +" \"description\": \"" + [result[0].description]+"\" \n}\n]"
                );
      res.end();
      }
    });
});

app.get('/db_pull', function(req, res, next){
  
});


// START THE SERVER
// =============================================================================
app.listen(port);
console.log("server started on: ", port);