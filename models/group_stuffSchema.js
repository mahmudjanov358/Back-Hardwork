const { Schema, model } = require('mongoose');
const { Group } = require('./groupSchema');
const { Stuff } = require('./stuffSchema');

const group_stuffSchema = new Schema({
  group_id: { type: Schema.Types.ObjectId, ref: Group, required: true },
  stuff_id: { type: Schema.Types.ObjectId, ref: Stuff, required: true },
});

const Group_Stuff = model('Group_Stuff', group_stuffSchema);
module.exports = { Group_Stuff };