const JOI = require("joi");

exports.postStageValidationSchema = JOI.object({
  name: JOI.string().min(2).max(50).required().messages({
    "string.base": "Stage nomi string turida bo‘lishi kerak!",
    "string.empty": "Stage nomi kiritilishi shart!",
    "string.min": "Stage nomi kamida 2 ta belgidan iborat bo‘lishi kerak!",
    "string.max":
      "Stage nomi eng ko‘pi bilan 50 ta belgidan iborat bo‘lishi kerak!",
    "any.required": "Stage nomi kiritilishi shart!",
  }),
});

// --- Update schema: barcha field’larni optional holatga o‘tkazish ---
exports.updateStageValidationSchema = exports.postStageValidationSchema.fork(
  Object.keys(exports.postStageValidationSchema.describe().keys),
  (schema) => schema.optional()
);
