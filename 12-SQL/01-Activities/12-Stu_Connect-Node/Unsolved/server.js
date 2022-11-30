const express = require('express');
//allows us to access sql using node by bringing in the sql2 module
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//creating the connection b/t the server.js file and the mysql database using specific routing and login criteria 
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'classlist_db'
  },
  //success message for connecting to the mysql database 
  console.log(`Connected to the classlist_db database.`)
);

db.query('SELECT * FROM students', function (err, results) {
  //logs the ENTIRE content of the "students" table in this example to the console 
  console.log(results);
});

//404 error will throw if anything else besides the above listed query takes place
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
