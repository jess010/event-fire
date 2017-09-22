const Sequelize = require('sequelize')
const db = require('../db')

const PageTest = db.define('pageTest', {
  pageURL: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isURL: true
    }
  },
})

module.exports = PageTest
