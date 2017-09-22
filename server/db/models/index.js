const XNode = require('./xNode')  // XNode to distinguish from 'node.js' and because 'X' marks the spot.
const PageTest = require('./pageTest')
const Result = require('./result')

// Associations

Result.belongsTo(PageTest, {foreignKey: 'pageTest_id'})
PageTest.hasMany(Result, {foreignKey: 'pageTest_id'})

XNode.belongsTo(PageTest, {foreignKey: 'pageTest_id'})
PageTest.hasMany(XNode, {foreignKey: 'pageTest_id'})

Result.belongsTo(XNode, {foreignKey: 'xNode_id'})
XNode.hasMany(Result, {foreignKey: 'xNode_id'})

//One to one relationship between event and event result
Event.belongsTo(Result, {foreignKey: 'event_id'})
Result.hasOne(Event, {foreignKey: 'event_id'})

//One to Many relationship between node and events
XNode.belongsTo(Event, {foreignKey: 'node_id'})
Event.hasOne(XNode, {foreignKey: 'node_id'})
