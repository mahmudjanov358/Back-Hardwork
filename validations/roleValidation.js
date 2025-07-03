const JOI = require("joi");

exports.postRoleValidationSchema = JOI.object({
  name: JOI.string().min(2).max(50).required().messages({
    "string.base": "Rol nomi qator boʻlishi kerak!",
    "string.empty": "Rol nomi kiritilishi shart!",
    "string.min": "Rol nomi kamida 2 ta belgidan iborat bo'lishi kerak!",
    "string.max": "Rol nomi eng ko'p 50 ta belgidan iborat bo'lishi kerak!",
  }),
});

exports.updateRoleValidationSchema = exports.postRoleValidationSchema.fork(
  Object.keys(exports.postRoleValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateRoleValidationSchema
