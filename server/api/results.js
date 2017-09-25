const router = require('express').Router()
const {PageTest, Result} = require('../db/models/')
module.exports = router

// GET /api/result/
router.get('/', (req, res, next) => {
  Result.findAll()
  .then(results => {
    res.json(results)
  })
  .catch(next);
})

// GET /api/result/:id
router.get('/:id', (req, res, next) => {
  Result.findById(req.params.id)
  .then(result => {
    res.json(result)
  })
  .catch(next);
})

// GET /api/result/:pageTestId -> to be used for results page.
router.get('/:pageTestId', (req, res, next) => {
  Result.findAll({
    where: {
      pageTestId: req.params.pageId
    }
  })
  .then(result => {
    res.json(result)
  })
  .catch(next);
})

// POST /api/pageTest/
router.post('/', (req, res, next) => {
  // Need to add something to populate the PageTest association!!!!
  // And also to take into account that we are likely going to want to create multiple at one time.
  // Might should use 'bulkCreate' method.
  Result.create(req.body)
  res.sendStatus(201);
})
