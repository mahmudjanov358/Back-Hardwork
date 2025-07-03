const { Router } = require('express');
const role = Router();

const {
  postRole,
  getRole,
  getRoleById,
  updateRole,
  deleteRole
} = require('../controllers/role.controller');

const {
  postRoleValidationSchema,
  updateRoleValidationSchema,
} = require('../validations/roleValidation')
const roleValidation = schema => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json({ message: validationResult.error.details[0].message });
  } else {
    next();
  }
};

/**
 * @swagger
 * /role/post:
 *  post:
 *    summary: Create a new Role
 *    tags: [Role]
 *    description: Create a new role with the provided details.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: The name of the role.
 *    responses:
 *      201:
 *        description: Role created successfully!
 *      500:
 *        description: Internal Server Error!
*/
role.post('/post',
  roleValidation(postRoleValidationSchema),
  postRole);

/**
 * @swagger
 * /role/get:
 *  get:
 *    summary: Retrieve all Roles
 *    tags: [Role]
 *    description: Get a list of all roles.
 *    responses:
 *      200:
 *        description: A list of roles!
 *      500:
 *        description: Internal Server Error!
*/
role.get('/get', getRole);

/**
 * @swagger
 * /role/getById/{id}:
 *  get:
 *    summary: Retrieve a Role by ID
 *    tags: [Role]
 *    description: Get details of a specific role by its ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: The ID of the role to retrieve.
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Role details retrieved successfully!
 *      404:
 *        description: Role not found!
 *      500:
 *        description: Internal Server Error!
 */
role.get('/getById/:id', getRoleById);

/**
 * @swagger
 * /role/update/{id}:
 *  patch:
 *    summary: Update a Role by ID
 *    tags: [Role]
 *    description: Update details of a specific role by its ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: The ID of the role to update.
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: The name of the role.
 *    responses:
 *      200:
 *        description: Role updated successfully.
 *      404:
 *        description: Role not found!
 *      500:
 *        description: Internal Server Error!
 */
role.put('/update/:id',
  roleValidation(updateRoleValidationSchema),
  updateRole);

/**
 * @swagger
 * /role/delete/{id}:
 *  delete:
 *    summary: Delete a Role by ID
 *    tags: [Role]
 *    description: Delete a specific role by its ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: The ID of the role to delete.
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Role deleted successfully.
 *      404:
 *        description: Role not found!
 *      500:
 *        description: Internal Server Error!
 */
role.delete('/delete/:id', deleteRole);

module.exports = { role };