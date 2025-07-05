const { Router } = require("express");
const student_lesson = Router();

const {
  postStudent_Lesson,
  getStudent_Lesson,
  getStudent_LessonById,
  updateStudent_Lesson,
  deleteStudent_Lesson,
} = require("../controllers/student_lesson.controller");

const {
  postStudentLessonValidationSchema,
  updateStudentLessonValidationSchema,
} = require("../validations/student_lessonValidation");

const studentLessonValidation = (schema) => (req, res, next) => {
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
 * /student_lesson/post:
 *   post:
 *     summary: Yangi Student Lesson yozuvini yaratish
 *     tags: [Student_Lesson]
 *     description: Kiritilgan ma'lumotlar asosida yangi Student Lesson (talaba-dars) yozuvini yaratish.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lesson_id:
 *                 type: string
 *                 description: Darsning ID raqami.
 *               student_id:
 *                 type: string
 *                 description: Talabaning ID raqami.
 *               is_there:
 *                 type: boolean
 *                 description: Darsda qatnashganlik holati (true/false).
 *               reason:
 *                 type: string
 *                 description: Sabab (agar qatnashmagan bo‘lsa).
 *               be_paid:
 *                 type: boolean
 *                 description: To‘lov holati (to‘langan — true, to‘lanmagan — false).
 *     responses:
 *       201:
 *         description: Student Lesson yozuvi muvaffaqiyatli yaratildi.
 *       400:
 *         description: Noto‘g‘ri ma'lumot yuborildi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
student_lesson.post(
  "/post",
  studentLessonValidation(postStudentLessonValidationSchema),
  postStudent_Lesson
);

/**
 * @swagger
 * /student_lesson/get:
 *   get:
 *     summary: Barcha Student Lesson yozuvlarini olish
 *     tags: [Student_Lesson]
 *     description: Tizimdagi barcha Student Lesson (talaba-dars) yozuvlarini olish.
 *     responses:
 *       200:
 *         description: Yozuvlar muvaffaqiyatli qaytarildi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
student_lesson.get("/get", getStudent_Lesson);

/**
 * @swagger
 * /student_lesson/getById/{id}:
 *   get:
 *     summary: ID orqali Student Lesson yozuvini olish
 *     tags: [Student_Lesson]
 *     description: Ko‘rsatilgan ID asosida Student Lesson yozuvini olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Yozuvning ID raqami.
 *         schema:
 *           type: string
 *           description: Yozuvning noyob identifikatori.
 *     responses:
 *       200:
 *         description: Student Lesson yozuvi topildi.
 *       404:
 *         description: Yozuv topilmadi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
student_lesson.get("/getById/:id", getStudent_LessonById);

/**
 * @swagger
 * /student_lesson/update/{id}:
 *   patch:
 *     summary: ID orqali Student Lesson yozuvini yangilash
 *     tags: [Student_Lesson]
 *     description: Student Lesson yozuvini ID asosida yangilash.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Yangilanadigan yozuvning ID raqami.
 *         schema:
 *           type: string
 *           description: Yozuvning noyob identifikatori.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lesson_id:
 *                 type: string
 *                 description: Darsning yangi ID raqami.
 *               student_id:
 *                 type: string
 *                 description: Talabaning yangi ID raqami.
 *               is_there:
 *                 type: boolean
 *                 description: Qatnashganlik holati.
 *               reason:
 *                 type: string
 *                 description: Sabab (ixtiyoriy).
 *               be_paid:
 *                 type: boolean
 *                 description: To‘lov holati.
 *     responses:
 *       200:
 *         description: Student Lesson yozuvi muvaffaqiyatli yangilandi.
 *       404:
 *         description: Yozuv topilmadi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
student_lesson.patch(
  "/update/:id",
  studentLessonValidation(updateStudentLessonValidationSchema),
  updateStudent_Lesson
);

/**
 * @swagger
 * /student_lesson/delete/{id}:
 *   delete:
 *     summary: ID orqali Student Lesson yozuvini o‘chirish
 *     tags: [Student_Lesson]
 *     description: Ko‘rsatilgan ID asosida Student Lesson yozuvini tizimdan o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: O‘chiriladigan yozuvning ID raqami.
 *         schema:
 *           type: string
 *           description: Yozuvning noyob identifikatori.
 *     responses:
 *       200:
 *         description: Student Lesson yozuvi muvaffaqiyatli o‘chirildi.
 *       404:
 *         description: Yozuv topilmadi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
student_lesson.delete("/delete/:id", deleteStudent_Lesson);

module.exports = { student_lesson };
