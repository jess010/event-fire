const Sequelize = require('sequelize')
const db = require('../db')

const XNode = db.define('xNode', {
  // pageTest ID is added from association and xNode ID is the native ID field
  description: {
    type: Sequelize.STRING, //Might end up changing this to an array?
    //This is not how we manage the click, etc instructions. Firing off events are managed from details generatesd from the front-end state. DB models are all about how we communicate with the user about it, front end state will be how we actually execute.
    allowNull: false
  }
})

module.exports = XNode
