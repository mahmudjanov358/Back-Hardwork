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
 *     summary: Yangi Hodim Role (vazifa) yaratish
 *     tags: [Stuff_Role]
 *     description: Kiritilgan ma'lumotlar asosida yangi hodim rolini (lavozimni) yaratish.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role_name:
 *                 type: string
 *                 description: Role nomi (masalan: admin, o‘qituvchi, menejer).
 *               permissions:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Ushbu rolga tegishli ruxsatlar ro‘yxati.
 *     responses:
 *       201:
 *         description: Hodim roli muvaffaqiyatli yaratildi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
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
 *     summary: Barcha Hodim Rollarini olish
 *     tags: [Stuff_Role]
 *     description: Tizimdagi barcha hodim rollari ro‘yxatini olish.
 *     responses:
 *       200:
 *         description: Hodim rollari ro‘yxati muvaffaqiyatli qaytarildi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
stuff_role.get("/get", getStuff_Role);

/**
 * @swagger
 * /stuff_role/getById/{id}:
 *   get:
 *     summary: ID orqali Hodim Rolini olish
 *     tags: [Stuff_Role]
 *     description: Ko‘rsatilgan ID orqali ma'lum bir hodim rolini olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Olish kerak bo‘lgan hodim roliga tegishli ID raqami.
 *         schema:
 *           type: string
 *           description: Hodim rolining noyob identifikatori.
 *     responses:
 *       200:
 *         description: Hodim roli muvaffaqiyatli topildi.
 *       404:
 *         description: Hodim roli topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
stuff_role.get("/getById/:id", getStuff_RoleById);

/**
 * @swagger
 * /stuff_role/delete/{id}:
 *   delete:
 *     summary: ID orqali Hodim Rolini o‘chirish
 *     tags: [Stuff_Role]
 *     description: Ko‘rsatilgan ID orqali ma'lum bir hodim rolini tizimdan o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: O‘chiriladigan rolga tegishli ID raqami.
 *         schema:
 *           type: string
 *           description: Hodim rolining noyob identifikatori.
 *     responses:
 *       200:
 *         description: Hodim roli muvaffaqiyatli o‘chirildi.
 *       404:
 *         description: Hodim roli topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
stuff_role.delete("/delete/:id", deleteStuff_Role);

module.exports = { stuff_role };
