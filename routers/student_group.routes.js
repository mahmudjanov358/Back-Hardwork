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
 *     summary: Yangi Student_Group yozuvini yaratish
 *     tags: [Student_Group-13]
 *     description: Kiritilgan ma'lumotlar asosida yangi Student_Group yozuvini yaratish.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               students_id:
 *                 type: string
 *                 description: Students ning ID raqami.
 *               group_id:
 *                 type: string
 *                 description: Group ning ID raqami.
 *     responses:
 *       201:
 *         description: Student_Group yozuvi muvaffaqiyatli yaratildi.
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
 *     summary: Barcha Student_Group yozuvlarini olish
 *     tags: [Student_Group-13]
 *     description: Tizimdagi barcha Student_Group yozuvlarini olish.
 *     responses:
 *       200:
 *         description: Student_Group ro‘yxati muvaffaqiyatli olindi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
student_group.get("/get", getStudent_Group);

/**
 * @swagger
 * /student_group/getById/{id}:
 *   get:
 *     summary: ID orqali Student_Group yozuvini olish
 *     tags: [Student_Group-13]
 *     description: Ko‘rsatilgan ID asosida Student_Group yozuvini olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Olish kerak bo‘lgan Student_Group yozuvining ID raqami.
 *     responses:
 *       200:
 *         description: Student_Group yozuvi muvaffaqiyatli topildi.
 *       404:
 *         description: Student_Group yozuvi topilmadi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
student_group.get("/getById/:id", getStudent_GroupById);

/**
 * @swagger
 * /student_group/delete/{id}:
 *   delete:
 *     summary: ID orqali Student_Group yozuvini o‘chirish
 *     tags: [Student_Group-13]
 *     description: Ko‘rsatilgan ID asosida Student_Group yozuvini tizimdan o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: O‘chiriladigan Student_Group yozuvining ID raqami.
 *     responses:
 *       200:
 *         description: Student_Group yozuvi muvaffaqiyatli o‘chirildi.
 *       404:
 *         description: Student_Group yozuvi topilmadi.
 *       500:
 *         description: Ichki server xatosi yuz berdi.
 */
student_group.delete("/delete/:id", deleteStudent_Group);

module.exports = { student_group };
