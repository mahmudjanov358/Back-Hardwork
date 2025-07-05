const { Router } = require("express");
const reason_lid = Router();

const {
  postReason_Lid,
  getReason_Lid,
  getReason_LidById,
  updateReason_Lid,
  deleteReason_Lid,
} = require("../controllers/reason_lid.controller");

const {
  postReasonLidValidationSchema,
  updateReasonLidValidationSchema,
} = require("../validations/reason_lidValidation");

const reasonLidValidation = (schema) => (req, res, next) => {
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
 * /reason_lid/post:
 *   post:
 *     summary: Yangi Reason_Lid yozuvini yaratish
 *     tags: [Reason_Lid]
 *     description: Kiritilgan ma'lumotlar asosida yangi Reason_Lid yozuvini yaratish.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reason:
 *                 type: string
 *                 description: Reason_Lid ning sababi.
 *     responses:
 *       201:
 *         description: Reason_Lid muvaffaqiyatli yaratildi.
 *       400:
 *         description: Noto‘g‘ri yoki to‘liq bo‘lmagan ma'lumot yuborildi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
reason_lid.post(
  "/post",
  reasonLidValidation(postReasonLidValidationSchema),
  postReason_Lid
);

/**
 * @swagger
 * /reason_lid/get:
 *   get:
 *     summary: Barcha Reason_Lid yozuvlarini olish
 *     tags: [Reason_Lid]
 *     description: Tizimdagi barcha Reason_Lid yozuvlarini olish.
 *     responses:
 *       200:
 *         description: Reason_Lid ro‘yxati muvaffaqiyatli olindi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
reason_lid.get("/get", getReason_Lid);

/**
 * @swagger
 * /reason_lid/getById/{id}:
 *   get:
 *     summary: ID orqali Reason_Lid yozuvini olish
 *     tags: [Reason_Lid]
 *     description: Ko‘rsatilgan ID orqali Reason_Lid yozuvini olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Olish kerak bo‘lgan Reason_Lid ning ID raqami.
 *     responses:
 *       200:
 *         description: Reason_Lid yozuvi muvaffaqiyatli topildi.
 *       404:
 *         description: Reason_Lid topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
reason_lid.get("/getById/:id", getReason_LidById);

/**
 * @swagger
 * /reason_lid/update/{id}:
 *   patch:
 *     summary: ID orqali Reason_Lid yozuvini yangilash
 *     tags: [Reason_Lid]
 *     description: Berilgan ID asosida Reason_Lid yozuvini yangilash.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Yangilanadigan Reason_Lid ning ID raqami.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reason:
 *                 type: string
 *                 description: Reason_Lid ning yangilangan sababi.
 *     responses:
 *       200:
 *         description: Reason_Lid muvaffaqiyatli yangilandi.
 *       404:
 *         description: Reason_Lid topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
reason_lid.patch(
  "/update/:id",
  reasonLidValidation(updateReasonLidValidationSchema),
  updateReason_Lid
);

/**
 * @swagger
 * /reason_lid/delete/{id}:
 *   delete:
 *     summary: ID orqali Reason_Lid yozuvini o‘chirish
 *     tags: [Reason_Lid]
 *     description: Ko‘rsatilgan ID orqali Reason_Lid yozuvini o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: O‘chiriladigan Reason_Lid ning ID raqami.
 *     responses:
 *       200:
 *         description: Reason_Lid muvaffaqiyatli o‘chirildi.
 *       404:
 *         description: Reason_Lid topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
reason_lid.delete("/delete/:id", deleteReason_Lid);

module.exports = { reason_lid };
