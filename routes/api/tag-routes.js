const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findAll({include: [{model: Product}]});
    console.log(tag)
    res.json(tag)
  }catch(err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id)
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err))
  // find a single Tag by its `id`
});
});

router.post('/', (req, res) => {
  Tag.findByPk(req.params.id)
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err))


});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {where: {id: req.params.id}})
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.delete({where: {id: req.params.id}})
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err))
});

module.exports = router;
