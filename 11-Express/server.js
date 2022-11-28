const express = require('express');

const PORT = 8080;

//represents your express applcation, returns a server object!!!
const app = express();

//Route Handler

//CRUD OPERATIONS -- CREATE,READ,UPDATE,DELETE

//GET Request

//http:/localhost:8080/api     = "/api"

//request object
//response object


//CRUD OPS -- 
//GET - READ
//POST - CREATE
//PUT - UPDATE
//DELETE = DELETE 

app.get("/", (req, res) => {
    //terminal res method
    res.send("Gobble, Gobble!!!!");
});

app.get("/api", (req, res) => {
    res.send("Welcome to our custom API!");
});

//responsible for submitting data to the database
app.post("", (req, res) => {
res.post("");
});

//responsible for deleting data from the database
app.delete("", (req, res) => {
res.delete("");
});



app.listen(PORT);
