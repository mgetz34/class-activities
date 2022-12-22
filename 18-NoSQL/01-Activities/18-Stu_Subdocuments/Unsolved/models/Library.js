const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema` for the subdocument

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: Number
})

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  //
  // TODO: Add the `books` subdocument to the parent document as an array
  books: [bookSchema],
  //
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`

const Library = mongoose.model('Library', librarySchema);

// TODO: Create a new instance of the model including the subdocuments

const books = mongoose.model('books', bookSchema);

const bookData = [
  { title: 'monkey wrench gang', price: 10 },
  { title: 'stargirl', price: 12 },
  { title: 'crime and punishment', price: 15 },
];

Library.create(
  { name: 'GJ', books: bookData },
  (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  }
);

module.exports = Library;
