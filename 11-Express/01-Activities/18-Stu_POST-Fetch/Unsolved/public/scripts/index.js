const userNameInput = document.getElementById('username');
const productInput = document.getElementById('product');
const reviewInput = document.getElementById('review');
const reviewForm = document.getElementById('review-form');

// TODO: Add a comment explaining the functionality of this helper function
//makes a fetch call to the api and returns the review to the user 
const postReview = (review) =>
  // TODO: Add a comment explaining what sort of data we need to provide when invoking the fetch function for a POST request
  fetch('/api/reviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // TODO: Add a comment describing why one would need to convert the JSON object to a string in this instance
    //bc the review submitted "newReview" needs to be jsonified to be stored to the server, submitted as a vanilla js obj
    body: JSON.stringify(review),
  })
    //control turned back over to the front-end
    .then((res) => res.json())
    .then((data) => {
      console.log('Successful POST request:', data);
      return data;
    })
    // TODO: Add a comment describing the functionality of the catch statement
    //will log an error in the console if the post request fails 
    .catch((error) => {
      console.error('Error in POST request:', error);
    });

// Listen for when the form is submitted
reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Create a new review object from the input values
  const newReview = {
    username: userNameInput.value.trim(),
    product: productInput.value.trim(),
    review: reviewInput.value.trim(),
  };

  // Call our `postReview` method to make a POST request with our `newReview` object.
  postReview(newReview)
    .then((data) => alert(`Review added! Review ID: ${data.body.review_id}`))
    .catch((err) => console.error(err));
});
