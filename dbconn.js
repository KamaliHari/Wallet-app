var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "23.11.2002root",
  database:"Walletapp"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT id,firstname FROM Customer_info", function (err, result, fields) {
      if (err) 
      {
        throw err;
      }
      else{
        
      }
      console.log(result);
    });
  });
