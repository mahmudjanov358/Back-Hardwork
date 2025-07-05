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
 *     summary: Yangi Payment yozuvini yaratish
 *     tags: [Payment]
 *     description: Kiritilgan ma'lumotlar asosida yangi Payment yozuvini yaratish.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: string
 *                 description: Students ning ID raqami.
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
 *                 description: To‘lov holati (to‘langan — true, to‘lanmagan — false).
 *               total_attent:
 *                 type: string
 *                 description: Umumiy ishtirok.
 *     responses:
 *       201:
 *         description: Payment muvaffaqiyatli yaratildi.
 *       400:
 *         description: Noto‘g‘ri yoki to‘liq bo‘lmagan ma'lumot yuborildi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
payment.post(
  "/post",
  paymentValidation(postPaymentValidationSchema),
  postPayment
);

/**
 * @swagger
 * /payment/get:
 *   get:
 *     summary: Barcha Payment yozuvlarini olish
 *     tags: [Payment]
 *     description: Tizimdagi barcha Payment yozuvlarini olish.
 *     responses:
 *       200:
 *         description: Payment ro‘yxati muvaffaqiyatli olindi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
payment.get("/get", getPayment);

/**
 * @swagger
 * /payment/getById/{id}:
 *   get:
 *     summary: ID orqali Payment yozuvini olish
 *     tags: [Payment]
 *     description: Ko‘rsatilgan ID orqali Payment yozuvini olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Olish kerak bo‘lgan Payment ning ID raqami.
 *     responses:
 *       200:
 *         description: Payment yozuvi muvaffaqiyatli topildi.
 *       404:
 *         description: Payment topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
payment.get("/getById/:id", getPaymentById);

/**
 * @swagger
 * /payment/update/{id}:
 *   patch:
 *     summary: ID orqali Payment yozuvini yangilash
 *     tags: [Payment]
 *     description: Berilgan ID asosida Payment yozuvini yangilash.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Yangilanadigan Payment ning ID raqami.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: string
 *                 description: Students ning ID raqami.
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
 *                 description: To‘lov holati (to‘langan — true, to‘lanmagan — false).
 *               total_attent:
 *                 type: string
 *                 description: Umumiy ishtirok.
 *     responses:
 *       200:
 *         description: Payment muvaffaqiyatli yangilandi.
 *       404:
 *         description: Payment topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
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
 *     summary: ID orqali Payment yozuvini o‘chirish
 *     tags: [Payment]
 *     description: Ko‘rsatilgan ID orqali Payment yozuvini o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: O‘chiriladigan Payment ning ID raqami.
 *     responses:
 *       200:
 *         description: Payment muvaffaqiyatli o‘chirildi.
 *       404:
 *         description: Payment topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
payment.delete("/delete/:id", deletePayment);

module.exports = { payment };
