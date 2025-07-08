const { Router } = require("express");
const group_stuff = Router();

const {
  postGroup_Stuff,
  getGroup_Stuff,
  getGroup_StuffById,
  deleteGroup_Stuff,
} = require("../controllers/group_stuff.controller");

const {
  postGroupStuffValidationSchema,
} = require("../validations/group_stuffValidation");
const groupStuffValidation = (schema) => (req, res, next) => {
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
 * /group_stuff/post:
 *   post:
 *     summary: Yangi Group_Stuff yaratish
 *     tags: [Group_Stuff-7]
 *     description: Yangi Group_Stuff ni berilgan ma'lumotlar bilan yaratish.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               group_id:
 *                 type: string
 *                 description: Guruhning ID si.
 *               stuff_id:
 *                 type: string
 *                 description: Xodimning ID si.
 *     responses:
 *       201:
 *         description: Group_Stuff muvaffaqiyatli yaratildi.
 *       400:
 *         description: Noto‘g‘ri so‘rov tanasi.
 *       500:
 *         description: Ichki server xatosi.
 */
group_stuff.post(
  "/post",
  groupStuffValidation(postGroupStuffValidationSchema),
  postGroup_Stuff
);

/**
 * @swagger
 * /group_stuff/get:
 *   get:
 *     summary: Barcha Group_Stuff larni olish
 *     tags: [Group_Stuff-7]
 *     description: Barcha Group_Stuff lar ro‘yxatini olish.
 *     responses:
 *       200:
 *         description: Group_Stuff lar ro‘yxati.
 *       500:
 *         description: Ichki server xatosi.
 */
group_stuff.get("/get", getGroup_Stuff);

/**
 * @swagger
 * /group_stuff/getById/{id}:
 *   get:
 *     summary: Group_Stuff ni ID bo‘yicha olish
 *     tags: [Group_Stuff-7]
 *     description: Group_Stuff ni uning ID si bo‘yicha olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Olinadigan Group_Stuff ning ID si.
 *     responses:
 *       200:
 *         description: Group_Stuff muvaffaqiyatli olindi.
 *       404:
 *         description: Group_Stuff topilmadi.
 *       500:
 *         description: Ichki server xatosi.
 */
group_stuff.get("/getById/:id", getGroup_StuffById);

/**
 * @swagger
 * /group_stuff/delete/{id}:
 *   delete:
 *     summary: Group_Stuff ni ID bo‘yicha o‘chirish
 *     tags: [Group_Stuff-7]
 *     description: Group_Stuff ni uning ID si bo‘yicha o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: O‘chiriladigan Group_Stuff ning ID si.
 *     responses:
 *       200:
 *         description: Group_Stuff muvaffaqiyatli o‘chirildi.
 *       404:
 *         description: Group_Stuff topilmadi.
 *       500:
 *         description: Ichki server xatosi.
 */
group_stuff.delete("/delete/:id", deleteGroup_Stuff);

module.exports = { group_stuff };
