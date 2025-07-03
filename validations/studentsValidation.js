const JOI = require("joi");

exports.postStudentsValidationSchema = JOI.object({
  lid_id: JOI.string().required().messages({
    "string.base": "Qopqoq identifikatori qator boʻlishi kerak!",
    "string.empty": "Qopqoq identifikatori kiritilishi shart!",
  }),
  first_name: JOI.string().min(2).max(50).required().messages({
    "string.base": "Ism qator boʻlishi kerak!",
    "string.empty": "Ism kiritilishi shart!",
    "string.min": "Ism kamida 2 ta belgidan iborat bo'lishi kerak",
    "string.max": "Ism eng ko'p 50 ta belgidan iborat bo'lishi kerak",
  }),
  last_name: JOI.string().min(2).max(50).required().messages({
    "string.base": "Familiya qator boʻlishi kerak!",
    "string.empty": "Familiya kiritilishi shart!",
    "string.min": "Familiya kamida 2 ta belgidan iborat bo'lishi kerak",
    "string.max": "Familiya eng ko'p 50 ta belgidan iborat bo'lishi kerak",
  }),
  phone_number: JOI.string().pattern(/^\+998\d[9]$/).required().messages({
    "string.base": "Telefon raqami qator boʻlishi kerak!",
    "string.empty": "Telefon raqami kiritilishi shart!",
    "string.pattern.base": "Telefon raqami to'g'ri formatda bo'lishi kerak (masalan, +998901234567)",
  }),
  birthday: JOI.date().required().messages({
    "date.base": "Tug'ilgan sana to'g'ri sana bo'lishi kerak",
    "date.empty": "Tug'ilgan sana kiritilishi shart!",
  }),
  gender: JOI.string().valid("male", "female").required().messages({
    "string.base": "Jins qator boʻlishi kerak!",
    "string.empty": "Jins kiritilishi shart!",
    "any.only": "Jins quyidagi qiymatlardan biri bo'lishi kerak: male, female, other",
  }),
}); // ----postStudentsValidationSchema

exports.updateStudentsValidationSchema = exports.postStudentsValidationSchema.fork(
  Object.keys(exports.postStudentsValidationSchema.describe().keys),
  (schema) => schema.optional()
);