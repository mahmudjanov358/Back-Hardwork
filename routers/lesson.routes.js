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
 *     summary: Yangi Lesson yozuvini yaratish
 *     tags: [Lesson]
 *     description: Kiritilgan ma'lumotlar asosida yangi Lesson yozuvini yaratish.
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
 *                 description: Lesson bilan bog‘liq guruh raqami.
 *               lesson_date:
 *                 type: string
 *                 format: date
 *                 description: Lesson ning sanasi.
 *     responses:
 *       201:
 *         description: Lesson muvaffaqiyatli yaratildi.
 *       400:
 *         description: Noto‘g‘ri yoki to‘liq bo‘lmagan ma'lumot yuborildi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
lesson.post("/post", lessonValidation(postLessonValidationSchema), postLesson);

/**
 * @swagger
 * /lesson/get:
 *   get:
 *     summary: Barcha Lesson yozuvlarini olish
 *     tags: [Lesson]
 *     description: Tizimdagi barcha Lesson yozuvlarini olish.
 *     responses:
 *       200:
 *         description: Lesson ro‘yxati muvaffaqiyatli olindi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
lesson.get("/get", getLesson);

/**
 * @swagger
 * /lesson/getById/{id}:
 *   get:
 *     summary: ID orqali Lesson yozuvini olish
 *     tags: [Lesson]
 *     description: Ko‘rsatilgan ID orqali Lesson yozuvini olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Olish kerak bo‘lgan Lesson ning ID raqami.
 *     responses:
 *       200:
 *         description: Lesson yozuvi muvaffaqiyatli topildi.
 *       404:
 *         description: Lesson topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
lesson.get("/getById/:id", getLessonById);

/**
 * @swagger
 * /lesson/update/{id}:
 *   patch:
 *     summary: ID orqali Lesson yozuvini yangilash
 *     tags: [Lesson]
 *     description: Berilgan ID asosida Lesson yozuvini yangilash.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Yangilanadigan Lesson ning ID raqami.
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
 *                 description: Lesson bilan bog‘liq guruh raqami.
 *               lesson_date:
 *                 type: string
 *                 format: date
 *                 description: Lesson ning sanasi.
 *     responses:
 *       200:
 *         description: Lesson muvaffaqiyatli yangilandi.
 *       400:
 *         description: Noto‘g‘ri yoki to‘liq bo‘lmagan ma'lumot yuborildi.
 *       404:
 *         description: Lesson topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
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
 *     summary: ID orqali Lesson yozuvini o‘chirish
 *     tags: [Lesson]
 *     description: Ko‘rsatilgan ID orqali Lesson yozuvini o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: O‘chiriladigan Lesson ning ID raqami.
 *     responses:
 *       200:
 *         description: Lesson muvaffaqiyatli o‘chirildi.
 *       404:
 *         description: Lesson topilmadi.
 *       500:
 *         description: Serverda ichki xatolik yuz berdi.
 */
lesson.delete("/delete/:id", deleteLesson);

module.exports = { lesson };
