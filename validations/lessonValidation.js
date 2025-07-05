const JOI = require("joi");

exports.postLessonValidationSchema = JOI.object({
  lesson_theme: JOI.string().min(3).max(50).required().messages({
    "string.base": "Lesson theme string turida bo'lishi kerak!",
    "string.empty": "Lesson theme kiritilishi shart!",
    "string.min": "Lesson theme kamida 3 ta belgidan iborat bo'lishi kerak!",
    "string.max":
      "Lesson theme eng ko'pi bilan 50 ta belgidan iborat bo'lishi kerak!",
    "any.required": "Lesson theme kiritilishi shart!",
  }),
  lesson_number: JOI.number().integer().min(1).max(100).required().messages({
    "number.base": "Lesson number number turida bo'lishi kerak!",
    "number.empty": "Lesson number kiritilishi shart!",
    "number.min": "Lesson number kamida 1 bo'lishi kerak!",
    "number.max": "Lesson number eng ko'pi bilan 100 bo'lishi kerak!",
    "any.required": "Lesson number kiritilishi shart!",
  }),
  group_id: JOI.string().required().messages({
    "string.base": "Group ID string turida bo'lishi kerak!",
    "string.empty": "Group ID kiritilishi shart!",
    "any.required": "Group ID kiritilishi shart!",
  }),
  lesson_date: JOI.date().required().messages({
    "date.base": "Lesson date date turida bo'lishi kerak!",
    "date.empty": "Lesson date kiritilishi shart!",
    "any.required": "Lesson date kiritilishi shart!",
  }),
});

exports.updateLessonValidationSchema = exports.postLessonValidationSchema.fork(
  Object.keys(exports.postLessonValidationSchema.describe().keys),
  (schema) => schema.optional()
);
