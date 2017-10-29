const router = require('express').Router()
const {PageTest, Result} = require('../db/models/')
const webby = require('../utils/webdriver-hailmary')

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

// GET /api/results/test/:pageTestId -> to be used for results page.
router.get('/test/:pageTestId', (req, res, next) => {
  Result.findAll({
    where: {
      pageTest_id: req.params.pageTestId
    }
  })
  .then(results => {
    res.json(results)
  })
  .catch(next);
})

// POST /api/results/
router.post('/', (req, res, next) => {
  // And also to take into account that we are likely going to want to create multiple at one time.
  // Might should use 'bulkCreate' method.
  const url = req.body.url
  webby(url)
  .then(data => Result.createResultsForPage(data, url))
  .then(_ => console.log("I am complete"))
  .then(_ => res.sendStatus(201))
  .catch(next)
})











