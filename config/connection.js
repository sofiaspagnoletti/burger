var mysql = require("mysql");
var connection;


if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  console.log("DATABASE INIT");
  console.log(JSON.stringify(process.env));
  connection = mysql.createConnection({
    host: "qzkp8ry756433yd4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "pgs8o25el39wzfa6",
  password: "wzm8ghiqwyxg5ilw",
  database: "ozu8dsl1g5unxcjk"
  });
}

connection.connect();

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "123123123",
//   database: "burgers_db"
// });

// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// Export connection for our ORM to use.
module.exports = connection;
