const JOI = require("joi");

exports.postStageValidationSchema = JOI.object({
  name: JOI.string().min(2).max(50).required().messages({
    "string.base": "Sahna nomi qator boʻlishi kerak!",
    "string.empty": "Sahna nomi kiritilishi shart!",
    "string.min": "Sahna nomi kamida 2 ta belgidan iborat bo'lishi kerak!",
    "string.max": "Sahna nomi eng ko'p 50 ta belgidan iborat bo'lishi kerak!",
  }),
}); // ----postStageValidationSchema

exports.updateStageValidationSchema = exports.postStageValidationSchema.fork(
  Object.keys(exports.postStageValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateStageValidationSchema