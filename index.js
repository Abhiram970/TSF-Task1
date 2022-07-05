var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database : "pay",
  password: "Abhiram707",
  port : 3307
});

con.connect(function(err) {
  con.query("SELECT * from payments", function (err, result, fields) {
    console.log(result);
  });
});