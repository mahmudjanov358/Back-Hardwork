const JOI = require("joi");

exports.postStudentsValidationSchema = JOI.object({
  lid_id: JOI.string().required().messages({
    "string.base": "Lid ID string turida bo‘lishi kerak!",
    "string.empty": "Lid ID kiritilishi shart!",
    "any.required": "Lid ID kiritilishi shart!",
  }),
  first_name: JOI.string().min(2).max(50).required().messages({
    "string.base": "First Name string turida bo‘lishi kerak!",
    "string.empty": "First Name kiritilishi shart!",
    "string.min": "First Name kamida 2 ta belgidan iborat bo‘lishi kerak!",
    "string.max":
      "First Name eng ko‘pi bilan 50 ta belgidan iborat bo‘lishi kerak!",
    "any.required": "First Name kiritilishi shart!",
  }),
  last_name: JOI.string().min(2).max(50).required().messages({
    "string.base": "Last Name string turida bo‘lishi kerak!",
    "string.empty": "Last Name kiritilishi shart!",
    "string.min": "Last Name kamida 2 ta belgidan iborat bo‘lishi kerak!",
    "string.max":
      "Last Name eng ko‘pi bilan 50 ta belgidan iborat bo‘lishi kerak!",
    "any.required": "Last Name kiritilishi shart!",
  }),
  phone_number: JOI.string()
    .pattern(/^\+998\d{9}$/)
    .required()
    .messages({
      "string.base": "Phone Number string turida bo‘lishi kerak!",
      "string.empty": "Phone Number kiritilishi shart!",
      "string.pattern.base":
        "Phone Number +998XXXXXXXXX formatida bo‘lishi kerak!",
      "any.required": "Phone Number kiritilishi shart!",
    }),
  birthday: JOI.date().required().messages({
    "date.base": "Birthday to‘g‘ri sana formatida bo‘lishi kerak!",
    "any.required": "Birthday kiritilishi shart!",
  }),
  gender: JOI.string().valid("male", "female").required().messages({
    "string.base": "Gender string turida bo‘lishi kerak!",
    "string.empty": "Gender kiritilishi shart!",
    "any.only":
      "Gender faqat quyidagilardan biri bo‘lishi kerak: male, female.",
    "any.required": "Gender kiritilishi shart!",
  }),
});

// --- Yangilash uchun optional variant ---
exports.updateStudentsValidationSchema =
  exports.postStudentsValidationSchema.fork(
    Object.keys(exports.postStudentsValidationSchema.describe().keys),
    (schema) => schema.optional()
  );
