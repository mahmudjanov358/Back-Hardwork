const { Schema, model } = require('mongoose');
const { Lesson } = require('./lessonSchema');
const { Students } = require('./studentsSchema');

const student_lessonSchema = new Schema({
  lesson_id: { type: Schema.Types.ObjectId, ref: Lesson, required: true },
  students_id: { type: Schema.Types.ObjectId, ref: Students, required: true },
  is_there: { type: Boolean },
  reason: { type: String, required: true },
  be_paid: { type: Boolean },
});

const Student_Lesson = model('Student_Lesson', student_lessonSchema);
module.exports = { Student_Lesson };