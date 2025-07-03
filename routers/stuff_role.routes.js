const { Router } = require('express');
const stuff_role = Router();

const {
  postStuff_Role,
  getStuff_Role,
  getStuff_RoleById,
  deleteStuff_Role,
} = require('../controllers/stuff_role.controller');

const {
  postStuff_RoleValidationSchema,
} = require('../validations/stuff_roleValidation');
const stuffRoleValidation = schema => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json({ message: validationResult.error.details[0].message });
  } else {
    next();
  }
};

/**
 * @swagger
 * /stuff_role/post:
 *  post:
 *    summary: Create a new Stuff Role
 *    tags: [Stuff_Role]
 *    description: Create a new stuff role with the provided details.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              role_name:
 *                type: string
 *                description: The name of the role.
 *              permissions:
 *                type: array
 *                items:
 *                  type: string
 *                description: List of permissions associated with the role.
 *    responses:
 *      201:
 *        description: Stuff Role created successfully!
 *      500:
 *        description: Internal server error.
 */
stuff_role.post('/post',
  stuffRoleValidation(postStuff_RoleValidationSchema),
  postStuff_Role
);

/**
 * @swagger
 * /stuff_role/get:
 *  get:
 *    summary: Retrieve all Stuff Roles
 *    tags: [Stuff_Role]
 *    description: Fetch a list of all stuff roles.
 *    responses:
 *      200:
 *        description: List of stuff roles retrieved successfully.
 *      500:
 *        description: Internal server error.
 */
stuff_role.get('/get', getStuff_Role);

/**
 * @swagger
 * /stuff_role/getById/{id}:
 *  get:
 *    summary: Retrieve a Stuff Role by ID
 *    tags: [Stuff_Role]
 *    description: Fetch a specific stuff role by its ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: The ID of the stuff role to retrieve.
 *    responses:
 *      200:
 *        description: Stuff Role retrieved successfully.
 *      404:
 *        description: Stuff Role not found.
 *      500:
 *        description: Internal server error.
 */
stuff_role.get('/getById/:id', getStuff_RoleById);

/**
 * @swagger
 * /stuff_role/delete/{id}:
 *  delete:
 *    summary: Delete a Stuff Role by ID
 *    tags: [Stuff_Role]
 *    description: Remove a specific stuff role by its ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: The ID of the stuff role to delete.
 *    responses:
 *      200:
 *        description: Stuff Role deleted successfully.
 *      404:
 *        description: Stuff Role not found.
 *      500:
 *        description: Internal server error.
 */
stuff_role.delete('/delete/:id', deleteStuff_Role);

module.exports = { stuff_role };