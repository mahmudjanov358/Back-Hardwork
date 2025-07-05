const { Router } = require("express");
const group = Router();

const {
  postGroup,
  getGroup,
  getGroupById,
  updateGroup,
  deleteGroup,
} = require("../controllers/group.controller");

const {
  postGroupValidationSchema,
  updateGroupValidationSchema,
} = require("../validations/groupValidation");
const groupValidation = (schema) => (req, res, next) => {
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
 * /group/post:
 *   post:
 *     summary: Yangi Group yaratish
 *     tags: [Group]
 *     description: Yangi Group ni berilgan ma'lumotlar bilan yaratish.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               group_name:
 *                 type: string
 *                 description: Group ning nomi.
 *               lesson_start_time:
 *                 type: string
 *                 description: Darsning boshlanish vaqti.
 *               lesson_continuous:
 *                 type: string
 *                 description: Darsning davomiy vaqti.
 *               lesson_week_day:
 *                 type: string
 *                 description: Darsning haftadagi kuni.
 *               group_stage_id:
 *                 type: string
 *                 description: Group ning bosqich ID si.
 *               room_number:
 *                 type: string
 *                 description: Group ning xona raqami.
 *               room_floor:
 *                 type: string
 *                 description: Group xonasining qavati.
 *               branch_id:
 *                 type: string
 *                 description: Group ning Branch ID si.
 *               lessons_quant:
 *                 type: string
 *                 description: Group uchun darslar soni.
 *               is_active:
 *                 type: boolean
 *                 description: Group ning faol yoki faol emasligini ko‘rsatadi.
 *     responses:
 *       201:
 *         description: Group muvaffaqiyatli yaratildi.
 *       500:
 *         description: Ichki server xatosi.
 */
group.post("/post", groupValidation(postGroupValidationSchema), postGroup);

/**
 * @swagger
 * /group/get:
 *   get:
 *     summary: Barcha Group larni olish
 *     tags: [Group]
 *     description: Barcha Group lar ro‘yxatini olish.
 *     responses:
 *       200:
 *         description: Group lar ro‘yxati.
 *       500:
 *         description: Ichki server xatosi.
 */
group.get("/get", getGroup);

/**
 * @swagger
 * /group/getById/{id}:
 *   get:
 *     summary: Group ni ID bo‘yicha olish
 *     tags: [Group]
 *     description: Group ni uning ID si bo‘yicha olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Olinadigan Group ning ID si.
 *     responses:
 *       200:
 *         description: Group ma'lumotlari.
 *       404:
 *         description: Group topilmadi.
 *       500:
 *         description: Ichki server xatosi.
 */
group.get("/getById/:id", getGroupById);

/**
 * @swagger
 * /group/update/{id}:
 *   patch:
 *     summary: Group ni ID bo‘yicha yangilash
 *     tags: [Group]
 *     description: Group ni uning ID si bo‘yicha yangilash.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Yangilanadigan Group ning ID si.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               group_name:
 *                 type: string
 *                 description: Group ning nomi.
 *               lesson_start_time:
 *                 type: string
 *                 description: Darsning boshlanish vaqti.
 *               lesson_continuous:
 *                 type: string
 *                 description: Darsning davomiy vaqti.
 *               lesson_week_day:
 *                 type: string
 *                 description: Darsning haftadagi kuni.
 *               room_number:
 *                 type: number
 *                 description: Group ning xona raqami.
 *               room_floor:
 *                 type: number
 *                 description: Group xonasining qavati.
 *               lessons_quant:
 *                 type: string
 *                 description: Group uchun darslar soni.
 *               is_active:
 *                 type: boolean
 *                 description: Group ning faol yoki faol emasligini ko‘rsatadi.
 *     responses:
 *       200:
 *         description: Group muvaffaqiyatli yangilandi.
 *       404:
 *         description: Group topilmadi.
 *       500:
 *         description: Ichki server xatosi.
 */
group.patch(
  "/update/:id",
  groupValidation(updateGroupValidationSchema),
  updateGroup
);

/**
 * @swagger
 * /group/delete/{id}:
 *   delete:
 *     summary: Group ni ID bo‘yicha o‘chirish
 *     tags: [Group]
 *     description: Group ni uning ID si bo‘yicha o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: O‘chiriladigan Group ning ID si.
 *     responses:
 *       200:
 *         description: Group muvaffaqiyatli o‘chirildi.
 *       404:
 *         description: Group topilmadi.
 *       500:
 *         description: Ichki server xatosi.
 */
group.delete("/delete/:id", deleteGroup);

module.exports = { group };
