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

// // GET /api/result/:id
// router.get('/:id', (req, res, next) => {
//   Result.findById(req.params.id)
//   .then(result => {
//     res.json(result)
//   })
//   .catch(next);
// })

// GET /api/result/:pageTestId -> to be used for results page.
router.get('/:id', (req, res, next) => {
  Result.findOne({
    // include: [{
    //   model: PageTest,
    //   as: 'PageTest',
    // where: { pageTest_id: req.params.id }
      where: { id: 1 }
    // }]
  })
  .then(results => console.log("Final results", results))

  // console.log('api/results/:ptid', req.params.id)
  // PageTest.findOne({ where: {id: req.params.id} })
  // .then(pageTest => {
  //   console.log("Page test inside route", pageTest.dataValues)
  //   return Result.findAll({
  //     where: { pageTest: pageTest.dataValues }
  //   })
  // })
  // .then(results => {
  //   console.log("Results", results)
  //   //res.json(results)
  // })
  // .catch(next);
})

// POST /api/result/
router.post('/', (req, res, next) => {
  // Need to add something to populate the PageTest association!!!!
  // And also to take into account that we are likely going to want to create multiple at one time.
  // Might should use 'bulkCreate' method.
  const url = req.body.url
  webby(url)
  .then(data => Result.createResultsForPage(data, url))
  .then(_ => res.sendStatus(201))
  .catch(next)
})











