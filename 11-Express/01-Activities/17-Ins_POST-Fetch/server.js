const express = require('express'); //shipped
const path = require('path'); //shipped 
// Helper method for generating unique ids
const uuid = require('./helpers/uuid'); //custom
const reviews = require('./db/reviews'); //custom 

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use is ALWAYS middleware 
app.use(express.static('public'));


// http://localhost:3001/
app.get('/', (req, res) =>

//sendfile back to the client if they make a get request to Home,
//__dirname ???? //Node Global - current directory
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET request for reviews
app.get('/api/reviews', (req, res) => {
  res.status(200).json(reviews);
});

// POST request to add a review
// NOTE: Data persistence isn't set up yet, so this will only exist in memory until we implement it
app.post('/api/reviews', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

  // Destructuring assignment for the items in req.body
  //object destruction, pulling the keys off of the object, and making new variables 
  const { product, review, username } = req.body;

  // If all the required properties are present
  if (product && review && username) {
    // Variable for the object we will save
    const newReview = {
      product,
      review,
      username,
      review_id: uuid(),
    };

    const response = {
      status: 'success',
      body: newReview,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json('Error in posting review');
  }
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
