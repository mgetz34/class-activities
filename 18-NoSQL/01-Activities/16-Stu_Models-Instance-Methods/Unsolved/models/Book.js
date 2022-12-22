const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: String,
    price: { type: Number, required: true },
})

// TODO: Create a custom instance method named `getDiscount`

bookSchema.methods.getDiscount = function () {
    const discountPrice = this.price * 0.5;
    console.log(
        `The book, ${this.title}, has been discounted 50%, the price is ${discountPrice}`
    )
};

// TODO: Create a model named `Book`

const Book = mongoose.model('Book', bookSchema);

// TODO: Create a new instance of the model

const discountedBook = new Book({ title: 'Stargirl', author: 'Susan Jones', price: 10 });

// TODO: Call the custom instance method on the instance

const responseGetInstance = discountedBook.get('price', String);
console.log(
    `The value of the price for this document in string form is ${responseGetInstance}`
);

discountedBook.getDiscount();

module.exports = Book;
