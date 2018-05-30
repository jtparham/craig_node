var mysql = require('mysql');

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
      module.exports(result);
      console.log(result);
    });
  });