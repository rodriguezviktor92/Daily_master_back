const router = require('express').Router();
const { cache, verifyCache } = require('./cache');
const projectsSchema = require('../models/projects');

router.post('/', verifyCache, async (req, res) => {
  const project = projectsSchema(req.body);

  project
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get('/', verifyCache, async (req, res) => {
  projectsSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get('/:id', verifyCache, async (req, res) => {
  const { id } = req.params;

  projectsSchema
    .find({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.delete('/:id', verifyCache, async (req, res) => {
  const { id } = req.params;
  projectsSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
