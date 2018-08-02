var express = require('express'); 
var app = express();  
var router = express.Router(); 
var port = process.env.PORT || 3000;     
var path = require('path');
var mysql = require('mysql');


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

//PART I: load from a static js file
app.get('/', function (req, res){
    res.sendfile(__dirname + '/html/index.html');
});

//PART II: connect to any database of your choosing, and be able to grab all animals in the database or an individual animal given an id
app.get('/\\d+', function(req, res, next){
    var id = req.path.substring(1, path.length);
    //handle numbers greater than 10 and less than 1
    if(id > 10 || id < 1)
    {
        res.redirect('/')
    }
    
    else{
        con.query("SELECT * FROM zoo WHERE id = ('"+ id +"')",
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
    }
});

//PART III: Connect assignment 1 and assignment 2 - and allow the user to pull the information from the database via the browser
app.get('/part_three', function(req, res, next){
    res.sendfile(__dirname + '/html/part_three.html');
});

app.get('/db_pull', function (req, res, next){
    con.query("SELECT * FROM zoo",
    function(err, result, fields){
      if(err) 
        console.log("Error: ", err);
      else{
        res.send(JSON.stringify(result));
      }
    });
});

app.get('/*', function(req, res) {
    res.redirect('/')
});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log("server started on: ", port);