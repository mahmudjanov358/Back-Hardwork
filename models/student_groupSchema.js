const { Schema, model } = require('mongoose');
const { Students } = require('./studentsSchema');
const { Group } = require('./groupSchema');

const student_groupSchema = new Schema({
  students_id: { type: Schema.Types.ObjectId, ref: Students, required: true },
  group_id: { type: Schema.Types.ObjectId, ref: Group, required: true },
});

const Student_Group = model('Student_Group', student_groupSchema);
module.exports = { Student_Group };