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
 *     summary: Yangi Stuff Role (vazifa) yaratish
 *     tags: [Stuff_Role]
 *     description: Kiritilgan ma'lumotlar asosida yangi Stuff Role ni yaratish.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               stuff_id:
 *                 type: string
 *                 description: Stuff ning ID si.
 *               role_id:
 *                 type: string
 *                 description: Role ning ID si.
 *     responses:
 *       201:
 *         description: Stuff Role muvaffaqiyatli yaratildi.
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
 *     summary: Barcha Stuff Role larni olish
 *     tags: [Stuff_Role]
 *     description: Tizimdagi barcha Stuff Role lar ro‘yxatini olish.
 *     responses:
 *       200:
 *         description: Stuff Role lar ro‘yxati muvaffaqiyatli qaytarildi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
stuff_role.get("/get", getStuff_Role);

/**
 * @swagger
 * /stuff_role/getById/{id}:
 *   get:
 *     summary: ID orqali Stuff Role ni olish
 *     tags: [Stuff_Role]
 *     description: Ko‘rsatilgan ID orqali ma'lum bir Stuff Role ni olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Olish kerak bo‘lgan Stuff Role ga tegishli ID raqami.
 *     responses:
 *       200:
 *         description: Stuff Role muvaffaqiyatli topildi.
 *       404:
 *         description: Stuff Role topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
stuff_role.get("/getById/:id", getStuff_RoleById);

/**
 * @swagger
 * /stuff_role/delete/{id}:
 *   delete:
 *     summary: ID orqali Stuff Role ni o‘chirish
 *     tags: [Stuff_Role]
 *     description: Ko‘rsatilgan ID orqali ma'lum bir Stuff Role ni tizimdan o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: O‘chiriladigan Stuff Role ga tegishli ID raqami.
 *     responses:
 *       200:
 *         description: Stuff Role muvaffaqiyatli o‘chirildi.
 *       404:
 *         description: Stuff Role topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
stuff_role.delete("/delete/:id", deleteStuff_Role);

module.exports = { stuff_role };
