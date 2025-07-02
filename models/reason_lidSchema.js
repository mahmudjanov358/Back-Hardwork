const { Schema, model } = require('mongoose');

const reason_lidSchema = new Schema({
  reason_lid: { type: String },
});

const Reason_Lid = model('Reason_Lid', reason_lidSchema);
module.exports = { Reason_Lid };