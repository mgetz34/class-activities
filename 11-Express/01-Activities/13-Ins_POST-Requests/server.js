const express = require('express');

const PORT = 3001;

//creates server object
const app = express();

// GET request
//http:localhost:3001/api/reviews
app.get('/api/reviews', (req, res) => {
  // Let the client know that their request was received

  // console.log(req);

  //GET request recieved 
  res.json(`${req.method} request received`);

  // Show the user agent information in the terminal
  //TERMINAL
  console.info(req.rawHeaders);

  // Log our request to the terminal
  console.info(`${req.method} request received`);
});

// POST request
app.post('/api/reviews', (req, res) => {
  // Let the client know that their POST request was received
  res.json(`${req.method} request received`);

  // Show the user agent information in the terminal
  console.info(req.rawHeaders);

  // Log our request to the terminal
  console.info(`${req.method} request received`);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
