const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('event', {
  // xNode ID is added from association and event ID is the native ID field
  type: {
    type: Sequelize.ENUM('click', 'mouseover', 'sendKeys'),
    allowNull: false
  },
  listener: {
    type: Sequelize.STRING,  // The nature of listener that is registered to the event on that node. May not be needed to store this detail on backend.
    allowNull: false
  }
})

module.exports = Event
