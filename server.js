// include packages
const express = require("express");
const mysql = require("mysql2");

// PORT designation and initialize
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// function to start the express server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
