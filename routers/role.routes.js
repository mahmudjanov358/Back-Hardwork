const { Router } = require("express");
const role = Router();

const {
  postRole,
  getRole,
  getRoleById,
  updateRole,
  deleteRole,
} = require("../controllers/role.controller");

const {
  postRoleValidationSchema,
  updateRoleValidationSchema,
} = require("../validations/roleValidation");
const roleValidation = (schema) => (req, res, next) => {
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
 * /role/post:
 *  post:
 *    summary: Yangi Role yaratish
 *    tags: [Role-1]
 *    description: Yangi Role ni berilgan ma'lumotlar bilan yaratish.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: Role ning nomi.
 *    responses:
 *      201:
 *        description: Role muvaffaqiyatli yaratildi!
 *      500:
 *        description: Ichki server xatosi!
 */
role.post("/post", roleValidation(postRoleValidationSchema), postRole);

/**
 * @swagger
 * /role/get:
 *  get:
 *    summary: Barcha Role larni olish
 *    tags: [Role-1]
 *    description: Barcha Role lar ro‘yxatini olish.
 *    responses:
 *      200:
 *        description: Role lar ro‘yxati muvaffaqiyatli olindi!
 *      500:
 *        description: Ichki server xatosi!
 */
role.get("/get", getRole);

/**
 * @swagger
 * /role/getById/{id}:
 *  get:
 *    summary: Role ni ID bo‘yicha olish
 *    tags: [Role-1]
 *    description: Role ni uning ID si bo‘yicha olish.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *          description: Olinadigan Role ning ID si.
 *    responses:
 *      200:
 *        description: Role ma'lumotlari muvaffaqiyatli olindi!
 *      404:
 *        description: Role topilmadi!
 *      500:
 *        description: Ichki server xatosi!
 */
role.get("/getById/:id", getRoleById);

/**
 * @swagger
 * /role/update/{id}:
 *  patch:
 *    summary: Role ni ID bo‘yicha yangilash
 *    tags: [Role-1]
 *    description: Role ni uning ID si bo‘yicha berilgan ma'lumotlar bilan yangilash.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *          description: Yangilanadigan Role ning ID si.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: Role ning yangilangan nomi.
 *    responses:
 *      200:
 *        description: Role muvaffaqiyatli yangilandi.
 *      404:
 *        description: Role topilmadi!
 *      500:
 *        description: Ichki server xatosi!
 */
role.patch(
  "/update/:id",
  roleValidation(updateRoleValidationSchema),
  updateRole
);

/**
 * @swagger
 * /role/delete/{id}:
 *  delete:
 *    summary: Role ni ID bo‘yicha o‘chirish
 *    tags: [Role-1]
 *    description: Role ni uning ID si bo‘yicha o‘chirish.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *          description: O‘chiriladigan Role ning ID si.
 *    responses:
 *      200:
 *        description: Role muvaffaqiyatli o‘chirildi.
 *      404:
 *        description: Role topilmadi!
 *      500:
 *        description: Ichki server xatosi!
 */
role.delete("/delete/:id", deleteRole);

module.exports = { role };
