const { Router } = require('express');
const reason_lid = Router();

const {
  postReason_Lid,
  getReason_Lid,
  getReason_LidById,
  updateReason_Lid,
  deleteReason_Lid,
} = require('../controllers/reason_lid.controller');

const {
  postReasonLidValidationSchema,
  updateReasonLidValidationSchema,
} = require('../validations/reason_lidValidation');
const reasonLidValidation = (schema) => (req, res, next) => {
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
  * /reason_lid/post:
  *   post:
  *     summary: Create a new reason for lid
  *     tags: [Reason_Lid]
  *     description: Create a new reason for lid with the provided details.
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             type: object
  *             properties:
  *               reason:
  *                 type: string
  *                 description: The name of the reason for lid.
  *     responses:
  *       201:
  *         description: Reason for lid created successfully.
  *       500:
  *         description: Internal server error.
*/
reason_lid.post('/post', postReason_Lid);

/**
  * @swagger
  * /reason_lid/get:
  *   get:
  *     summary: Retrieve all reasons for lid
  *     tags: [Reason_Lid]
  *     description: Get a list of all reasons for lid.
  *     responses:
  *       200:
  *         description: List of reasons for lid retrieved successfully.
  *       500:
  *         description: Internal server error.
*/
reason_lid.get('/get', getReason_Lid);

/**
  * @swagger
  * /reason_lid/getById/{id}:
  *   get:
  *     summary: Retrieve a reason for lid by ID
  *     tags: [Reason_Lid]
  *     description: Get a specific reason for lid by its ID.
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         schema:
  *           type: string
  *         description: The ID of the reason for lid.
  *     responses:
  *       200:
  *         description: Reason for lid retrieved successfully.
  *       404:
  *         description: Reason for lid not found.
  *       500:
  *         description: Internal server error.
*/
reason_lid.get('/getById/:id', getReason_LidById);

/**
  * @swagger
  * /reason_lid/update/{id}:
  *   put:
  *     summary: Update a reason for lid by ID
  *     tags: [Reason_Lid]
  *     description: Update a specific reason for lid by its ID with the provided details.
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         schema:
  *           type: string
  *         description: The ID of the reason for lid to update.
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             type: object
  *             properties:
  *               reason:
  *                 type: string
  *                 description: The updated name of the reason for lid.
  *     responses:
  *       200:
  *         description: Reason for lid updated successfully.
  *       404:
  *         description: Reason for lid not found.
*/
reason_lid.put('/update/:id', reasonLidValidation(updateReasonLidValidationSchema), updateReason_Lid);

/**
  * @swagger
  * /reason_lid/delete/{id}:
  *   delete:
  *     summary: Delete a reason for lid by ID
  *     tags: [Reason_Lid]
  *     description: Delete a specific reason for lid by its ID.
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         schema:
  *           type: string
  *         description: The ID of the reason for lid to delete.
  *     responses:
  *       200:
  *         description: Reason for lid deleted successfully.
  *       404:
  *         description: Reason for lid not found.
  *       500:
  *         description: Internal server error.
*/
reason_lid.delete('/delete/:id', deleteReason_Lid);

module.exports = { reason_lid };