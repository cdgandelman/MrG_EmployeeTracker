const mysql= require("mysql2");
require("dotenv").config();

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: process.env.password,
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );
db.connect(function(err){if (err) {
    console.log("error")
}})
  module.exports= db;