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
 *     summary: Yangi Lid_Status yaratish
 *     tags: [Lid_Status]
 *     description: Yangi Lid_Status ni berilgan ma'lumotlar bilan yaratish.
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
 *       500:
 *         description: Ichki server xatosi.
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
 *     summary: Barcha Lid_Status larni olish
 *     tags: [Lid_Status]
 *     description: Barcha Lid_Status lar ro‘yxatini olish.
 *     responses:
 *       200:
 *         description: Lid_Status lar ro‘yxati muvaffaqiyatli olindi.
 *       500:
 *         description: Ichki server xatosi.
 */
lid_status.get("/get", getLid_Status);

/**
 * @swagger
 * /lid_status/getById/{id}:
 *   get:
 *     summary: Lid_Status ni ID bo‘yicha olish
 *     tags: [Lid_Status]
 *     description: Lid_Status ni uning ID si bo‘yicha olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Olinadigan Lid_Status ning ID si.
 *     responses:
 *       200:
 *         description: Lid_Status muvaffaqiyatli olindi.
 *       404:
 *         description: Lid_Status topilmadi.
 *       500:
 *         description: Ichki server xatosi.
 */
lid_status.get("/getById/:id", getLid_StatusById);

/**
 * @swagger
 * /lid_status/update/{id}:
 *   put:
 *     summary: Lid_Status ni ID bo‘yicha yangilash
 *     tags: [Lid_Status]
 *     description: Lid_Status ni uning ID si bo‘yicha yangilash.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Yangilanadigan Lid_Status ning ID si.
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
 *       404:
 *         description: Lid_Status topilmadi.
 *       500:
 *         description: Ichki server xatosi.
 */
lid_status.put(
  "/update/:id",
  lidStatusValidation(updateLidStatusValidationSchema),
  updateLid_Status
);

/**
 * @swagger
 * /lid_status/delete/{id}:
 *   delete:
 *     summary: Lid_Status ni ID bo‘yicha o‘chirish
 *     tags: [Lid_Status]
 *     description: Lid_Status ni uning ID si bo‘yicha o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: O‘chiriladigan Lid_Status ning ID si.
 *     responses:
 *       200:
 *         description: Lid_Status muvaffaqiyatli o‘chirildi.
 *       404:
 *         description: Lid_Status topilmadi.
 *       500:
 *         description: Ichki server xatosi.
 */
lid_status.delete("/delete/:id", deleteLid_Status);

module.exports = { lid_status };
