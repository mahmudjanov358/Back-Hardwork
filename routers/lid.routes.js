const { Router } = require('express');
const lid = Router();

const {
  postLid,
  getLid,
  getLidById,
  updateLid,
  deleteLid,
} = require('../controllers/lid.controller');

const {
  postLidValidationSchema,
  updateLidValidationSchema,
} = require('../validations/lidValidation');
const lidValidation = (schema) => (req, res, next) => {
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
 * /lid/post:
 *   post:
 *     summary: Create a new Lid item
 *     tags: [Lid]
 *     description: Create a new lid item with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 description: The first name of the lid item.
 *               last_name:
 *                 type: string
 *                 description: The last name of the lid item.
 *               phone_number:
 *                 type: string
 *                 description: The phone number of the lid item.
 *               lid_stage_id:
 *                 type: string
 *                 description: The stage ID of the lid item.
 *               test_date:
 *                 type: string
 *                 format: date
 *                 description: The test date of the lid item.
 *               trial_lesson_date:
 *                 type: string
 *                 description: The trial lesson date of the lid item.
 *               trial_lesson_time:
 *                 type: string
 *                 description: The trial lesson time of the lid item.
 *               trial_lesson_group_id:
 *                 type: string
 *                 description: The trial lesson group ID of the lid item.
 *               lid_status_id:
 *                 type: string
 *                 description: The status ID of the lid item.
 *               cancel_reason_id:
 *                 type: string
 *                 description: The cancel reason ID of the lid item.
 *     responses:
 *       201:
 *         description: Lid item created successfully!
 *       500:
 *         description: Internal Server Error!
*/
lid.post('/post', lidValidation(postLidValidationSchema), postLid);

/**
  * @swagger
  * /lid/get:
  *   get:
  *     summary: Retrieve all Lid items
  *     tags: [Lid]
  *     description: Get a list of all lid items.
  *     responses:
  *       200:
  *         description: Successfully retrieved lid items.
  *       500:
  *         description: Internal Server Error!
*/
lid.get('/get', getLid);

/**
 * @swagger
 * /lid/getById/{id}:
 *   get:
 *     summary: Retrieve a Lid item by ID
 *     tags: [Lid]
 *     description: Get details of a specific lid item by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the lid item.
 *     responses:
 *       200:
 *         description: Details of the lid item found!
 *       500:
 *         description: Internal Server Error!
*/
lid.get('/getById/:id', getLidById);

/**
 * @swagger
 * /lid/update/{id}:
 *   patch:
 *     summary: Update a Lid item by ID
 *     tags: [Lid]
 *     description: Update details of a specific lid item by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the lid item to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 description: The first name of the lid item.
 *               last_name:
 *                 type: string
 *                 description: The last name of the lid item.
 *               phone_number:
 *                 type: string
 *                 description: The phone number of the lid item.
 *               test_date:
 *                 type: string
 *                 format: date
 *                 description: The test date of the lid item.
 *               trial_lesson_date:
 *                 type: string
 *                 description: The trial lesson date of the lid item.
 *               trial_lesson_time:
 *                 type: string
 *                 description: The trial lesson time of the lid item.
*/
lid.patch('/update/:id', lidValidation(updateLidValidationSchema), updateLid);

/**
  * @swagger
  * /lid/delete/{id}:
  *   delete:
  *     summary: Delete a Lid item by ID
  *     tags: [Lid]
  *     description: Delete a specific lid item by its ID.
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         schema:
  *           type: string
  *         description: The ID of the lid item to delete.
  *     responses:
  *       200:
  *         description: Lid item deleted successfully!
  *       500:
  *         description: Internal Server Error!
*/
lid.delete('/delete/:id', deleteLid);

module.exports = { lid };