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
 *     description: Kiritilgan ma'lumotlar asosida yangi Students yozuvini yaratish.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lid_id:
 *                 type: string
 *                 description: Students ning Lid identifikatori.
 *               first_name:
 *                 type: string
 *                 description: Students ning ismi.
 *               last_name:
 *                 type: string
 *                 description: Students ning familiyasi.
 *               phone_number:
 *                 type: string
 *                 description: Students ning telefon raqami.
 *               birthday:
 *                 type: string
 *                 format: date
 *                 description: Students ning tug‘ilgan sanasi (YYYY-MM-DD).
 *               gender:
 *                 type: string
 *                 description: Students ning jinsi (male, female yoki other).
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
 *     description: Tizimdagi barcha Students yozuvlarini olish.
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
 *     summary: ID orqali Students yozuvini olish
 *     tags: [Students]
 *     description: Ko‘rsatilgan ID orqali Students yozuvini olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Olish kerak bo‘lgan Students ning ID raqami.
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
 *     summary: Students yozuvini ID orqali yangilash
 *     tags: [Students]
 *     description: Berilgan ID asosida Students yozuvini yangilash.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Yangilanadigan Students ning ID raqami.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 description: Students ning yangilangan ismi.
 *               last_name:
 *                 type: string
 *                 description: Students ning yangilangan familiyasi.
 *               phone_number:
 *                 type: string
 *                 description: Students ning yangilangan telefon raqami.
 *               birthday:
 *                 type: string
 *                 format: date
 *                 description: Students ning yangilangan tug‘ilgan sanasi.
 *               gender:
 *                 type: string
 *                 description: Students ning yangilangan jinsi.
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
 *     summary: ID orqali Students yozuvini o‘chirish
 *     tags: [Students]
 *     description: Ko‘rsatilgan ID orqali Students yozuvini o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: O‘chiriladigan Students ning ID raqami.
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
