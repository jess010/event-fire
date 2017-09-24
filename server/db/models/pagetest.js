const Sequelize = require('sequelize')
const db = require('../db')
const jsdom = require("jsdom")
const { JSDOM } = jsdom

const PageTest = db.define('pageTest', {
  url: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isURL: true
    }
  }
})

// WIP instance method for triggering subsequent actions needed to:
// - Populate events / xnodes models
// - Create DOM object (if applicable, probably not).
//    I think if we just have a reference for the parent and children (array) IDs for each node in the db, we should be ok.
// - Yeah, that should do it I think.
//
// PageTest.prototype.createDOM = function () {
//   const dom = new JSDOM(``, {
//     url: this.url
//   })
// }

module.exports = PageTest

// ,
  // doc: {
  //   type: Sequelize.TEXT,
  //   allowNull: false,
  //   set
  // }
