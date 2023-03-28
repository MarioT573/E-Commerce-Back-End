const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
router.get('/', (req, res) => {
  Category.findAll({include: [Product]})
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
});

// find one category by its `id` value
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {id: req.params.id},
    include: [Product]})
  .then((categories) => res.json(categories))
  .catch((err) => res.status(404).json(err));
});

// create a new category
router.post('/', (req, res) => {
  Category.create(req.body)
  .then((categories) => res.json(categories))
  .catch((err) => res.status(404).json(err));
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {id: req.params.id}})
  .then((categories) => res.json(categories))
  .catch((err) => res.status(404).json(err));
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {id: req.params.id}})
  .then((categories) => res.json(categories))
  .catch((err) => res.status(404).json(err));
});

module.exports = router;
