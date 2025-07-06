const JOI = require("joi");

exports.postRoleValidationSchema = JOI.object({
  name: JOI.string().min(2).max(50).required().messages({
    "string.base": "Role nomi string turida bo‘lishi kerak!",
    "string.empty": "Role nomi kiritilishi shart!",
    "string.min": "Role nomi kamida 2 ta belgidan iborat bo‘lishi kerak!",
    "string.max":
      "Role nomi eng ko‘pi bilan 50 ta belgidan iborat bo‘lishi kerak!",
    "any.required": "Role nomi kiritilishi shart!",
  }),
}); // ----postRoleValidationSchema

exports.updateRoleValidationSchema = exports.postRoleValidationSchema.fork(
  Object.keys(exports.postRoleValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateRoleValidationSchema
