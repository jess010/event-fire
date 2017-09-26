const Sequelize = require('sequelize')
const db = require('../db')
const PageTest = require('./pageTest')

const Result = db.define('result', {
  // pageTest ID added from association and result ID is the native ID field
  tagName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  href: {
    type: Sequelize.STRING,
    allowNull: false
  },
  innerHTML: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  outcome: {
    type: Sequelize.ENUM('Fired', 'Fizzled'),
    defaultValue: 'Fired'
  }
}, {
  defaultScope: {
    include: [
      {model: PageTest}
    ]
  }
})

// attributes()
// .then(atts => console.log(atts))

Result.createResultsForPage = function (bulkAttData, url) {
  // const asyncWebby =  webby(url, function (err, res) {
  //   if (err) console.err(err)
  //   console.log(res)
  // })
  // asyncWebby(url)
  // .then(bulkAttData => {
    PageTest.findOne({ where: { url } }).then(val => val)
    .then(pt => bulkAttData.map(attData => {
      Result.create({
        tagName: attData[0],
        href: attData[1],
        innerHTML: attData[2],
      })
      .then(result => result.setPageTest(pt))
    }))
  // }
  // )
}

module.exports = Result
