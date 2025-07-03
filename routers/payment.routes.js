const { Router } = require('express');
const payment = Router();

const {
  postPayment,
  getPayment,
  getPaymentById,
  updatePayment,
  deletePayment,
} = require('../controllers/payment.controller');

payment.post('/post', postPayment);
payment.get('/get', getPayment);
payment.get('/getById/:id', getPaymentById);
payment.patch('/update/:id', updatePayment);
payment.delete('/delete/:id', deletePayment);

module.exports = { payment };