const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then((tags) => res.json(tags))
  .catch((err) => res.status(500).json(err));
});

// find a single tag by its `id`
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {id: req.params.id},
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
    .then((tags) => res.json(tags))
    .catch((err) => res.status(400).json(err));
});

// create a new tag
router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((tags) => res.json(tags))
  .catch((err) => res.status(400).json(err));
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {id: req.params.id}})
  .then((tags) => res.json(tags))
  .catch((err) => res.status(400).json(err));
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {id: req.params.id}})
  .then((tags) => res.json(tags))
  .catch((err) => res.status(400).json(err));
});

module.exports = router;
