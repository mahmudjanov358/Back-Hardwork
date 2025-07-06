const JOI = require("joi");

exports.postPaymentValidationSchema = JOI.object({
  students_id: JOI.string().required().messages({
    "string.base": "Students ID string turida boʻlishi kerak!",
    "string.empty": "Students ID kiritilishi shart!",
    "any.required": "Students ID kiritilishi shart!",
  }),
  payment_last_date: JOI.date().required().messages({
    "date.base": "Payment last date date turida boʻlishi kerak!",
    "date.empty": "Payment last date kiritilishi shart!",
    "any.required": "Payment last date kiritilishi shart!",
  }),
  payment_date: JOI.date().required().messages({
    "date.base": "Payment date date turida boʻlishi kerak!",
    "date.empty": "Payment date kiritilishi shart!",
    "any.required": "Payment date kiritilishi shart!",
  }),
  price: JOI.number().integer().min(1).required().messages({
    "number.base": "Price number turida boʻlishi kerak!",
    "number.empty": "Price kiritilishi shart!",
    "number.min": "Price kamida 1 boʻlishi kerak!",
    "any.required": "Price kiritilishi shart!",
  }),
  is_paid: JOI.boolean().required().messages({
    "boolean.base": "Is paid boolean turida boʻlishi kerak!",
    "boolean.empty": "Is paid kiritilishi shart!",
    "any.required": "Is paid kiritilishi shart!",
  }),
  total_attent: JOI.number().integer().min(0).required().messages({
    "number.base": "Total attent number turida boʻlishi kerak!",
    "number.empty": "Total attent kiritilishi shart!",
    "number.min": "Total attent kamida 0 boʻlishi kerak!",
    "number.max": "Total attent eng koʻpi bilan 100 boʻlishi kerak!",
    "any.required": "Total attent kiritilishi shart!",
  }),
}); // ----postPaymentValidationSchema

exports.updatePaymentValidationSchema =
  exports.postPaymentValidationSchema.fork(
    Object.keys(exports.postPaymentValidationSchema.describe().keys),
    (schema) => schema.optional()
  ); // ----updatePaymentValidationSchema
