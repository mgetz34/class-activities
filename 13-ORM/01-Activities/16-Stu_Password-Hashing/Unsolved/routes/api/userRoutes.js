const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// TODO: Add comments describing the functionality of this `login` route
//http://localhost:3001/api/users/login
router.post('/login', async (req, res) => {
  try {
    //userData stores search for a specific email in db 
    const userData = await User.findOne({ where: { email: req.body.email } });
    //if email doesent match, return 400 error
    if (!userData) {
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }
    //validPassword const stores a variable with a boolean value, compares weather provided password from user matches hashed password in db
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    //returns 400 error if passwords do not match
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    //returns message of you are now logged in as long as the passwords and emails match db 
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
