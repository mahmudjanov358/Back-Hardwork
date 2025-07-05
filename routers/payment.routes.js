const { Router } = require("express");
const payment = Router();

const {
  postPayment,
  getPayment,
  getPaymentById,
  updatePayment,
  deletePayment,
} = require("../controllers/payment.controller");
const {
  postPaymentValidationSchema,
  updatePaymentValidationSchema,
} = require("../validations/paymentValidation");
const paymentValidation = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res
      .status(400)
      .json({ message: validationResult.error.details[0].message });
  } else {
    next();
  }
};

/**
 * @swagger
 * /payment/post:
 *   post:
 *     summary: Yangi Payment yaratish
 *     tags: [Payment]
 *     description: Yangi Payment ni berilgan ma'lumotlar bilan yaratish.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: string
 *                 description: Talabaning ID si.
 *               payment_last_date:
 *                 type: string
 *                 format: date
 *                 description: Payment ning oxirgi to‘lov sanasi.
 *               payment_date:
 *                 type: string
 *                 format: date
 *                 description: Payment ning to‘lov sanasi.
 *               price:
 *                 type: number
 *                 description: Payment ning summasi.
 *               is_paid:
 *                 type: boolean
 *                 description: Payment to‘langan yoki to‘lanmaganligini ko‘rsatadi.
 *               total_attent:
 *                 type: string
 *                 description: Payment ga tegishli umumiy ishtirok.
 *     responses:
 *       201:
 *         description: Payment muvaffaqiyatli yaratildi.
 *       500:
 *         description: Ichki server xatosi.
 */
payment.post(
  "/post",
  paymentValidation(postPaymentValidationSchema),
  postPayment
);

/**
 * @swagger
 * /payment/get:
 *  get:
 *     summary: Barcha Payment larni olish
 *     tags: [Payment]
 *     description: Barcha Payment lar ro‘yxatini olish.
 *     responses:
 *       200:
 *         description: Payment lar muvaffaqiyatli olindi.
 *       500:
 *         description: Ichki server xatosi!
 */
payment.get("/get", getPayment);

/**
 * @swagger
 * /payment/getById/{id}:
 *   get:
 *     summary: Payment ni ID bo‘yicha olish
 *     tags: [Payment]
 *     description: Payment ni uning ID si bo‘yicha olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Olinadigan Payment ning ID si.
 *     responses:
 *       200:
 *         description: Payment ma'lumotlari topildi!
 *       404:
 *         description: Payment topilmadi!
 *       500:
 *         description: Ichki server xatosi!
 */
payment.get("/getById/:id", getPaymentById);

/**
 * @swagger
 * /payment/update/{id}:
 *   patch:
 *     summary: Payment ni ID bo‘yicha yangilash
 *     tags: [Payment]
 *     description: Payment ni uning ID si bo‘yicha berilgan ma'lumotlar bilan yangilash.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Yangilanadigan Payment ning ID si.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: string
 *                 description: Talabaning ID si.
 *               payment_last_date:
 *                 type: string
 *                 format: date
 *                 description: Payment ning oxirgi to‘lov sanasi.
 *               payment_date:
 *                 type: string
 *                 format: date
 *                 description: Payment ning to‘lov sanasi.
 *               price:
 *                 type: number
 *                 description: Payment ning summasi.
 *               is_paid:
 *                 type: boolean
 *                 description: Payment to‘langan yoki to‘lanmaganligini ko‘rsatadi.
 *               total_attent:
 *                 type: string
 *                 description: Payment ga tegishli umumiy ishtirok.
 *     responses:
 *       200:
 *         description: Payment muvaffaqiyatli yangilandi!
 *       404:
 *         description: Payment topilmadi!
 *       500:
 *         description: Ichki server xatosi!
 */
payment.patch(
  "/update/:id",
  paymentValidation(updatePaymentValidationSchema),
  updatePayment
);

/**
 * @swagger
 * /payment/delete/{id}:
 *   delete:
 *     summary: Payment ni ID bo‘yicha o‘chirish
 *     tags: [Payment]
 *     description: Payment ni uning ID si bo‘yicha o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: O‘chiriladigan Payment ning ID si.
 *     responses:
 *       200:
 *         description: Payment muvaffaqiyatli o‘chirildi!
 *       404:
 *         description: Payment topilmadi!
 *       500:
 *         description: Ichki server xatosi!
 */
payment.delete("/delete/:id", deletePayment);

module.exports = { payment };
