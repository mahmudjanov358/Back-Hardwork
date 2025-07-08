const { Router } = require("express");
const lid_status = Router();

const {
  postLid_Status,
  getLid_Status,
  getLid_StatusById,
  updateLid_Status,
  deleteLid_Status,
} = require("../controllers/lid_status.controller");

const {
  postLidStatusValidationSchema,
  updateLidStatusValidationSchema,
} = require("../validations/lid_statusValidation");

const lidStatusValidation = (schema) => (req, res, next) => {
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
 * /lid_status/post:
 *   post:
 *     summary: Yangi Lid_Status yozuvini yaratish
 *     tags: [Lid_Status-9]
 *     description: Kiritilgan ma'lumotlar asosida yangi Lid_Status yozuvini yaratish.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: Lid_Status ning nomi.
 *     responses:
 *       201:
 *         description: Lid_Status muvaffaqiyatli yaratildi.
 *       400:
 *         description: Noto‘g‘ri yoki to‘liq bo‘lmagan ma'lumot yuborildi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
lid_status.post(
  "/post",
  lidStatusValidation(postLidStatusValidationSchema),
  postLid_Status
);

/**
 * @swagger
 * /lid_status/get:
 *   get:
 *     summary: Barcha Lid_Status yozuvlarini olish
 *     tags: [Lid_Status-9]
 *     description: Tizimdagi barcha Lid_Status yozuvlarini olish.
 *     responses:
 *       200:
 *         description: Lid_Status ro‘yxati muvaffaqiyatli olindi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
lid_status.get("/get", getLid_Status);

/**
 * @swagger
 * /lid_status/getById/{id}:
 *   get:
 *     summary: ID orqali Lid_Status yozuvini olish
 *     tags: [Lid_Status-9]
 *     description: Ko‘rsatilgan ID orqali Lid_Status yozuvini olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Olish kerak bo‘lgan Lid_Status ning ID raqami.
 *     responses:
 *       200:
 *         description: Lid_Status yozuvi muvaffaqiyatli topildi.
 *       404:
 *         description: Lid_Status topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
lid_status.get("/getById/:id", getLid_StatusById);

/**
 * @swagger
 * /lid_status/update/{id}:
 *   patch:
 *     summary: ID orqali Lid_Status yozuvini yangilash
 *     tags: [Lid_Status-9]
 *     description: Berilgan ID asosida Lid_Status yozuvini yangilash.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Yangilanadigan Lid_Status ning ID raqami.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: Lid_Status ning yangilangan nomi.
 *     responses:
 *       200:
 *         description: Lid_Status muvaffaqiyatli yangilandi.
 *       400:
 *         description: Noto‘g‘ri yoki to‘liq bo‘lmagan ma'lumot yuborildi.
 *       404:
 *         description: Lid_Status topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
lid_status.patch(
  "/update/:id",
  lidStatusValidation(updateLidStatusValidationSchema),
  updateLid_Status
);

/**
 * @swagger
 * /lid_status/delete/{id}:
 *   delete:
 *     summary: ID orqali Lid_Status yozuvini o‘chirish
 *     tags: [Lid_Status-9]
 *     description: Ko‘rsatilgan ID orqali Lid_Status yozuvini o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: O‘chiriladigan Lid_Status ning ID raqami.
 *     responses:
 *       200:
 *         description: Lid_Status muvaffaqiyatli o‘chirildi.
 *       404:
 *         description: Lid_Status topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
lid_status.delete("/delete/:id", deleteLid_Status);

module.exports = { lid_status };
