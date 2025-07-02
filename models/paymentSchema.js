const { Schema, model } = require('mongoose');
const { Students } = require('./studentsSchema');

const paymentSchema = new Schema({
  students_id: { type: Schema.Types.ObjectId, ref: Students },
  payment_last_date: { type: Date, required: true },
  payment_date: { type: Date, required: true },
  price: { type: Number, required: true },
  is_paid: { type: Boolean },
  total_attent: { type: Number, required: true },
});

const Payment = model('Payment', paymentSchema);
module.exports = { Payment };