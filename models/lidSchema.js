const { Schema, model } = require('mongoose');
const { Stage } = require('./stageSchema');
const { Group } = require('./groupSchema');
const { Lid_Status } = require('./lid_statusSchema');
const { Reason_Lid } = require('./reason_lidSchema');

const lidSchema = new Schema({
  first_name: { type: String, required: true, trim: true },
  last_name: { type: String, required: true, trim: true },
  phone_number: { type: String, required: true },
  lid_stage_id: { type: Schema.Types.ObjectId, ref: Stage },
  test_date: { type: String, required: true },
  trial_lesson_date: { type: String, required: true },
  trial_lesson_time: { type: String, required: true },
  trial_lesson_group_id: { type: Schema.Types.ObjectId, ref: Group },
  lid_status_id: { type: Schema.Types.ObjectId, ref: Lid_Status },
  cancel_reason_id: { type: Schema.Types.ObjectId, ref: Reason_Lid },
});

const Lid = model('Lid', lidSchema);
module.exports = { Lid };