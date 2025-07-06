const JOI = require("joi");

exports.postLidStatusValidationSchema = JOI.object({
  status: JOI.string().valid("active", "inactive").required().messages({
    "string.base": "Status string turida boʻlishi kerak!",
    "string.empty": "Status kiritilishi shart!",
    "any.only": "Status 'active' yoki 'inactive' bo'lishi kerak!",
    "any.required": "Status kiritilishi shart!",
  }),
}); // ----postLidStatusValidationSchema

exports.updateLidStatusValidationSchema =
  exports.postLidStatusValidationSchema.fork(
    Object.keys(exports.postLidStatusValidationSchema.describe().keys),
    (schema) => schema.optional()
  ); // ----updateLidStatusValidationSchema
