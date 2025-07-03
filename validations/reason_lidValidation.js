const JOI = require("joi");

exports.postReasonLidValidationSchema = JOI.object({
  reason_lid: JOI.string().required().messages({
    "string.base": "Sabab qopqog'i ip bo'lishi kerak!",
    "string.empty": "Sabab qopqog'i kiritilishi shart!",
  }),
}); // ----postReasonLidValidationSchema

exports.updateReasonLidValidationSchema = exports.postReasonLidValidationSchema.fork(
  Object.keys(exports.postReasonLidValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateReasonLidValidationSchema