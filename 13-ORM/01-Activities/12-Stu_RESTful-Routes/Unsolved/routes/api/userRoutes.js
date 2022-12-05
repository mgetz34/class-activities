const router = require('express').Router();
const User = require('../../models/User');

// TODO: Use try/catch to catch errors
// TODO: Return the appropriate HTTP status codes

// GET a user
router.get('/:id', async (req, res) => {
  const userData = await User.findByPk(req.params.id).catch((err) =>
    res.json(err)
  );
  res.json(userData);
});

// UPDATE a user
router.put('/:id', async (req, res) => {
  const userData = await User.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.json(err));
  res.json(userData);
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  const userData = await User.destroy({
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.json(err));
  res.json(userData);
});


//route to seed users table in db

router.post('/seed'), async (req, res) => {
  const userData = await User.bulkCreate([
    {
      username: "mike",
      email: "mgetz340@fmail.com",
      password: 1234
    },
    {
      username: "steve",
      email: "steve@fmail.com",
      password: 11111
    },
    {
      username: "jeff",
      email: "jeff@gmail.com",
      password: 22222
    }
  ])
    .then((userData) => {
      res.send(userData);
    })
    .catch((err) => {
      res.json(err);
    });
}

module.exports = router;
