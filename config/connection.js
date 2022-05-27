// Connect to the database
const mysql = require('mysql2');

require('dotenv').config();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'employee_tracker'
});

module.exports = db;


// Connect to the database
// const mysql = require('mysql2');

// require('dotenv').config();

// const db = mysql.createConnection(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: 'localhost',
//   dialect: 'mysql',
//   port: 3306
// });

// module.exports = db;