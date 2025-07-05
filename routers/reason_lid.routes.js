const { Router } = require("express");
const reason_lid = Router();

const {
  postReason_Lid,
  getReason_Lid,
  getReason_LidById,
  updateReason_Lid,
  deleteReason_Lid,
} = require("../controllers/reason_lid.controller");

const {
  postReasonLidValidationSchema,
  updateReasonLidValidationSchema,
} = require("../validations/reason_lidValidation");
const reasonLidValidation = (schema) => (req, res, next) => {
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
 * /reason_lid/post:
 *   post:
 *     summary: Yangi Reason_Lid yaratish
 *     tags: [Reason_Lid]
 *     description: Yangi Reason_Lid ni berilgan ma'lumotlar bilan yaratish.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reason:
 *                 type: string
 *                 description: Reason_Lid ning nomi.
 *     responses:
 *       201:
 *         description: Reason_Lid muvaffaqiyatli yaratildi.
 *       500:
 *         description: Ichki server xatosi.
 */
reason_lid.post(
  "/post",
  reasonLidValidation(postReasonLidValidationSchema),
  postReason_Lid
);

/**
 * @swagger
 * /reason_lid/get:
 *   get:
 *     summary: Barcha Reason_Lid larni olish
 *     tags: [Reason_Lid]
 *     description: Barcha Reason_Lid lar ro‘yxatini olish.
 *     responses:
 *       200:
 *         description: Reason_Lid lar ro‘yxati muvaffaqiyatli olindi.
 *       500:
 *         description: Ichki server xatosi.
 */
reason_lid.get("/get", getReason_Lid);

/**
 * @swagger
 * /reason_lid/getById/{id}:
 *   get:
 *     summary: Reason_Lid ni ID bo‘yicha olish
 *     tags: [Reason_Lid]
 *     description: Reason_Lid ni uning ID si bo‘yicha olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Olinadigan Reason_Lid ning ID si.
 *     responses:
 *       '200':
 *         description: Reason_Lid muvaffaqiyatli olindi.
 *       '404':
 *         description: Reason_Lid topilmadi.
 *       '500':
 *         description: Ichki server xatosi.
 */
reason_lid.get("/getById/:id", getReason_LidById);

/**
 * @swagger
 * /reason_lid/update/{id}:
 *   put:
 *     summary: Reason_Lid ni ID bo‘yicha yangilash
 *     tags: [Reason_Lid]
 *     description: Reason_Lid ni uning ID si bo‘yicha berilgan ma'lumotlar bilan yangilash.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Yang “…ilanadigan Reason_Lid ning ID si.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reason:
 *                 type: string
 *                 description: Reason_Lid ning yangilangan nomi.
 *     responses:
 *       '200':
 *         description: Reason_Lid muvaffaqiyatli yangilandi.
 *       '404':
 *         description: Reason_Lid topilmadi.
 *       '500':
 *         description: Ichki server xatosi!
 */
reason_lid.put(
  "/update/:id",
  reasonLidValidation(updateReasonLidValidationSchema),
  updateReason_Lid
);

/**
 * @swagger
 * /reason_lid/delete/{id}:
 *   delete:
 *     summary: Reason_Lid ni ID bo‘yicha o‘chirish
 *     tags: [Reason_Lid]
 *     description: Reason_Lid ni uning ID si bo‘yicha o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: O‘chiriladigan Reason_Lid ning ID si.
 *     responses:
 *       200:
 *         description: Reason_Lid muvaffaqiyatli o‘chirildi.
 *       404:
 *         description: Reason_Lid topilmadi.
 *       500:
 *         description: Ichki server xatosi.
 */
reason_lid.delete("/delete/:id", deleteReason_Lid);

module.exports = { reason_lid };
