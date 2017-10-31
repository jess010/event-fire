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

// GET /api/result/:id -> id for a specific URL/event result entry (not full page test)
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
  .then(results => res.json(results))
  .catch(next);
})

// POST /api/results/
router.post('/', (req, res, next) => {
  const url = req.body.url
  return webby(url)
  .then(data => Result.createResultsForPage(data, url))
  .then(_ => console.log("Result post request complete"))
  .then(_ => res.sendStatus(201))
  .catch(next)
})
