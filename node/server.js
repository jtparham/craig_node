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
// var Person = require('./app/models/people');
// var Name = require('./app/models/names');
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
      
      console.log("yeet: ", result);
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

app.get('/', function (req, res){
    res.sendfile(__dirname + '/views/index.html');
});

app.get('/people', function(req, res){
    
    res.render('fillBox.ejs', {
        resultSet: resultSet
    });
});

router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening at: ', req);
  next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'Yeet' });   
});

router.route('/people')

    // create a person (accessed at POST http://localhost:8080/api/people)
    .post(function(req, res) {

        var person = new Person();      // create a new instance of the Person model
        person.name = req.body.name;  // set the person's name (comes from the request)

        // save the person and check for errors
        person.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Person created!' });
        });

    })
        // get all the names (accessed at GET http://localhost:8080/api/people)
        .get(function(req, res) {
            res.render('js/fillBox')
        });


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Port: ' + port);