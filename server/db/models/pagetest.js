const Sequelize = require('sequelize')
const db = require('../db')

const PageTest = db.define('pageTest', {
  url: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isURL: true
    }
  },
  doc: {
    type: Sequelize.TEXT,
    allowNull: false,
  }
})

module.exports = PageTest

