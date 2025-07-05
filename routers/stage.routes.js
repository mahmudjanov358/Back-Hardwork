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
 *     summary: Yangi Stage yaratish
 *     tags: [Stage]
 *     description: Berilgan ma'lumotlar asosida yangi stage (bosqich) yaratish.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Stage nomi (bosqich nomi).
 *     responses:
 *       201:
 *         description: Stage muvaffaqiyatli yaratildi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
stage.post("/post", stageValidation(postStageValidationSchema), postStage);

/**
 * @swagger
 * /stage/get:
 *   get:
 *     summary: Barcha Stage larni olish
 *     tags: [Stage]
 *     description: Tizimdagi barcha stage (bosqich) lar ro'yxatini olish.
 *     responses:
 *       200:
 *         description: Stage lar ro'yxati muvaffaqiyatli olindi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
stage.get("/get", getStage);

/**
 * @swagger
 * /stage/getById/{id}:
 *   get:
 *     summary: Stage ni ID orqali olish
 *     tags: [Stage]
 *     description: Ko‘rsatilgan ID orqali stage (bosqich) ma'lumotlarini olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Olish kerak bo‘lgan stage'ning ID raqami.
 *         schema:
 *           type: string
 *           description: Stage'ning noyob ID qiymati (masalan, MongoDB ObjectId).
 *     responses:
 *       200:
 *         description: So‘ralgan stage ma'lumotlari qaytarildi.
 *       404:
 *         description: Stage topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
stage.get("/getById/:id", getStageById);

/**
 * @swagger
 * /stage/update/{id}:
 *   put:
 *     summary: Stage ni ID orqali yangilash
 *     tags: [Stage]
 *     description: Berilgan ID asosida stage (bosqich) ma'lumotlarini yangilash.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Yangilanadigan stage'ning ID raqami.
 *         schema:
 *           type: string
 *           description: Yangilanadigan stage'ning noyob identifikatori.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Stage'ning yangi nomi.
 *     responses:
 *       200:
 *         description: Stage muvaffaqiyatli yangilandi.
 *       404:
 *         description: Stage topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
stage.put(
  "/update/:id",
  stageValidation(updateStageValidationSchema),
  updateStage
);

/**
 * @swagger
 * /stage/delete/{id}:
 *   delete:
 *     summary: Stage ni ID orqali o‘chirish
 *     tags: [Stage]
 *     description: Ko‘rsatilgan ID orqali stage'ni tizimdan o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: O‘chiriladigan stage'ning ID raqami.
 *         schema:
 *           type: string
 *           description: O‘chirilayotgan stage'ning noyob identifikatori.
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
