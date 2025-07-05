const { Router } = require("express");
const student_group = Router();

const {
  postStudent_Group,
  getStudent_Group,
  getStudent_GroupById,
  deleteStudent_Group,
} = require("../controllers/student_group.controller");

const {
  postStudentGroupValidationSchema,
} = require("../validations/student_groupValidation");

const studentGroupValidation = (schema) => (req, res, next) => {
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
 * /student_group/post:
 *   post:
 *     summary: Yangi Student Group yaratish
 *     tags: [Student_Group]
 *     description: Kiritilgan ma'lumotlar asosida yangi Student Group (talaba va guruh orasidagi bog‘lanish) yozuvini yaratish.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               students_id:
 *                 type: string
 *                 description: Talabaga tegishli ID (student hujjatining ID raqami).
 *               group_id:
 *                 type: string
 *                 description: Guruhga tegishli ID (group hujjatining ID raqami).
 *     responses:
 *       201:
 *         description: Student Group muvaffaqiyatli yaratildi.
 *       400:
 *         description: Noto‘g‘ri yoki to‘liq ma'lumot yuborildi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
student_group.post(
  "/post",
  studentGroupValidation(postStudentGroupValidationSchema),
  postStudent_Group
);

/**
 * @swagger
 * /student_group/get:
 *   get:
 *     summary: Barcha Student Group yozuvlarini olish
 *     tags: [Student_Group]
 *     description: Tizimdagi barcha Student Group (talaba-guruh bog‘lanishlari) yozuvlarini olish.
 *     responses:
 *       200:
 *         description: Student Group ro‘yxati muvaffaqiyatli olindi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
student_group.get("/get", getStudent_Group);

/**
 * @swagger
 * /student_group/getById/{id}:
 *   get:
 *     summary: ID orqali Student Group yozuvini olish
 *     tags: [Student_Group]
 *     description: Ko‘rsatilgan ID asosida aniq bir Student Group yozuvini olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Olish kerak bo‘lgan Student Group yozuvining ID raqami.
 *         schema:
 *           type: string
 *           description: Student Group yozuvining noyob identifikatori.
 *     responses:
 *       200:
 *         description: Student Group yozuvi muvaffaqiyatli topildi.
 *       404:
 *         description: Student Group yozuvi topilmadi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
student_group.get("/getById/:id", getStudent_GroupById);

/**
 * @swagger
 * /student_group/delete/{id}:
 *   delete:
 *     summary: ID orqali Student Group yozuvini o‘chirish
 *     tags: [Student_Group]
 *     description: Ko‘rsatilgan ID asosida Student Group yozuvini tizimdan o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: O‘chiriladigan Student Group yozuvining ID raqami.
 *         schema:
 *           type: string
 *           description: Student Group yozuvining noyob identifikatori.
 *     responses:
 *       200:
 *         description: Student Group yozuvi muvaffaqiyatli o‘chirildi.
 *       404:
 *         description: Student Group yozuvi topilmadi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
student_group.delete("/delete/:id", deleteStudent_Group);

module.exports = { student_group };
