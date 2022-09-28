const router = require('express').Router();
const { cache, verifyCache } = require('./cache');
const userSchema = require('../models/users');

router.post('/', verifyCache, async (req, res) => {
  const user = userSchema(req.body);

  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get('/:project', verifyCache, async (req, res) => {
  const { project } = req.params;

  userSchema
    .find({ project })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
