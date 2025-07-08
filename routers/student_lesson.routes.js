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
 *     summary: Yangi Student_Lesson yozuvini yaratish
 *     tags: [Student_Lesson-14]
 *     description: Kiritilgan ma'lumotlar asosida yangi Student_Lesson yozuvini yaratish.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lesson_id:
 *                 type: string
 *                 description: Lesson ning ID raqami.
 *               student_id:
 *                 type: string
 *                 description: Students ning ID raqami.
 *               is_there:
 *                 type: boolean
 *                 description: Lesson da qatnashganlik holati (true/false).
 *               reason:
 *                 type: string
 *                 description: Sabab (ixtiyoriy).
 *               be_paid:
 *                 type: boolean
 *                 description: To‘lov holati (to‘langan — true, to‘lanmagan — false).
 *     responses:
 *       201:
 *         description: Student_Lesson yozuvi muvaffaqiyatli yaratildi.
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
 *     summary: Barcha Student_Lesson yozuvlarini olish
 *     tags: [Student_Lesson-14]
 *     description: Tizimdagi barcha Student_Lesson yozuvlarini olish.
 *     responses:
 *       200:
 *         description: Student_Lesson ro‘yxati muvaffaqiyatli qaytarildi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
student_lesson.get("/get", getStudent_Lesson);

/**
 * @swagger
 * /student_lesson/getById/{id}:
 *   get:
 *     summary: ID orqali Student_Lesson yozuvini olish
 *     tags: [Student_Lesson-14]
 *     description: Ko‘rsatilgan ID asosida Student_Lesson yozuvini olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Olish kerak bo‘lgan Student_Lesson yozuvining ID raqami.
 *     responses:
 *       200:
 *         description: Student_Lesson yozuvi muvaffaqiyatli topildi.
 *       404:
 *         description: Student_Lesson yozuvi topilmadi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
student_lesson.get("/getById/:id", getStudent_LessonById);

/**
 * @swagger
 * /student_lesson/update/{id}:
 *   patch:
 *     summary: ID orqali Student_Lesson yozuvini yangilash
 *     tags: [Student_Lesson-14]
 *     description: Student_Lesson yozuvini ID asosida yangilash.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Yangilanadigan Student_Lesson yozuvining ID raqami.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lesson_id:
 *                 type: string
 *                 description: Lesson ning yangi ID raqami.
 *               student_id:
 *                 type: string
 *                 description: Students ning yangi ID raqami.
 *               is_there:
 *                 type: boolean
 *                 description: Lesson da qatnashganlik holati.
 *               reason:
 *                 type: string
 *                 description: Sabab (ixtiyoriy).
 *               be_paid:
 *                 type: boolean
 *                 description: To‘lov holati.
 *     responses:
 *       200:
 *         description: Student_Lesson yozuvi muvaffaqiyatli yangilandi.
 *       404:
 *         description: Student_Lesson yozuvi topilmadi.
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
 *     summary: ID orqali Student_Lesson yozuvini o‘chirish
 *     tags: [Student_Lesson-14]
 *     description: Ko‘rsatilgan ID asosida Student_Lesson yozuvini tizimdan o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: O‘chiriladigan Student_Lesson yozuvining ID raqami.
 *     responses:
 *       200:
 *         description: Student_Lesson yozuvi muvaffaqiyatli o‘chirildi.
 *       404:
 *         description: Student_Lesson yozuvi topilmadi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
student_lesson.delete("/delete/:id", deleteStudent_Lesson);

module.exports = { student_lesson };
