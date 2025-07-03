const JOI = require("joi");

exports.postPaymentValidationSchema = JOI.object({
  students_id: JOI.string().required().messages({
    "string.base": "Talaba identifikatori qator boʻlishi kerak!",
    "string.empty": "Talaba identifikatori kiritilishi shart!",
  }),
  payment_last_date: JOI.date().required().messages({
    "date.base": "To'lov oxirgi sanasi to'g'ri sana bo'lishi kerak!",
    "date.empty": "To'lov oxirgi sanasi kiritilishi shart!",
  }),
  payment_date: JOI.date().required().messages({
    "date.base": "To'lov sanasi to'g'ri sana bo'lishi kerak!",
    "date.empty": "To'lov sanasi kiritilishi shart!",
  }),
  price: JOI.number().integer().min(1).required().messages({
    "number.base": "Narx raqam bo'lishi kerak!",
    "number.empty": "Narx kiritilishi shart!",
    "number.min": "Narx kamida 1 bo'lishi kerak!",
    "number.max": "Narx eng ko'p 1000000 bo'lishi kerak!",
  }),
  is_paid: JOI.boolean().required().messages({
    "boolean.base": "To'lov holati boolean bo'lishi kerak!",
    "boolean.empty": "To'lov holati kiritilishi shart!",
  }),
  total_attent: JOI.number().integer().min(0).required().messages({
    "number.base": "Jami qatnashuv raqam bo'lishi kerak!",
    "number.empty": "Jami qatnashuv kiritilishi shart!",
    "number.min": "Jami qatnashuv kamida 0 bo'lishi kerak!",
    "number.max": "Jami qatnashuv eng ko'p 100 bo'lishi kerak!",
  }),
}); // ----postPaymentValidationSchema

exports.updatePaymentValidationSchema = exports.postPaymentValidationSchema.fork(
  Object.keys(exports.postPaymentValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updatePaymentValidationSchema