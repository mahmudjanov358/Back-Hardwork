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
 *     summary: Yangi Group yozuvini yaratish
 *     tags: [Group-6]
 *     description: Kiritilgan ma'lumotlar asosida yangi Group yozuvini yaratish.
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
 *                 description: Group ning bosqich raqami.
 *               room_number:
 *                 type: number
 *                 description: Group ning xona raqami.
 *               room_floor:
 *                 type: number
 *                 description: Group xonasining qavati.
 *               branch_id:
 *                 type: string
 *                 description: Group ning filial raqami.
 *               lessons_quant:
 *                 type: number
 *                 description: Group uchun darslar soni.
 *               is_active:
 *                 type: boolean
 *                 description: Group ning faol yoki faol emasligini ko‘rsatadi.
 *     responses:
 *       201:
 *         description: Group muvaffaqiyatli yaratildi.
 *       400:
 *         description: Noto‘g‘ri yoki to‘liq bo‘lmagan ma'lumot yuborildi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
group.post("/post", groupValidation(postGroupValidationSchema), postGroup);

/**
 * @swagger
 * /group/get:
 *   get:
 *     summary: Barcha Group yozuvlarini olish
 *     tags: [Group-6]
 *     description: Tizimdagi barcha Group yozuvlarini olish.
 *     responses:
 *       200:
 *         description: Group ro‘yxati muvaffaqiyatli olindi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
group.get("/get", getGroup);

/**
 * @swagger
 * /group/getById/{id}:
 *   get:
 *     summary: ID orqali Group yozuvini olish
 *     tags: [Group-6]
 *     description: Ko‘rsatilgan ID orqali Group yozuvini olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Olish kerak bo‘lgan Group ning ID raqami.
 *     responses:
 *       200:
 *         description: Group yozuvi muvaffaqiyatli topildi.
 *       404:
 *         description: Group topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
group.get("/getById/:id", getGroupById);

/**
 * @swagger
 * /group/update/{id}:
 *   patch:
 *     summary: ID orqali Group yozuvini yangilash
 *     tags: [Group-6]
 *     description: Berilgan ID asosida Group yozuvini yangilash.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Yangilanadigan Group ning ID raqami.
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
 *                 type: number
 *                 description: Group uchun darslar soni.
 *               is_active:
 *                 type: boolean
 *                 description: Group ning faol yoki faol emasligini ko‘rsatadi.
 *     responses:
 *       200:
 *         description: Group muvaffaqiyatli yangilandi.
 *       400:
 *         description: Noto‘g‘ri yoki to‘liq bo‘lmagan ma'lumot yuborildi.
 *       404:
 *         description: Group topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
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
 *     summary: ID orqali Group yozuvini o‘chirish
 *     tags: [Group-6]
 *     description: Ko‘rsatilgan ID orqali Group yozuvini o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: O‘chiriladigan Group ning ID raqami.
 *     responses:
 *       200:
 *         description: Group muvaffaqiyatli o‘chirildi.
 *       404:
 *         description: Group topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
group.delete("/delete/:id", deleteGroup);

module.exports = { group };
