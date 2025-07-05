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
 *     summary: Yangi Lid yaratish
 *     tags: [Lid]
 *     description: Yangi Lid ni berilgan ma'lumotlar bilan yaratish.
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
 *                 description: Lid ning bosqich ID si.
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
 *                 description: Lid ning sinov darsi Group ID si.
 *               lid_status_id:
 *                 type: string
 *                 description: Lid ning holat ID si.
 *               cancel_reason_id:
 *                 type: string
 *                 description: Lid ning bekor qilish sababi ID si.
 *     responses:
 *       201:
 *         description: Lid muvaffaqiyatli yaratildi!
 *       500:
 *         description: Ichki server xatosi!
 */
lid.post("/post", lidValidation(postLidValidationSchema), postLid);

/**
 * @swagger
 * /lid/get:
 *   get:
 *     summary: Barcha Lid larni olish
 *     tags: [Lid]
 *     description: Barcha Lid lar ro‘yxatini olish.
 *     responses:
 *       200:
 *         description: Lid lar muvaffaqiyatli olindi.
 *       500:
 *         description: Ichki server xatosi!
 */
lid.get("/get", getLid);

/**
 * @swagger
 * /lid/getById/{id}:
 *   get:
 *     summary: Lid ni ID bo‘yicha olish
 *     tags: [Lid]
 *     края: Lid ni uning ID si bo‘yicha olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Olinadigan Lid ning ID si.
 *     responses:
 *       200:
 *         description: Lid ma'lumotlari topildi!
 *       404:
 *         description: Lid topilmadi!
 *       500:
 *         description: Ichki server xatosi!
 */
lid.get("/getById/:id", getLidById);

/**
 * @swagger
 * /lid/update/{id}:
 *   patch:
 *     summary: Lid ni ID bo‘yicha yangilash
 *     tags: [Lid]
 *     description: Lid ni uning ID si bo‘yicha berilgan ma'lumotlar bilan yangilash.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Yangilanadigan Lid ning ID si.
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
 *         description: Lid muvaffaqiyatli yangilandi!
 *       404:
 *         description: Lid topilmadi!
 *       500:
 *         description: Ichki server xatosi!
 */
lid.patch("/update/:id", lidValidation(updateLidValidationSchema), updateLid);

/**
 * @swagger
 * /lid/delete/{id}:
 *   delete:
 *     summary: Lid ni ID bo‘yicha o‘chirish
 *     tags: [Lid]
 *     description: Lid ni uning ID si bo‘yicha o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: O‘chiriladigan Lid ning ID si.
 *     responses:
 *       200:
 *         description: Lid muvaffaqiyatli o‘chirildi!
 *       404:
 *         description: Lid topilmadi!
 *       500:
 *         description: Ichki server xatosi!
 */
lid.delete("/delete/:id", deleteLid);

module.exports = { lid };
