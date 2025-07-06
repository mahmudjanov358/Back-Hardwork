const JOI = require("joi");

exports.postBranchValidationSchema = JOI.object({
  name: JOI.string().min(3).max(50).required().messages({
    "string.base": "Name string turida boʻlishi kerak!",
    "string.empty": "Name kiritilishi shart!",
    "string.min": "Name kamida 3 ta belgidan iborat boʻlishi kerak!",
    "string.max": "Name eng koʻpi bilan 50 ta belgidan iborat boʻlishi kerak!",
    "any.required": "Name kiritilishi shart!",
  }),
  address: JOI.string().min(5).max(100).required().messages({
    "string.base": "Address string turida boʻlishi kerak!",
    "string.empty": "Address kiritilishi shart!",
    "string.min": "Address kamida 5 ta belgidan iborat boʻlishi kerak!",
    "string.max":
      "Address eng koʻpi bilan 100 ta belgidan iborat boʻlishi kerak!",
    "any.required": "Address kiritilishi shart!",
  }),
  call_number: JOI.string()
    .pattern(/^\+998\d{9}$/)
    .required()
    .messages({
      "string.base": "Call number string turida boʻlishi kerak!",
      "string.empty": "Call number kiritilishi shart!",
      "string.pattern.base":
        "Call number +998XXXXXXXXX formatida boʻlishi kerak!",
      "any.required": "Call number kiritilishi shart!",
    }),
}); // ----postBranchValidationSchema

exports.updateBranchValidationSchema = exports.postBranchValidationSchema.fork(
  Object.keys(exports.postBranchValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateBranchValidationSchema
