const { Router } = require('express');
const payment = Router();

const {
  postPayment,
  getPayment,
  getPaymentById,
  updatePayment,
  deletePayment,
} = require('../controllers/payment.controller');
const {
  postPaymentValidationSchema,
  updatePaymentValidationSchema,
} = require('../validations/paymentValidation');
const paymentValidation = schema => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json({ message: validationResult.error.details[0].message });
  } else {
    next();
  }
};

/**
 * @swagger
 * /payment/post:
 *   post:
 *     summary: Create a new Payment item
 *     tags: [Payment]
 *     description: Create a new Payment item with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: string
 *                 description: The payment ID of the lid item.
 *               payment_last_date:
 *                 type: string
 *                 format: date
 *                 description: 
 *               payment_date:
 *                 type: string
 *                 format: date
 *                 description: 
 *               price:
 *                 type: number
 *                 description: 
 *               is_paid:
 *                 type: boolean
 *                 description: 
 *               total_attent:
 *                 type: string
 *                 description: 
 *     responses:
 *       201:
 *         description: Payment item created successfully
 *       500:
 *         description: Internal Server Error
*/
payment.post('/post', paymentValidation(postPaymentValidationSchema), postPayment);

/**
 * @swagger
 * /payment/get:
 *   get:
 *     summary: Retrieve all Payment items
 *     tags: [Payment]
 *     description: Get a list of all payment items.
 *     responses:
 *       200:
 *         description: Successfully retrieved paymnent items.
 *       500:
 *         description: Internal Server Error!
*/
payment.get('/get', getPayment);

/**
 * @swagger
 * /payment/getById/{id}:
 *   get:
 *     summary: Retrieve a Payment item by ID
 *     tags: [Payment]
 *     description: Get details of a specific payment item by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the payment item.
 *     responses:
 *       200:
 *         description: Details of the payment item found!
 *       404:
 *         description: Payment not found!
 *       500:
 *         description: Internal Server Error!
*/
payment.get('/getById/:id', getPaymentById);

/**
 * @swagger
 * /payment/update/{id}:
 *   patch:
 *     summary: Update a Payment item by ID
 *     tags: [Payment]
 *     description: Update details of a specific payment item by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the payment item to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: string
 *                 description: The payment ID of the lid item.
 *               payment_last_date:
 *                 type: string
 *                 format: date
 *                 description: 
 *               payment_date:
 *                 type: string
 *                 format: date
 *                 description: 
 *               price:
 *                 type: number
 *                 description: 
 *               is_paid:
 *                 type: boolean
 *                 description: 
 *               total_attent:
 *                 type: string
 *                 description: 
 *     responses:
 *       200:
 *         description: Payment item updated successfully!
 *       404:
 *         description: Payment not found!
 *       500:
 *         description: Internal Server Error!
*/
payment.patch('/update/:id', paymentValidation(updatePaymentValidationSchema), updatePayment);

/**
 * @swagger
 * /payment/delete/{id}:
 *   delete:
 *     summary: Delete a payment item by ID
 *     tags: [Payment]
 *     description: Delete a specific payment item by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the payment item to delete.
 *     responses:
 *       200:
 *         description: Payment item deleted successfully!
 *       404:
 *         description: Payment item not found!
 *       500:
 *         description: Internal Server Error!
*/
payment.delete('/delete/:id', deletePayment);

module.exports = { payment };