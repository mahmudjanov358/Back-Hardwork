const JOI = require("joi");

exports.postStudentLessonValidationSchema = JOI.object({
  lesson_id: JOI.string().required().messages({
    "string.base": "Dars identifikatori qator boʻlishi kerak!",
    "string.empty": "Dars identifikatori kiritilishi shart!",
  }),
  students_id: JOI.string().required().messages({
    "string.base": "Talaba identifikatori qator boʻlishi kerak!",
    "string.empty": "Talaba identifikatori kiritilishi shart!",
  }),
  is_there: JOI.boolean().required().messages({
    "boolean.base": "Borligi boolean bo'lishi kerak!",
    "boolean.empty": "Borligi kiritilishi shart!",
  }),
  reason: JOI.string().optional().messages({
    "string.base": "Sabab qator boʻlishi kerak!",
    "string.empty": "Sabab kiritilishi shart!",
  }),
  be_paid: JOI.boolean().required().messages({
    "boolean.base": "To'lanishi kerak boolean bo'lishi kerak!",
    "boolean.empty": "To'lanishi kerak kiritilishi shart!",
  }),
});

exports.updateStudentLessonValidationSchema = exports.postStudentLessonValidationSchema.fork(
  Object.keys(exports.postStudentLessonValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateStudentLessonValidationSchema