const { Router } = require("express");
const stage = Router();

const {
  postStage,
  getStage,
  getStageById,
  updateStage,
  deleteStage,
} = require("../controllers/stage.controller");

const {
  postStageValidationSchema,
  updateStageValidationSchema,
} = require("../validations/stageValidation");

const stageValidation = (schema) => (req, res, next) => {
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
 * /stage/post:
 *   post:
 *     summary: Yangi Stage yozuvini yaratish
 *     tags: [Stage]
 *     description: Kiritilgan ma'lumotlar asosida yangi Stage yozuvini yaratish.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Stage ning nomi.
 *     responses:
 *       201:
 *         description: Stage muvaffaqiyatli yaratildi.
 *       400:
 *         description: Noto‘g‘ri yoki to‘liq bo‘lmagan ma'lumot yuborildi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
stage.post("/post", stageValidation(postStageValidationSchema), postStage);

/**
 * @swagger
 * /stage/get:
 *   get:
 *     summary: Barcha Stage yozuvlarini olish
 *     tags: [Stage]
 *     description: Tizimdagi barcha Stage yozuvlarini olish.
 *     responses:
 *       200:
 *         description: Stage ro'yxati muvaffaqiyatli olindi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
stage.get("/get", getStage);

/**
 * @swagger
 * /stage/getById/{id}:
 *   get:
 *     summary: ID orqali Stage yozuvini olish
 *     tags: [Stage]
 *     description: Ko‘rsatilgan ID orqali Stage yozuvini olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Olish kerak bo‘lgan Stage ning ID raqami.
 *     responses:
 *       200:
 *         description: Stage yozuvi muvaffaqiyatli topildi.
 *       404:
 *         description: Stage topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
stage.get("/getById/:id", getStageById);

/**
 * @swagger
 * /stage/update/{id}:
 *   patch:
 *     summary: ID orqali Stage yozuvini yangilash
 *     tags: [Stage]
 *     description: Berilgan ID asosida Stage yozuvini yangilash.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Yangilanadigan Stage ning ID raqami.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Stage ning yangi nomi.
 *     responses:
 *       200:
 *         description: Stage muvaffaqiyatli yangilandi.
 *       404:
 *         description: Stage topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
stage.patch(
  "/update/:id",
  stageValidation(updateStageValidationSchema),
  updateStage
);

/**
 * @swagger
 * /stage/delete/{id}:
 *   delete:
 *     summary: ID orqali Stage yozuvini o‘chirish
 *     tags: [Stage]
 *     description: Ko‘rsatilgan ID orqali Stage yozuvini o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: O‘chiriladigan Stage ning ID raqami.
 *     responses:
 *       200:
 *         description: Stage muvaffaqiyatli o‘chirildi.
 *       404:
 *         description: Stage topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
stage.delete("/delete/:id", deleteStage);

module.exports = { stage };
