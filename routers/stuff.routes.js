const { Router } = require("express");
const stuff = Router();

const {
  postStuff,
  loginStuff,
  getStuff,
  getStuffById,
  updateStuff,
  deleteStuff,
} = require("../controllers/stuff.controller");

const {
  postStuffValidationSchema,
  updateStuffValidationSchema,
} = require("../validations/stuffValidation.js");

const stuffValidation = (schema) => (req, res, next) => {
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
 * /stuff/post:
 *   post:
 *     summary: Yangi Stuff yaratish
 *     tags: [Stuff]
 *     description: Kiritilgan ma'lumotlar asosida yangi Stuff yaratish.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 description: Stuff ismi.
 *               last_name:
 *                 type: string
 *                 description: Stuff familiyasi.
 *               phone_number:
 *                 type: string
 *                 description: Stuff telefon raqami.
 *               login:
 *                 type: string
 *                 description: Stuff login nomi.
 *               parol:
 *                 type: string
 *                 description: Stuff paroli.
 *               is_active:
 *                 type: boolean
 *                 description: Stuff faollik holati (true yoki false).
 *     responses:
 *       201:
 *         description: Stuff muvaffaqiyatli yaratildi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
stuff.post("/post", stuffValidation(postStuffValidationSchema), postStuff);

/**
 * @swagger
 * /stuff/login:
 *   post:
 *     summary: Stuff login qilish
 *     tags: [Stuff]
 *     description: Stuff login va parol orqali tizimga kirish.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login:
 *                 type: string
 *                 description: Stuff login nomi.
 *               parol:
 *                 type: string
 *                 description: Stuff paroli.
 *     responses:
 *       200:
 *         description: Stuff tizimga muvaffaqiyatli kirdi.
 *       404:
 *         description: Stuff topilmadi.
 *       401:
 *         description: Login yoki parol noto‘g‘ri.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
stuff.post("/login", loginStuff);

/**
 * @swagger
 * /stuff/get:
 *   get:
 *     summary: Barcha Stuff larni olish
 *     tags: [Stuff]
 *     description: Tizimdagi barcha Stuff yozuvlarini olish.
 *     responses:
 *       200:
 *         description: Stuff ro'yxati muvaffaqiyatli qaytarildi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
stuff.get("/get", getStuff);

/**
 * @swagger
 * /stuff/getById/{id}:
 *   get:
 *     summary: ID orqali Stuff ni olish
 *     tags: [Stuff]
 *     description: Ko‘rsatilgan ID orqali Stuff yozuvini olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Olish kerak bo‘lgan Stuff ID raqami.
 *     responses:
 *       200:
 *         description: Stuff ma'lumotlari muvaffaqiyatli olindi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
stuff.get("/getById/:id", getStuffById);

/**
 * @swagger
 * /stuff/update/{id}:
 *   patch:
 *     summary: Stuff ni ID orqali yangilash
 *     tags: [Stuff]
 *     description: Berilgan ID asosida Stuff yozuvini yangilash.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Yangilanadigan Stuff ID raqami.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 description: Stuff ning yangilangan ismi.
 *               last_name:
 *                 type: string
 *                 description: Stuff ning yangilangan familiyasi.
 *               phone_number:
 *                 type: string
 *                 description: Stuff ning yangilangan telefon raqami.
 *               login:
 *                 type: string
 *                 description: Stuff ning yangilangan login nomi.
 *               parol:
 *                 type: string
 *                 description: Stuff ning yangi paroli.
 *               is_active:
 *                 type: boolean
 *                 description: Stuff ning faollik holati.
 *     responses:
 *       200:
 *         description: Stuff ma'lumotlari muvaffaqiyatli yangilandi.
 *       404:
 *         description: Stuff topilmadi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
stuff.patch(
  "/update/:id",
  stuffValidation(updateStuffValidationSchema),
  updateStuff
);

/**
 * @swagger
 * /stuff/delete/{id}:
 *   delete:
 *     summary: ID orqali Stuff ni o‘chirish
 *     tags: [Stuff]
 *     description: Ko‘rsatilgan ID orqali Stuff yozuvini o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: O‘chiriladigan Stuff ID raqami.
 *     responses:
 *       200:
 *         description: Stuff muvaffaqiyatli o‘chirildi.
 *       404:
 *         description: Stuff topilmadi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
stuff.delete("/delete/:id", deleteStuff);

module.exports = { stuff };
