const JOI = require("joi");

exports.postLessonValidationSchema = JOI.object({
  lesson_theme: JOI.string().min(3).max(50).required().messages({
    "string.base": "Dars mavzusi qator bo'lishi kerak!",
    "string.empty": "Dars mavzusi kiritilishi shart!",
    "string.min": "Dars mavzusi kamida 3 ta belgidan iborat bo'lishi kerak!",
    "string.max": "Dars mavzusi eng ko'p 50 ta belgidan iborat bo'lishi kerak!",
  }),
  lesson_number: JOI.number().integer().min(1).max(100).required().messages({
    "number.base": "Dars raqami raqam bo'lishi kerak!",
    "number.empty": "Dars raqami kiritilishi shart!",
    "number.min": "Dars raqami kamida 1 bo'lishi kerak!",
    "number.max": "Dars raqami eng ko'p 100 bo'lishi kerak!",
  }),
  group_id: JOI.string().required().messages({
    "string.base": "Guruh ID qator bo'lishi kerak!",
    "string.empty": "Guruh ID kiritilishi shart!",
  }),
  lesson_date: JOI.date().required().messages({
    "date.base": "Dars sanasi to'g'ri sana bo'lishi kerak!",
    "date.empty": "Dars sanasi kiritilishi shart!",
  }),
}); // ----postLessonValidationSchema

exports.updateLessonValidationSchema = exports.postLessonValidationSchema.fork(
  Object.keys(exports.postLessonValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateLessonValidationSchema