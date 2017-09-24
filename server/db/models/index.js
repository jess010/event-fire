// const XNode = require('./xNode')  // XNode to distinguish from 'node.js' and because 'X' marks the spot.
const PageTest = require('./pageTest')
const Result = require('./result')
// const Event = require('./event')


// Associations

Result.belongsTo(PageTest, {foreignKey: 'pageTest_id'})
PageTest.hasMany(Result, {foreignKey: 'pageTest_id'})


// //One to one relationship between event and event result
// Event.belongsTo(Result, {foreignKey: 'event_id'})
// Result.hasOne(Event, {foreignKey: 'event_id'})

// //One to Many relationship between node and events
// XNode.belongsTo(Event, {foreignKey: 'node_id'})
// Event.hasOne(XNode, {foreignKey: 'node_id'})

module.exports = {
  PageTest, Result,
  // Event, XNode
}
