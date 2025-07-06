const JOI = require("joi");

exports.postLidValidationSchema = JOI.object({
  first_name: JOI.string().min(2).max(50).required().messages({
    "string.base": "First name string turida bo'lishi kerak!",
    "string.empty": "First name kiritilishi shart!",
    "string.min": "First name kamida 2 ta belgidan iborat bo'lishi kerak!",
    "string.max":
      "First name eng ko'pi bilan 50 ta belgidan iborat bo'lishi kerak!",
    "any.required": "First name kiritilishi shart!",
  }),
  last_name: JOI.string().min(2).max(50).required().messages({
    "string.base": "Last name string turida bo'lishi kerak!",
    "string.empty": "Last name kiritilishi shart!",
    "string.min": "Last name kamida 2 ta belgidan iborat bo'lishi kerak!",
    "string.max":
      "Last name eng ko'pi bilan 50 ta belgidan iborat bo'lishi kerak!",
    "any.required": "Last name kiritilishi shart!",
  }),
  phone_number: JOI.string()
    .pattern(/^\+998\d{9}$/)
    .required()
    .messages({
      "string.base": "Phone number string turida bo'lishi kerak!",
      "string.empty": "Phone number kiritilishi shart!",
      "string.pattern.base":
        "Phone number to'g'ri formatda bo'lishi kerak (masalan, +998901234567)!",
      "any.required": "Phone number kiritilishi shart!",
    }),
  lid_stage_id: JOI.string().required().messages({
    "string.base": "Lid stage ID string turida bo'lishi kerak!",
    "string.empty": "Lid stage ID kiritilishi shart!",
    "any.required": "Lid stage ID kiritilishi shart!",
  }),
  test_date: JOI.date().required().messages({
    "date.base": "Test date date turida bo'lishi kerak!",
    "date.empty": "Test date kiritilishi shart!",
    "any.required": "Test date kiritilishi shart!",
  }),
  trial_lesson_date: JOI.date().required().messages({
    "date.base": "Trial lesson date date turida bo'lishi kerak!",
    "date.empty": "Trial lesson date kiritilishi shart!",
    "any.required": "Trial lesson date kiritilishi shart!",
  }),
  trial_lesson_time: JOI.string().required().messages({
    "string.base": "Trial lesson time string turida bo'lishi kerak!",
    "string.empty": "Trial lesson time kiritilishi shart!",
    "any.required": "Trial lesson time kiritilishi shart!",
  }),
  trial_lesson_group_id: JOI.string().required().messages({
    "string.base": "Trial lesson group ID string turida bo'lishi kerak!",
    "string.empty": "Trial lesson group ID kiritilishi shart!",
    "any.required": "Trial lesson group ID kiritilishi shart!",
  }),
  lid_status_id: JOI.string().required().messages({
    "string.base": "Lid status ID string turida bo'lishi kerak!",
    "string.empty": "Lid status ID kiritilishi shart!",
    "any.required": "Lid status ID kiritilishi shart!",
  }),
  cancel_reason_id: JOI.string().optional().messages({
    "string.base": "Cancel reason ID string turida bo'lishi kerak!",
    "string.empty": "Cancel reason ID kiritilishi shart emas!",
  }),
}); // ----postLidValidationSchema

exports.updateLidValidationSchema = exports.postLidValidationSchema.fork(
  Object.keys(exports.postLidValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateLidValidationSchema
