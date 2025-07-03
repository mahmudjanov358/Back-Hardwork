const JOI = require("joi");

exports.postLidValidationSchema = JOI.object({
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
  phone_number: JOI.string().pattern(/^\+998\d[9]$/).required().messages({
    "string.base": "Telefon raqami qator bo'lishi kerak!",
    "string.empty": "Telefon raqami kiritilishi shart!",
    "string.pattern.base": "Telefon raqami to'g'ri formatda bo'lishi kerak (masalan, +998901234567)",
  }),
  lid_stage_id: JOI.string().required().messages({
    "string.base": "LID stage ID qator bo'lishi kerak!",
    "string.empty": "LID stage ID kiritilishi shart!",
  }),
  test_date: JOI.date().required().messages({
    "date.base": "Test sanasi to'g'ri sana bo'lishi kerak!",
    "date.empty": "Test sanasi kiritilishi shart!",
  }),
  trial_lesson_date: JOI.number().integer().min(1).max(100).required().messages({
    "number.base": "Trial lesson date raqam bo'lishi kerak!",
    "number.empty": "Trial lesson date kiritilishi shart!",
    "number.min": "Trial lesson date kamida 1 bo'lishi kerak!",
    "number.max": "Trial lesson date eng ko'p 100 bo'lishi kerak!",
  }),
  trial_lesson_time: JOI.string().required().messages({
    "string.base": "Trial lesson time qator bo'lishi kerak!",
    "string.empty": "Trial lesson time kiritilishi shart!",
  }),
  trial_lesson_group_id: JOI.string().required().messages({
    "string.base": "Trial lesson group ID qator bo'lishi kerak!",
    "string.empty": "Trial lesson group ID kiritilishi shart!",
  }),
  lid_status_id: JOI.string().required().messages({
    "string.base": "LID status ID qator bo'lishi kerak!",
    "string.empty": "LID status ID kiritilishi shart!",
  }),
  cancel_reason_id: JOI.string().optional().messages({
    "string.base": "Cancel reason ID qator bo'lishi kerak!",
    "string.empty": "Cancel reason ID kiritilishi shart emas!",
  }),
}); // ----postLidValidationSchema

exports.updateLidValidationSchema = exports.postLidValidationSchema.fork(
  Object.keys(exports.postLidValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateLidValidationSchema