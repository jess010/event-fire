const router = require('express').Router()
const {PageTest, Result} = require('../db/models/')
console.log("PageTest on api pageTests", PageTest)
module.exports = router

// GET /api/pageTest/
router.get('/', (req, res, next) => {
  console.log("One line after GET")
  PageTest.findAll()
  console.log("Made it to the first line of 'findAll'")
  .then(pagetests => {
    res.json(pagetests)
  })
  .catch(next);
})

// POST /api/pageTest/
router.post('/', (req, res, next) => {
  PageTest.create(req.body);
  res.sendStatus(201);
})

