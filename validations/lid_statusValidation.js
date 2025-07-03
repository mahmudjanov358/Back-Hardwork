const JOI = require("joi");

exports.postLidStatusValidationSchema = JOI.object({
  status: JOI.string().valid("active", "inactive").required().messages({
    "string.base": "Holat qator boʻlishi kerak!",
    "string.empty": "Holat kiritilishi shart!",
    "any.only": "Holat 'active' yoki 'inactive' bo'lishi kerak!",
  }),
});

exports.updateLidStatusValidationSchema = exports.postLidStatusValidationSchema.fork(
  Object.keys(exports.postLidStatusValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateLidStatusValidationSchema