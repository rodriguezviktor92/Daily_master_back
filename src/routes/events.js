const router = require('express').Router();
const { cache, verifyCache } = require('./cache');
const eventsSchema = require('../models/events');

router.post('/', verifyCache, async (req, res) => {
  const events = eventsSchema(req.body);

  events
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Eliminar
router.get('/', verifyCache, async (req, res) => {
  eventsSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get('/:project', verifyCache, async (req, res) => {
  const { project } = req.params;

  eventsSchema
    .find({ project })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.delete('/:id', verifyCache, async (req, res) => {
  const { id } = req.params;

  eventsSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.put('/:id', verifyCache, async (req, res) => {
  const { id } = req.params;
  const events = req.body;

  eventsSchema
    .updateOne({ _id: id }, {
      $set: {
        events,
      },
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
