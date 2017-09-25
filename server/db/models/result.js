const Sequelize = require('sequelize')
const db = require('../db')
const PageTest = require('./pageTest')
const attributes = require('../../utils/webdriver')

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
    allowNull: false,
    defaultValue: 'Fizzled'
  }
}, {
  defaultScope: {
    include: [
      {model: PageTest}
    ]
  }
})

attributes()
.then(atts => console.log(atts))

// Result.createResult = function () {

// }

module.exports = Result
