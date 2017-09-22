const Sequelize = require('sequelize')
const db = require('../db')

const Result = db.define('result', {
  // event and pageTest ID's are added from association and result ID is the native ID field
  outcome: {
    type: Sequelize.ENUM('fired', 'fizzled'),
    allowNull: false
  },
  eventMsg: {   // Error message (if any)
    type: Sequelize.TEXT
  }
})

module.exports = Result
