const { Router } = require("express");
const lesson = Router();

const {
  postLesson,
  getLesson,
  getLessonById,
  updateLesson,
  deleteLesson,
} = require("../controllers/lesson.controller");

const {
  postLessonValidationSchema,
  updateLessonValidationSchema,
} = require("../validations/lessonValidation");
const lessonValidation = (schema) => (req, res, next) => {
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
 * /lesson/post:
 *   post:
 *     summary: Yangi Lesson yaratish
 *     tags: [Lesson]
 *     description: Yangi Lesson ni berilgan ma'lumotlar bilan yaratish.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lesson_theme:
 *                 type: string
 *                 description: Lesson ning mavzusi.
 *               lesson_number:
 *                 type: number
 *                 description: Lesson ning raqami.
 *               group_id:
 *                 type: string
 *                 description: Lesson bilan bog‘liq Group ning ID si.
 *               lesson_date:
 *                 type: string
 *                 format: date
 *                 description: Lesson ning sanasi.
 *     responses:
 *       201:
 *         description: Lesson muvaffaqiyatli yaratildi.
 *       500:
 *         description: Ichki server xatosi.
 */
lesson.post("/post", lessonValidation(postLessonValidationSchema), postLesson);

/**
 * @swagger
 * /lesson/get:
 *   get:
 *     summary: Barcha Lesson larni olish
 *     tags: [Lesson]
 *     description: Barcha Lesson lar ro‘yxatini olish.
 *     responses:
 *       200:
 *         description: Lesson lar ro‘yxati.
 *       500:
 *         description: Ichki server xatosi.
 */
lesson.get("/get", getLesson);

/**
 * @swagger
 * /lesson/getById/{id}:
 *   get:
 *     summary: Lesson ni ID bo‘yicha olish
 *     tags: [Lesson]
 *     description: Lesson ni uning ID si bo‘yicha olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Olinadigan Lesson ning ID si.
 *     responses:
 *       200:
 *         description: Lesson muvaffaqiyatli olindi.
 *       404:
 *         description: Lesson topilmadi.
 *       500:
 *         description: Ichki server xatosi.
 */
lesson.get("/getById/:id", getLessonById);

/**
 * @swagger
 * /lesson/update/{id}:
 *   patch:
 *     summary: Lesson ni ID bo‘yicha yangilash
 *     tags: [Lesson]
 *     description: Lesson ni uning ID si bo‘yicha berilgan ma'lumotlar bilan yangilash.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Yangilanadigan Lesson ning ID si.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lesson_theme:
 *                 type: string
 *                 description: Lesson ning mavzusi.
 *               lesson_number:
 *                 type: number
 *                 description: Lesson ning raqami.
 *               group_id:
 *                 type: string
 *                 description: Lesson bilan bog‘liq Group ning ID si.
 *               lesson_date:
 *                 type: string
 *                 format: date
 *                 description: Lesson ning sanasi.
 *     responses:
 *       200:
 *         description: Lesson muvaffaqiyatli yangilandi.
 *       404:
 *         description: Lesson topilmadi.
 *       500:
 *         description: Ichki server xatosi.
 */
lesson.patch(
  "/update/:id",
  lessonValidation(updateLessonValidationSchema),
  updateLesson
);

/**
 * @swagger
 * /lesson/delete/{id}:
 *   delete:
 *     summary: Lesson ni ID bo‘yicha o‘chirish
 *     tags: [Lesson]
 *     description: Lesson ni uning ID si bo‘yicha o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: O‘chiriladigan Lesson ning ID si.
 *     responses:
 *       200:
 *         description: Lesson muvaffaqiyatli o‘chirildi.
 *       404:
 *         description: Lesson topilmadi.
 *       500:
 *         description: Ichki server xatosi.
 */
lesson.delete("/delete/:id", deleteLesson);

module.exports = { lesson };
