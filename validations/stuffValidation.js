const JOI = require("joi");

exports.postStuffValidationSchema = JOI.object({
  first_name: JOI.string().min(2).max(50).required().messages({
    "string.base": "First Name string turida bo'lishi kerak!",
    "string.empty": "First Name kiritilishi shart!",
    "string.min": "First Name kamida 2 ta belgidan iborat bo'lishi kerak!",
    "string.max": "First Name eng ko‘p 50 ta belgidan iborat bo'lishi kerak!",
    "any.required": "First Name kiritilishi shart!",
  }),
  last_name: JOI.string().min(2).max(50).required().messages({
    "string.base": "Last Name string turida bo'lishi kerak!",
    "string.empty": "Last Name kiritilishi shart!",
    "string.min": "Last Name kamida 2 ta belgidan iborat bo'lishi kerak!",
    "string.max": "Last Name eng ko‘p 50 ta belgidan iborat bo'lishi kerak!",
    "any.required": "Last Name kiritilishi shart!",
  }),
  phone_number: JOI.string()
    .pattern(/^\+998\d{9}$/)
    .required()
    .messages({
      "string.base": "Phone Number string turida bo'lishi kerak!",
      "string.empty": "Phone Number kiritilishi shart!",
      "string.pattern.base":
        "Phone Number +998XXXXXXXXX formatida bo'lishi kerak!",
      "any.required": "Phone Number kiritilishi shart!",
    }),
  login: JOI.string().min(2).max(50).required().messages({
    "string.base": "Login string turida bo'lishi kerak!",
    "string.empty": "Login kiritilishi shart!",
    "string.min": "Login kamida 2 ta belgidan iborat bo'lishi kerak!",
    "string.max": "Login eng ko‘p 50 ta belgidan iborat bo'lishi kerak!",
    "any.required": "Login kiritilishi shart!",
  }),
  parol: JOI.string()
    .min(4)
    .max(50)
    .pattern(/^[a-zA-Z0-9]{4,50}$/)
    .required()
    .messages({
      "string.base": "Parol string turida bo'lishi kerak!",
      "string.empty": "Parol kiritilishi shart!",
      "string.min": "Parol kamida 4 ta belgidan iborat bo'lishi kerak!",
      "string.max": "Parol eng ko‘p 50 ta belgidan iborat bo'lishi kerak!",
      "string.pattern.base":
        "Parol faqat harflar va raqamlardan iborat bo'lishi kerak!",
      "any.required": "Parol kiritilishi shart!",
    }),
  is_active: JOI.boolean().required().messages({
    "boolean.base": "Is Active boolean turida bo‘lishi kerak!",
    "any.required": "Is Active kiritilishi shart!",
  }),
}); // ----postStuffValidationSchema

exports.updateStuffValidationSchema = exports.postStuffValidationSchema.fork(
  Object.keys(exports.postStuffValidationSchema.describe().keys),
  (field) => field.optional()
); // ----updateStuffValidationSchema
