//  NEW
$("#orders").on("click", function() {
    event.preventDefault();

    db_orders;
    
});





var db_orders = function() {
    var keys = require("./keys.js")
    var mysql = require("mysql");
    require("dotenv").config();

    var connection = mysql.createConnection({
      host: "localhost",
    
      // Your port; if not 3306
      port: 3306,
    
      // Your username
      user: keys.db_keys.id,
    
      // Your password
      password: keys.db_keys.secret,
      database: "ice_creamDB"
    });
    
    connection.connect(function(err) {
      if (err) throw err;
      console.log("connected as id " + connection.threadId);
      readOrders();
    });
    
    function readOrders() {
      console.log("Selecting all orders...\n");
      connection.query("SELECT * FROM orders", function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        // console.log(res[0].id)
        connection.end();
      });
    }

}

