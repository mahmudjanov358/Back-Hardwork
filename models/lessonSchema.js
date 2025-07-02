const { Schema, model } = require('mongoose');
const { Group } = require('./groupSchema');

const lessonSchema = new Schema({
  lesson_theme: { String, required: true },
  lesson_number: { String, required: true },
  group_id: { type: Schema.Types.ObjectId, ref: Group },
  lesson_date: { String, required: true },
});

const Lesson = model('Lesson', lessonSchema);
module.exports = { Lesson };