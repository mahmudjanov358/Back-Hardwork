const { Router } = require('express');
const stuff = Router();

const {
  postStuff,
  getStuff,
  getStuffById,
  updateStuff,
  deleteStuff,
} = require('../controllers/stuff.controller');

const {
  postStuffValidationSchema,
  updateStuffValidationSchema,
} = require('../validations/stuffValidation.js');
const stuffValidation = schema => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json({ message: validationResult.error.details[0].message });
  } else {
    next();
  }
};

/**
 * @swagger
 * /stuff/post:
 *  post:
 *    summary: Create a new Stuff
 *    tags: [Stuff]
 *    description: Create a new stuff item with the provided details.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              first_name:
 *                type: string
 *                description: The first name of the stuff item.
 *              last_name:
 *                type: string
 *                description: The last name of the stuff item.
 *              phone_number:
 *                type: string
 *                description: The phone number of the stuff item.
 *              login:
 *                type: string
 *                description: The login of the stuff item.
 *              parol:
 *                type: string
 *                description: The parol of the stuff item.
 *              is_active:
 *                type: boolean
 *                description: The active status of the stuff item.
 *    responses:
 *      201:
 *        description: Stuff item created successfully!
 *      500:
 *        description: Internal Server Error!
 */
stuff.post('/post',
  stuffValidation(postStuffValidationSchema),
  postStuff);

/**
 * @swagger
 * /stuff/get:
 *  get:
 *    summary: Retrieve all Stuff items
 *    tags: [Stuff]
 *    description: Get a list of all stuff items.
 *    responses:
 *      200:
 *        description: A list of stuff items!
 *      500:
 *        description: Internal Server Error!
 */
stuff.get('/get', getStuff);

/**
 * @swagger
 * /stuff/getById/{id}:
 *  get:
 *    summary: Retrieve a Stuff item by ID
 *    tags: [Stuff]
 *    description: Get details of a specific stuff item by its ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: The ID of the stuff item.
 *    responses:
 *      200:
 *        description: Details of the stuff item!
 *      500:
 *        description: Internal Server Error!
 */
stuff.get('/getById/:id', getStuffById);

/**
 * @swagger
 * /stuff/update/{id}:
 *  patch:
 *    summary: Update a Stuff item by ID
 *    tags: [Stuff]
 *    description: Update details of a specific stuff item by its ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: The ID of the stuff item to update.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              first_name:
 *                type: string
 *                description: The first name of the stuff item.
 *              last_name:
 *                type: string
 *                description: The last name of the stuff item.
 *              phone_number:
 *                type: string
 *                description: The phone number of the stuff item.
 *              login:
 *                type: string
 *                description: The login of the stuff item.
 *              parol:
 *                type: string
 *                description: The parol of the stuff item.
 *              is_active:
 *                type: boolean
 *                description: The active status of the stuff item.
 *    responses:
 *      200:
 *        description: Stuff item updated successfully!
 *      500:
 *        description: Internal Server Error!
 */
stuff.put('/update/:id',
  stuffValidation(updateStuffValidationSchema),
  updateStuff);

/**
 * @swagger
 * /stuff/delete/{id}:
 *  delete:
 *    summary: Delete a Stuff item by ID
 *    tags: [Stuff]
 *    description: Delete a specific stuff item by its ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: The ID of the stuff item to delete.
 *    responses:
 *      200:
 *        description: Stuff item deleted successfully!
 *      500:
 *        description: Internal Server Error!
 */
stuff.delete('/delete/:id', deleteStuff);

module.exports = { stuff };