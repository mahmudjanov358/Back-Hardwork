const JOI = require("joi");

exports.postReasonLidValidationSchema = JOI.object({
  reason_lid: JOI.string().required().messages({
    "string.base": "Reason Lid string turida bo‘lishi kerak!",
    "string.empty": "Reason Lid kiritilishi shart!",
    "any.required": "Reason Lid kiritilishi shart!",
  }),
}); // ----postReasonLidValidationSchema

exports.updateReasonLidValidationSchema =
  exports.postReasonLidValidationSchema.fork(
    Object.keys(exports.postReasonLidValidationSchema.describe().keys),
    (schema) => schema.optional()
  ); // ----updateReasonLidValidationSchema
