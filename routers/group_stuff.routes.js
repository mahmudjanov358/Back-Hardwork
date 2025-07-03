const { Router } = require('express');
const group_stuff = Router();

const {
  postGroup_Stuff,
  getGroup_Stuff,
  getGroup_StuffById,
  deleteGroup_Stuff,
} = require('../controllers/group_stuff.controller');

const {
  postGroupStuffValidationSchema,
} = require('../validations/group_stuffValidation');
const groupStuffValidation = (schema) => (req, res, next) => {
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
 * /group_stuff/post:
 *   post:
 *     summary: Create a new group stuff
 *     tags: [Group_Stuff]
 *     description: Create a new group stuff with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               group_id:
 *                 type: string
 *                 description: The ID of the group.
 *               stuff_id:
 *                 type: string
 *                 description: The ID of the stuff.
 *     responses:
 *       201:
 *         description: Group stuff created successfully.
 *       400:
 *         description: Invalid request body.
 *       500:
 *         description: Internal server error.
 */
group_stuff.post('/post', groupStuffValidation(postGroupStuffValidationSchema), postGroup_Stuff);

/**
 * @swagger
 * /group_stuff/get:
 *   get:
 *     summary: Get all group stuff
 *     tags: [Group_Stuff]
 *     description: Retrieve a list of all group stuff.
 *     responses:
 *       200:
 *         description: A list of group stuff.
 *       500:
 *         description: Internal server error.
 */
group_stuff.get('/get', getGroup_Stuff);

/**
 * @swagger
 * /group_stuff/getById/{id}:
 *   get:
 *     summary: Get group stuff by ID
 *     tags: [Group_Stuff]
 *     description: Retrieve a group stuff by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the group stuff.
 *     responses:
 *       200:
 *         description: Group stuff retrieved successfully.
 *       404:
 *         description: Group stuff not found.
 *       500:
 *         description: Internal server error.
 */
group_stuff.get('/getById/:id', getGroup_StuffById);

/**
 * @swagger
 * /group_stuff/delete/{id}:
 *   delete:
 *     summary: Delete group stuff by ID
 *     tags: [Group_Stuff]
 *     description: Delete a group stuff by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the group stuff to delete.
 *     responses:
 *       200:
 *         description: Group stuff deleted successfully.
 *       404:
 *         description: Group stuff not found.
 *       500:
 *         description: Internal server error.
 */
group_stuff.delete('/delete/:id', deleteGroup_Stuff);

module.exports = { group_stuff };