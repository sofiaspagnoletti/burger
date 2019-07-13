var mysql = require("mysql");
var connection;

console.log("DATABASE INIT");

if(process.env.JAWSDB_URL){
  console.log("DATABASE INIT - JAWS");
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  console.log("DATABASE INIT - NO JAWS");
  console.log("DATABASE INIT - " + process.env);
  console.log("DATABASE INIT - CREATING CONNECTION");
  connection = mysql.createConnection({
    host: "localhost",
  user: "root",
  password: "123123123",
  database: "burgers_db"
  });
  console.log("DATABASE INIT - CONNECTION FINISHED");
}

console.log("DATABASE INIT - TRY TO CONNECT");
connection.connect();
console.log("DATABASE INIT - CONNECT FINISHED");

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
