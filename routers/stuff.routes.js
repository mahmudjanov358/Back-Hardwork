const { Router } = require("express");
const stuff_role = Router();

const {
  postStuff_Role,
  getStuff_Role,
  getStuff_RoleById,
  deleteStuff_Role,
} = require("../controllers/stuff_role.controller");

const {
  postStuff_RoleValidationSchema,
} = require("../validations/stuff_roleValidation");

const stuffRoleValidation = (schema) => (req, res, next) => {
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
 * /stuff_role/post:
 *   post:
 *     summary: Yangi Stuff Role yaratish
 *     tags: [Stuff_Role]
 *     description: Kiritilgan ma'lumotlar asosida yangi Stuff Role (hodim roli) yaratish.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role_name:
 *                 type: string
 *                 description: Stuff Role nomi (masalan: Admin, Menejer, O‘qituvchi).
 *               permissions:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: Ushbu Stuff Role uchun tanlangan permission ID lar ro‘yxati.
 *     responses:
 *       201:
 *         description: Stuff Role muvaffaqiyatli yaratildi.
 *       400:
 *         description: So‘rov noto‘g‘ri yoki to‘liq emas.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
stuff_role.post(
  "/post",
  stuffRoleValidation(postStuff_RoleValidationSchema),
  postStuff_Role
);

/**
 * @swagger
 * /stuff_role/get:
 *   get:
 *     summary: Barcha Stuff Role yozuvlarini olish
 *     tags: [Stuff_Role]
 *     description: Tizimdagi barcha Stuff Role yozuvlarini olish (Admin, Operator va h.k.).
 *     responses:
 *       200:
 *         description: Stuff Role ro‘yxati muvaffaqiyatli olindi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
stuff_role.get("/get", getStuff_Role);

/**
 * @swagger
 * /stuff_role/getById/{id}:
 *   get:
 *     summary: Stuff Role ni ID orqali olish
 *     tags: [Stuff_Role]
 *     description: Ko‘rsatilgan ID orqali Stuff Role yozuvini olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Olish kerak bo‘lgan Stuff Role ID raqami.
 *         schema:
 *           type: string
 *           description: Stuff Role'ning noyob identifikatori.
 *     responses:
 *       200:
 *         description: Stuff Role ma'lumotlari muvaffaqiyatli olindi.
 *       404:
 *         description: Stuff Role topilmadi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
stuff_role.get("/getById/:id", getStuff_RoleById);

/**
 * @swagger
 * /stuff_role/delete/{id}:
 *   delete:
 *     summary: Stuff Role ni ID orqali o‘chirish
 *     tags: [Stuff_Role]
 *     description: Ko‘rsatilgan ID orqali Stuff Role yozuvini tizimdan o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: O‘chirilishi kerak bo‘lgan Stuff Role ID raqami.
 *         schema:
 *           type: string
 *           description: Stuff Role'ning noyob identifikatori.
 *     responses:
 *       200:
 *         description: Stuff Role muvaffaqiyatli o‘chirildi.
 *       404:
 *         description: Stuff Role topilmadi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
stuff_role.delete("/delete/:id", deleteStuff_Role);

module.exports = { stuff_role };
