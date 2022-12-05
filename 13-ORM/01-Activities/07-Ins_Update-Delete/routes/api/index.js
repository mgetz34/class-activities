const router = require('express').Router();
const books = require('./bookRoutes');


//http://localhost:3001/api/books
router.use('/books', books);

module.exports = router;