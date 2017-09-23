const Sequelize = require('sequelize')
const db = require('../db')

const XNode = db.define('xNode', {
  // pageTest ID is added from association and xNode ID is the native ID field
  description: {
    type: Sequelize.STRING, //Might end up changing this to an array?
      //This is not how we manage the click, etc instructions. Firing off events are managed from details generated from the front-end state. DB models are all about how we communicate with the user about it, front end state will be how we actually execute.
    allowNull: false
  },
  parent: {  // References another preceding unique XNode entry
    type: Sequelize.INTEGER,  // How to treat root node?
    allowNull: false
  },
  children: {  // References an array of subsequent XNode entries
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: true
  },
  hasEvent: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

module.exports = XNode
