const JOI = require("joi");

exports.postStudentLessonValidationSchema = JOI.object({
  lesson_id: JOI.string().required().messages({
    "string.base": "Lesson ID string turida bo‘lishi kerak!",
    "string.empty": "Lesson ID kiritilishi shart!",
    "any.required": "Lesson ID kiritilishi shart!",
  }),
  students_id: JOI.string().required().messages({
    "string.base": "Student ID string turida bo‘lishi kerak!",
    "string.empty": "Student ID kiritilishi shart!",
    "any.required": "Student ID kiritilishi shart!",
  }),
  is_there: JOI.boolean().required().messages({
    "boolean.base": "Is There qiymati boolean turida bo‘lishi kerak!",
    "any.required": "Is There kiritilishi shart!",
  }),
  reason: JOI.string().optional().messages({
    "string.base": "Reason string turida bo‘lishi kerak!",
    "string.empty": "Reason bo‘sh bo‘lmasligi kerak!",
  }),
  be_paid: JOI.boolean().required().messages({
    "boolean.base": "Be Paid qiymati boolean turida bo‘lishi kerak!",
    "any.required": "Be Paid kiritilishi shart!",
  }),
});

// --- Yangilash uchun optional schema ---
exports.updateStudentLessonValidationSchema =
  exports.postStudentLessonValidationSchema.fork(
    Object.keys(exports.postStudentLessonValidationSchema.describe().keys),
    (schema) => schema.optional()
  );
