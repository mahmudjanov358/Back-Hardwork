const { Router } = require("express");
const branch = Router();

const {
  postBranch,
  getBranch,
  getBranchById,
  updateBranch,
  deleteBranch,
} = require("../controllers/branch.controller");

const {
  postBranchValidationSchema,
  updateBranchValidationSchema,
} = require("../validations/branchValidation");
const branchValidation = (schema) => (req, res, next) => {
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
 * /branch/post:
 *   post:
 *     summary: Yangi Branch yaratish
 *     tags: [Branch-5]
 *     description: Yangi Branch ni berilgan ma'lumotlar bilan yaratish.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Branch ning nomi.
 *               address:
 *                 type: string
 *                 description: Branch ning manzili.
 *               call_number:
 *                 type: string
 *                 description: Branch ning telefon raqami.
 *     responses:
 *       201:
 *         description: Branch muvaffaqiyatli yaratildi.
 *       500:
 *         description: Ichki server xatosi.
 */
branch.post("/post", branchValidation(postBranchValidationSchema), postBranch);

/**
 * @swagger
 * /branch/get:
 *   get:
 *     summary: Barcha Branchlarni olish
 *     tags: [Branch-5]
 *     description: Barcha Branchlar ro‘yxatini olish.
 *     responses:
 *       200:
 *         description: Branch lar muvaffaqiyatli olindi.
 *       500:
 *         description: Ichki server xatosi.
 */
branch.get("/get", getBranch);

/**
 * @swagger
 * /branch/getById/{id}:
 *   get:
 *     summary: Branch ni ID bo‘yicha olish
 *     tags: [Branch-5]
 *     description: Branch ni uning ID si bo‘yicha olish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Olinadigan Branch ning ID si.
 *     responses:
 *       200:
 *         description: Branch muvaffaqiyatli topildi.
 *       404:
 *         description: Branch topilmadi.
 *       500:
 *         description: Ichki server xatosi.
 */
branch.get("/getById/:id", getBranchById);

/**
 * @swagger
 * /branch/update/{id}:
 *   put:
 *     summary: Branch ni ID bo‘yicha yangilash
 *     tags: [Branch-5]
 *     description: Branch ma'lumotlarini uning ID si bo‘yicha yangilash.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Yangilanadigan Branch ning ID si.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Branch ning nomi.
 *               address:
 *                 type: string
 *                 description: Branch ning manzili.
 *               call_number:
 *                 type: string
 *                 description: Branch ning telefon raqami.
 *     responses:
 *       200:
 *         description: Branch muvaffaqiyatli yangilandi.
 *       404:
 *         description: Branch topilmadi.
 *       500:
 *         description: Ichki server xatosi.
 */
branch.put(
  "/update/:id",
  branchValidation(updateBranchValidationSchema),
  updateBranch
);

/**
 * @swagger
 * /branch/delete/{id}:
 *   delete:
 *     summary: Branch ni ID bo‘yicha o‘chirish
 *     tags: [Branch-5]
 *     description: Branch ni uning ID si bo‘yicha o‘chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: O‘chiriladigan Branch ning ID si.
 *     responses:
 *       200:
 *         description: Branch muvaffaqiyatli o‘chirildi.
 *       404:
 *         description: Branch topilmadi.
 *       500:
 *         description: Ichki server xatosi.
 */
branch.delete("/delete/:id", deleteBranch);

module.exports = { branch };
