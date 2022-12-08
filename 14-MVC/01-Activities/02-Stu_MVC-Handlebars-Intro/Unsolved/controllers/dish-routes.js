// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
//controller, handling routes 
const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
//http:localhost:3001/
router.get('/', async (req, res) => {
  //TODO: Add a comment describing the purpose of the render method
  //terminal response method
  //passing handlebars template into res.render, 'all.handlebars', from views dir, then passed into main.handlebars {{{ body }}}
  res.render('all');
});

module.exports = router;
