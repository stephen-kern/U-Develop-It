const mysql = require("mysql2");

// connect app to SQL database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "election",
  },
  console.log("Connected to the election database.")
);





module.exports = db;