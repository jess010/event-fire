const router = require('express').Router()
const {PageTest, Result} = require('../db/models/')
module.exports = router

// GET /api/pageTest/
router.get('/', (req, res, next) => {
  PageTest.findAll()
  .then(pagetests => {
    res.json(pagetests)
  })
  .catch(next);
})

// GET /api/pageTest/:id
router.get('/:id', (req, res, next) => {
  PageTest.findById(req.params.id)
  .then(pageTest => {
    res.json(pageTest)
  })
  .catch(next);
})

// POST /api/pageTest/
router.post('/', (req, res, next) => {
  PageTest.create(req.body)
  .then(pageTest => {
    res.json(pageTest)
  })
})

