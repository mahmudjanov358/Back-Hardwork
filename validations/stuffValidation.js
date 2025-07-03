const JOI = require("joi");

exports.postStuffValidationSchema = JOI.object({
  first_name: JOI.string().min(2).max(50).required().messages({
    "string.base": "Ism qator bo'lishi kerak!",
    "string.empty": "Ism kiritilishi shart!",
    "string.min": "Ism kamida 2 ta belgidan iborat bo'lishi kerak!",
    "string.max": "Ism eng ko'p 50 ta belgidan iborat bo'lishi kerak!",
  }),
  last_name: JOI.string().min(2).max(50).required().messages({
    "string.base": "Familiya qator bo'lishi kerak!",
    "string.empty": "Familiya kiritilishi shart!",
    "string.min": "Familiya kamida 2 ta belgidan iborat bo'lishi kerak!",
    "string.max": "Familiya eng ko'p 50 ta belgidan iborat bo'lishi kerak!",
  }),
  phone_number: JOI.string().pattern(/^\+998\d{9}$/).required().messages({
    "string.base": "Telefon raqami qator bo'lishi kerak!",
    "string.empty": "Telefon raqami kiritilishi shart!",
    "string.pattern.base": "Telefon raqami +998XXXXXXXXX formatida bo\'lishi kerak!",
  }),
  login: JOI.string().min(2).max(50).required().messages({
    "string.base": "Login qator bo'lishi kerak!",
    "string.empty": "Login kiritilishi shart!",
    "string.min": "Login kamida 2 ta belgidan iborat bo'lishi kerak!",
    "string.max": "Login eng ko'p 50 ta belgidan iborat bo'lishi kerak!",
  }),
  parol: JOI.string().min(4).max(50).required().pattern(/^[a-zA-Z0-9]{4,50}$/).messages({
    "string.base": "Parol qator bo'lishi kerak!",
    "string.empty": "Parol kiritilishi shart!",
    "string.min": "Parol kamida 4 ta belgidan iborat bo'lishi kerak!",
    "string.max": "Parol eng ko'p 50 ta belgidan iborat bo'lishi kerak!",
  }),
  is_active: JOI.boolean().required().messages({
    "boolean.base": "Is active qator bo'lishi kerak!",
    "boolean.empty": "Is active kiritilishi shart!",
  }),
}); // ----postStuffValidationSchema

exports.updateStuffValidationSchema = exports.postStuffValidationSchema.fork(
  Object.keys(exports.postStuffValidationSchema.describe().keys),
  (field) => field.optional()
); // ----updateStuffValidationSchema