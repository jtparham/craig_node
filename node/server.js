/* 
* Purpose: Start the server for Node.
* Date: 5/19/2018
* Author: Judah Parham
* Credits: W3Schools
*/
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mysql = require('mysql');
var path = require('path');
var cheerio = require('cheerio');
var http = require('http');
var request = require('request');
var fs = require('fs');
var port = process.env.PORT || 8080;     
var resultSet;

var con = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "",
    database: "people"
  });

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * from names ORDER BY usernames", function (err, result, fields) {
      if (err) throw err;
      resultSet = result;
    });
  });

app.use(express.static('node'));
app.use('/js', express.static(path.join(__dirname, '/js')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

//load from a static js file
app.get('/', function (req, res){
    res.sendfile(__dirname + '/views/index.html');
});

//make a database call, fill select box
app.get('/people', function(req, res){
    
    res.render('fillBox.ejs', {
        resultSet: resultSet
    });
});

//scrape webpage
app.get('/scrape', function(req, res){
 
        var url = 'http://localhost:8080/people';
            request(url, function (error, response, html){
                if(!error){
                var $ = cheerio.load(html);
                var names = [];
                
                console.log("html content: " + html);
                $('option').filter(function(){
                    var data = $(this);
                    console.log("contents of data: " + data);
                   for(var i = 0; i < data.length; i++){
                        names.push(data.eq(i).text())
                   }                   
                    
                });
                console.log("content of names: " + names);
                res.render('scraper.ejs', {
                    resultSet : names
                });
            }
             
        });
});


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Port: ' + port);