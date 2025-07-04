const { Router } = require('express');
const lid_status = Router();

const {
  postLid_Status,
  getLid_Status,
  getLid_StatusById,
  updateLid_Status,
  deleteLid_Status,
} = require('../controllers/lid_status.controller');

const {
  postLidStatusValidationSchema,
  updateLidStatusValidationSchema,
} = require('../validations/lid_statusValidation');
const lidStatusValidation = (schema) => (req, res, next) => {
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
 * /lid_status/post:
 *   post:
 *     summary: Create a new lid status
 *     tags: [Lid_Status]
 *     description: Create a new lid status with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: The name of the lid status.
 *     responses:
 *       201:
 *         description: Lid status created successfully.
 *       500:
 *         description: Internal server error.
*/
lid_status.post('/post', lidStatusValidation(postLidStatusValidationSchema), postLid_Status);

/**
 * @swagger
 * /lid_status/get:
 *   get:
 *     summary: Retrieve all lid statuses
 *     tags: [Lid_Status]
 *     description: Get a list of all lid statuses.
 *     responses:
 *       200:
 *         description: List of lid statuses retrieved successfully.
 *       500:
 *         description: Internal server error.
*/
lid_status.get('/get', getLid_Status);

/**
 * @swagger
 * /lid_status/getById/{id}:
 *   get:
 *     summary: Retrieve a lid status by ID
 *     tags: [Lid_Status]
 *     description: Get a lid status by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the lid status to retrieve.
 *     responses:
 *       200:
 *         description: Lid status retrieved successfully.
 *       404:
 *         description: Lid status not found.
 *       500:
 *         description: Internal server error.
*/
lid_status.get('/getById/:id', getLid_StatusById);

/**
 * @swagger
 * /lid_status/update/{id}:
 *   put:
 *     summary: Update a lid status by ID
 *     tags: [Lid_Status]
 *     description: Update a lid status by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the lid status to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: The updated name of the lid status.
 *     responses:
 *       200:
 *         description: Lid status updated successfully.
 *       404:
 *         description: Lid status not found.
 *       500:
 *         description: Internal server error.
*/
lid_status.put('/update/:id', lidStatusValidation(updateLidStatusValidationSchema), updateLid_Status);

/**
 * @swagger
 * /lid_status/delete/{id}:
 *   delete:
 *     summary: Delete a lid status by ID
 *     tags: [Lid_Status]
 *     description: Delete a lid status by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the lid status to delete.
 *     responses:
 *       200:
 *         description: Lid status deleted successfully.
 *       404:
 *         description: Lid status not found.
 *       500:
 *         description: Internal server error.
*/
lid_status.delete('/delete/:id', deleteLid_Status);

module.exports = { lid_status };