const { Schema, model } = require("mongoose");
const { Group } = require("./groupSchema");

const lessonSchema = new Schema({
  lesson_theme: { type: String, required: true },
  lesson_number: { type: Number, required: true },
  group_id: { type: Schema.Types.ObjectId, ref: Group },
  lesson_date: { type: Date, required: true },
});

const Lesson = model("Lesson", lessonSchema);
module.exports = { Lesson };
