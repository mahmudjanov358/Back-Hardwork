const { Schema, model } = require('mongoose');
const { Stuff } = require('./stuffSchema');
const { Role } = require('./roleSchema');

const stuff_roleSchema = new Schema({
  stuff_id: { type: Schema.Types.ObjectId, ref: Stuff, required: true },
  role_id: { type: Schema.Types.ObjectId, ref: Role, required: true },
});

const Stuff_Role = model('Stuff_Role', stuff_roleSchema);
module.exports = { Stuff_Role };