const express = require('express'); //REMOTE!!!

//npm = remote
//relative path as an argument to require = custom
//alt is shipped - like fs and http

//INQURER AND JEST: REMOTE NODE MODULES!!!!!

// const fs = require('fs') SHIPPED MODULE!!!!
//can tell by looking at the depndncies from the package.json modules

const PORT = 3001;
//array of our product ibjects
const reviews = require('./db/reviews'); //CUSTOM!!!!

const app = express(); //by calling this function express returns an object

//what is .use a method on???

// Middleware for parsing application/json and urlencoded data
//MIDDLEWARE EXPRESS!!!!!
app.use(express.json()); //allowing us to parse json from the front end and give us access to data off or req.body
app.use(express.urlencoded({ extended: true })); //name: "ben" //access this as JSON!!!!


//route handlers
// GET request for ALL reviews
app.get('/api/reviews', (req, res) => {
  // Log our request to the terminal
  console.info(`${req.method} request received to get reviews`);

  // Sending all reviews to the client
  //RETURNED IN INSOMNIA AS AN ARRAY OF JSON OBJECTS, BC HTTP IS NOT A CODING LANGUAGE
  return res.json(reviews);
});

// POST request to add a review
app.post('/api/reviews', (req, res) => {
  console.log(req.body);
  //MIDDLEWARE FUNCTION ALLOWS US TO ACCESS THE DATA FROM THE FRONT END "IONSOMNIA" OFF OF REQ.BODY
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

  // Prepare a response object to send back to the client
  let response;

  // Check if there is anything in the response body
  if (req.body && req.body.product) {
    response = {
      status: 'success',
      data: req.body,
    };
    res.json(`Review for ${response.data.product} has been added! and the price is ${response.data.price}`);
  } else {
    res.json('Request body must at least contain a product name');
  }

  // Log the response body to the console
  console.log(req.body);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
