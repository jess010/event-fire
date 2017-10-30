const Sequelize = require('sequelize')
const db = require('../db')
// const jsdom = require("jsdom")
// const { JSDOM } = jsdom

const PageTest = db.define('pageTest', {
  url: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isURL: true
    }
  }
})

module.exports = PageTest

