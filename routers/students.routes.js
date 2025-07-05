const { Router } = require("express");
const students = Router();

const {
  postStudents,
  getStudents,
  getStudentsById,
  updateStudents,
  deleteStudents,
} = require("../controllers/students.controller");

const {
  postStudentsValidationSchema,
  updateStudentsValidationSchema,
} = require("../validations/studentsValidation");

const studentsValidation = (schema) => (req, res, next) => {
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
 * /students/post:
 *   post:
 *     summary: Yangi Students yaratish
 *     tags: [Students]
 *     description: Kiritilgan ma'lumotlar asosida yangi Students (talaba) yozuvini yaratish.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lid_id:
 *                 type: string
 *                 description: Students'ning lid identifikatori.
 *               first_name:
 *                 type: string
 *                 description: Students ismi.
 *               last_name:
 *                 type: string
 *                 description: Students familiyasi.
 *               phone_number:
 *                 type: string
 *                 description: Students telefon raqami.
 *               birthday:
 *                 type: string
 *                 format: date
 *                 description: Students tug‘ilgan sanasi (YYYY-MM-DD).
 *               gender:
 *                 type: string
 *                 description: Students jinsi (male, female yoki other).
 *     responses:
 *       201:
 *         description: Students muvaffaqiyatli yaratildi.
 *       400:
 *         description: Noto‘g‘ri yoki to‘liq ma'lumot yuborildi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
students.post(
  "/post",
  studentsValidation(postStudentsValidationSchema),
  postStudents
);

/**
 * @swagger
 * /students/get:
 *   get:
 *     summary: Barcha Students yozuvlarini olish
 *     tags: [Students]
 *     description: Tizimdagi barcha Students (talabalar) yozuvlarini olish.
 *     responses:
 *       200:
 *         description: Students ro'yxati muvaffaqiyatli olindi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
students.get("/get", getStudents);

/**
 * @swagger
 * /students/getById/{id}:
 *   get:
 *     summary: ID orqali Students ma'lumotini olish
 *     tags: [Students]
 *     description: Ko‘rsatilgan ID orqali Students yozuvini olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Olish kerak bo‘lgan Students ID raqami.
 *         schema:
 *           type: string
 *           description: Students'ning noyob identifikatori.
 *     responses:
 *       200:
 *         description: Students ma'lumotlari muvaffaqiyatli olindi.
 *       404:
 *         description: Students topilmadi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
students.get("/getById/:id", getStudentsById);

/**
 * @swagger
 * /students/update/{id}:
 *   patch:
 *     summary: Students ni ID orqali yangilash
 *     tags: [Students]
 *     description: Berilgan ID asosida Students yozuvini yangilash.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Yangilanadigan Students ID raqami.
 *         schema:
 *           type: string
 *           description: Students'ning noyob identifikatori.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 description: Yangilangan ismi.
 *               last_name:
 *                 type: string
 *                 description: Yangilangan familiyasi.
 *               phone_number:
 *                 type: string
 *                 description: Yangilangan telefon raqami.
 *               birthday:
 *                 type: string
 *                 format: date
 *                 description: Yangilangan tug‘ilgan sanasi.
 *               gender:
 *                 type: string
 *                 description: Yangilangan jins.
 *     responses:
 *       200:
 *         description: Students ma'lumotlari muvaffaqiyatli yangilandi.
 *       404:
 *         description: Students topilmadi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
students.patch(
  "/update/:id",
  studentsValidation(updateStudentsValidationSchema),
  updateStudents
);

/**
 * @swagger
 * /students/delete/{id}:
 *   delete:
 *     summary: ID orqali Students ni o‘chirish
 *     tags: [Students]
 *     description: Ko‘rsatilgan ID orqali Students yozuvini o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: O‘chiriladigan Students ID raqami.
 *         schema:
 *           type: string
 *           description: Students'ning noyob identifikatori.
 *     responses:
 *       200:
 *         description: Students muvaffaqiyatli o‘chirildi.
 *       404:
 *         description: Students topilmadi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
students.delete("/delete/:id", deleteStudents);

module.exports = { students };
