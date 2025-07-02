const { Schema, model } = require('mongoose');

const lid_statusSchema = new Schema({
  status: { type: String },
});

const Lid_Status = model('Lid_Status', lid_statusSchema);
module.exports = { Lid_Status };