const express = require('express');

const PORT = 3001;
const reviews = require('./db/reviews');

const app = express();

// TODO: Implement middleware for the parsing of JSON data
app.use(express.json());

// TODO: Implement middleware for parsing of URL encoded data
app.use(express.urlencoded({ extended: true }));

// GET request for ALL reviews
app.get('/api/reviews', (req, res) => {
  // Log our request to the terminal
  console.info(`${req.method} request received to get reviews`);

  // Sending all reviews to the client
  return res.status(200).json(reviews);
});

// GET request for a single review
//iterates through reviews obj and if the searched criteria matches an individual review
//it will be assigned to the const reviewId, then return that current review to insomnia
app.get('/api/reviews/:review_id', (req, res) => {
  if (req.params.review_id) {
    console.info(`${req.method} request received to get a single a review`);
    const reviewId = req.params.review_id;
    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];
      if (currentReview.review_id === reviewId) {
        res.status(200).json(currentReview);
        return;
      }
    }
    res.status(404).send('Review not found');
  } else {
    res.status(400).send('Review ID not provided');
  }
});

// POST request to add a review
app.post('/api/reviews', (req, res) => {
  // Log that a POST request was received to the terminal 
  console.info(`${req.method} request received to add a review`);

  // Prepare a response object to send back to the client
  let response;

  // Check if there is anything in the response body
  //if searched criteria from the user matches below
  //logs "success" 201 and new product key value pair to the "reviews (data)" obj to insomnia 
  if (req.body && req.body.product) {
    response = {
      status: 'success',
      data: req.body,
    };
    res.status(201).json(response);
  } else {
    res.status(400).json('Request body must at least contain a product name');
  }

  // Log the response body to the console
  //logs new jey value pair added to data obj in the terminal i.e. product: bicycle
  console.log(req.body);
});

// POST request to upvote a review
//iterates through the reviews obj and if the post method with the specific review id matches 
//then the upvotes increases by on for that key. Logs "New upvote count is #" to insomnia
//logs "POST request revieved to upvote a review"
app.post('/api/upvotes/:review_id', (req, res) => {
  if (req.body && req.params.review_id) {
    console.info(`${req.method} request received to upvote a review`);
    const reviewId = req.params.review_id;
    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];
      if (currentReview.review_id === reviewId) {
        currentReview.upvotes += 1;
        res.status(200).json(`New upvote count is: ${currentReview.upvotes}!`);
        return;
      }
    }
    res.status(404).json('Review ID not found');
  }
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
