const router = require('express').Router();
const User = require('../../models/User');

// GET one user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT update a user
router.put('/:id', async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
      individualHooks: true
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post('/seed', async (req, res) => {
  const userData = await User.bulkCreate([
    {
      username: "mike",
      email: 'mgetz340@gmail.com',
      password: 'supersecret'
    },
    {
      username: "jamie",
      email: 'jamie4@gmail.com',
      password: 'supersecure',
    },
    {
      username: "meme",
      email: 'mememe@gmail.com',
      password: 'notsecret',
    },
  ]);
  res.status(200).json(userData);
});

module.exports = router;
