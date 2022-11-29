const express = require('express'); //REMOTE
//ANYTHING LISTED IN THE PACKAGE.JSON IS A REMOTE MODULE
const path = require('path'); //SHIPPED
//HTTP,HTTPS,FS
const fs = require('fs'); //SHIPPED W/ NODE 
// Helper method for generating unique ids
const uuid = require('./helpers/uuid'); //CUSTOM 

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

//http://localhost:3001/
//sends user to index.html as home page using dirname as a relative path 
app.get('/', (req, res) =>
  //sendFile is a Terminal response method 

  //__DIRNAME GLOBAL IN NODE - returns the current directory
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET request for reviews
app.get('/api/reviews', (req, res) => {
  // Send a message to the client
  res.json(`${req.method} request received to get reviews`);

  // Log our request to the terminal
  console.info(`${req.method} request received to get reviews`);
});

// POST request to add a review
app.post('/api/reviews', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

  // Destructuring assignment for the items in req.body
  const { product, review, username } = req.body;

  // If all the required properties are present
  if (product && review && username) {
    // Variable for the object we will save
    const newReview = {
      product,
      review,
      username,
      upvotes: Math.floor(Math.random() * 100),
      review_id: uuid(),
    };

    // Convert the data to a string so we can save it
    const reviewString = JSON.stringify(newReview);

    // Write the string to a file
    //first arg is file we are writing to 
    //second arg is where were getting the data from
    //third arg is always a cb function
    //writeFile needs to be passed a string 
    fs.writeFile(`./db/${newReview.product}.json`, reviewString, (err) =>
      err
      //ternary operator
        ? console.error(err)
        : console.log(
          `Review for ${newReview.product} has been written to JSON file`
        )
    );

    const response = {
      status: 'success',
      body: newReview,
    };

    console.log(response);
    //res.status is not a terminal response method 
    res.status(201).json(response);
  } else {
    res.status(500).json('Error in posting review');
  }
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
