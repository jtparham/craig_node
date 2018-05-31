/* 
* Purpose: Start the server for Node.
* Date: 5/19/2018
* Author: Judah Parham
* Credits: W3Schools, Scotch.io, StackOverflow
*/
var express    = require('express');    
var app        = express();                 
var bodyParser = require('body-parser');
var mysql = require('mysql');
var path = require('path');
var cheerio = require('cheerio');
var request = require('request');
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


// =============================================================================
var router = express.Router();  


// i
app.use('/api', router);

//PART I: load from a static js file
app.get('/', function (req, res){
    res.sendfile(__dirname + '/views/index.html');
});

//PART II: make a database call, fill select box
app.get('/people', function(req, res){
    
    res.render('fillBox.ejs', {
        resultSet: resultSet
    });
});

//PART III: scrape webpage
app.get('/scrape', function(req, res){
 
        var url = 'http://localhost:8080/people';
            request(url, function (error, response, html){
                if(!error){
                var $ = cheerio.load(html);
                var names = [];
                
                console.log("html content: " + html);
                $('option').filter(function(){
                    var data = $(this);
                    
                   for(var i = 0; i < data.length; i++){
                        names.push(data.eq(i).text())
                   }                   
                    
                });

                res.render('scraper.ejs', {
                    resultSet : names
                });
            }
             
        });
});

//PART IV: Create a web app that allows you to change the 5 names in the database dynamically via a rest call
app.get('/addName', function(req, res, next){
    res.sendfile(__dirname + "/views/addName.html");
});

app.post('/rest', function(req, res){
    con.query("INSERT INTO `names` (`usernames`) VALUES ('"+req.body.data+"')",
    function(err, result){
        if(err)
            throw err;
    });

    res.sendfile(__dirname + "/views/index.html");
});


// START THE SERVER
// =============================================================================
app.listen(port);