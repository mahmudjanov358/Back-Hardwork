const { Router } = require("express");
const lid = Router();

const {
  postLid,
  getLid,
  getLidById,
  updateLid,
  deleteLid,
} = require("../controllers/lid.controller");

const {
  postLidValidationSchema,
  updateLidValidationSchema,
} = require("../validations/lidValidation");

const lidValidation = (schema) => (req, res, next) => {
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
 * /lid/post:
 *   post:
 *     summary: Yangi Lid yozuvini yaratish
 *     tags: [Lid-11]
 *     description: Kiritilgan ma'lumotlar asosida yangi Lid yozuvini yaratish.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 description: Lid ning ismi.
 *               last_name:
 *                 type: string
 *                 description: Lid ning familiyasi.
 *               phone_number:
 *                 type: string
 *                 description: Lid ning telefon raqami.
 *               lid_stage_id:
 *                 type: string
 *                 description: Lid ning bosqich raqami.
 *               test_date:
 *                 type: string
 *                 format: date
 *                 description: Lid ning test sanasi.
 *               trial_lesson_date:
 *                 type: string
 *                 description: Lid ning sinov darsi sanasi.
 *               trial_lesson_time:
 *                 type: string
 *                 description: Lid ning sinov darsi vaqti.
 *               trial_lesson_group_id:
 *                 type: string
 *                 description: Lid ning sinov darsi guruh raqami.
 *               lid_status_id:
 *                 type: string
 *                 description: Lid ning holat raqami.
 *               cancel_reason_id:
 *                 type: string
 *                 description: Lid ning bekor qilish sababi raqami.
 *     responses:
 *       201:
 *         description: Lid muvaffaqiyatli yaratildi.
 *       400:
 *         description: Noto‘g‘ri yoki to‘liq bo‘lmagan ma'lumot yuborildi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
lid.post("/post", lidValidation(postLidValidationSchema), postLid);

/**
 * @swagger
 * /lid/get:
 *   get:
 *     summary: Barcha Lid yozuvlarini olish
 *     tags: [Lid-11]
 *     description: Tizimdagi barcha Lid yozuvlarini olish.
 *     responses:
 *       200:
 *         description: Lid ro‘yxati muvaffaqiyatli olindi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
lid.get("/get", getLid);

/**
 * @swagger
 * /lid/getById/{id}:
 *   get:
 *     summary: ID orqali Lid yozuvini olish
 *     tags: [Lid-11]
 *     description: Ko‘rsatilgan ID orqali Lid yozuvini olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Olish kerak bo‘lgan Lid ning ID raqami.
 *     responses:
 *       200:
 *         description: Lid yozuvi muvaffaqiyatli topildi.
 *       404:
 *         description: Lid topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
lid.get("/getById/:id", getLidById);

/**
 * @swagger
 * /lid/update/{id}:
 *   patch:
 *     summary: ID orqali Lid yozuvini yangilash
 *     tags: [Lid-11]
 *     description: Berilgan ID asosida Lid yozuvini yangilash.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Yangilanadigan Lid ning ID raqami.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 description: Lid ning ismi.
 *               last_name:
 *                 type: string
 *                 description: Lid ning familiyasi.
 *               phone_number:
 *                 type: string
 *                 description: Lid ning telefon raqami.
 *               test_date:
 *                 type: string
 *                 format: date
 *                 description: Lid ning test sanasi.
 *               trial_lesson_date:
 *                 type: string
 *                 description: Lid ning sinov darsi sanasi.
 *               trial_lesson_time:
 *                 type: string
 *                 description: Lid ning sinov darsi vaqti.
 *     responses:
 *       200:
 *         description: Lid muvaffaqiyatli yangilandi.
 *       400:
 *         description: Noto‘g‘ri yoki to‘liq bo‘lmagan ma'lumot yuborildi.
 *       404:
 *         description: Lid topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
lid.patch("/update/:id", lidValidation(updateLidValidationSchema), updateLid);

/**
 * @swagger
 * /lid/delete/{id}:
 *   delete:
 *     summary: ID orqali Lid yozuvini o‘chirish
 *     tags: [Lid-11]
 *     description: Ko‘rsatilgan ID orqali Lid yozuvini o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: O‘chiriladigan Lid ning ID raqami.
 *     responses:
 *       200:
 *         description: Lid muvaffaqiyatli o‘chirildi.
 *       404:
 *         description: Lid topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
lid.delete("/delete/:id", deleteLid);

module.exports = { lid };
