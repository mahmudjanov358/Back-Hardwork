const JOI = require('joi');

exports.postBranchValidationSchema = JOI.object({
  name: JOI.string().min(3).max(50).required().messages({
    'string.base': 'Ism qator bo\'lishi kerak!',
    'string.empty': 'Ism kiritilishi shart!',
    'string.min': 'Ism kamida 3 ta belgidan iborat bo\'lishi kerak!',
    'string.max': 'Ism eng ko\'pi bilan 50 ta belgidan iborat bo\'lishi kerak!',
  }),
  address: JOI.string().min(5).max(100).required().messages({
    'string.base': 'Manzil qator bo\'lishi kerak!',
    'string.empty': 'Manzil kiritilishi shart!',
    'string.min': 'Manzil kamida 5 ta belgidan iborat bo\'lishi kerak!',
    'string.max': 'Manzil eng ko\'pi bilan 100 ta belgidan iborat bo\'lishi kerak!',
  }),
  call_number: JOI.string().pattern(/^\+998\d{9}$/).required().messages({
    'string.base': 'Qo\'ng\'iroq raqami qator bo\'lishi kerak!',
    'string.empty': 'Qo\'ng\'iroq raqami kiritilishi shart!',
    'string.pattern.base': 'Qo\'ng\'iroq raqami +998XXXXXXXXX formatida bo\'lishi kerak!',
  }),
}); // ----postBranchValidationSchema

exports.updateBranchValidationSchema = exports.postBranchValidationSchema.fork(
  Object.keys(exports.postBranchValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateBranchValidationSchema