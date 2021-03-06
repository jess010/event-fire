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
}
// , {
//   defaultScope: {
//     include: [{
//       model: PageTest,
//       as: 'PageTest'
//     }]
//   }
// }
)

// attributes()
// .then(atts => console.log(atts))

Result.createResultsForPage = function (bulkAttData, url) {
    return PageTest.findAll({ limit: 1, where: { url }, order: [['createdAt', 'DESC']] })
    .then(pt => Promise.all(bulkAttData.map(attData => {
      return Result.create({
        tagName: attData[0],
        href: attData[1],
        innerHTML: attData[2],
      })
      .then(result => result.setPageTest(pt[0]))
    })))
    .then(_ => console.log("create results complete"))
    .catch(err => console.error(err))
}

module.exports = Result
