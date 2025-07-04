const { Schema, model } = require('mongoose');
const { Lid } = require('./lidSchema');

const studentsSchema = new Schema({
  lid_id: { type: Schema.Types.ObjectId, ref: Lid, required: true },
  first_name: { type: String, trim: true },
  last_name: { type: String, trim: true },
  phone_number: { type: String, },
  bithday: { type: Date, },
  gender: { type: String, enum: ['male', 'famale', 'other'] },
});

const Students = model('Students', studentsSchema);
module.exports = { Students };