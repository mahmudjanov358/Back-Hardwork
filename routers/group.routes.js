const { Router } = require('express');
const group = Router();

const {
  postGroup,
  getGroup,
  getGroupById,
  updateGroup,
  deleteGroup,
} = require('../controllers/group.controller');

const {
  postGroupValidationSchema,
  updateGroupValidationSchema,
} = require('../validations/groupValidation');
const groupValidation = (schema) => (req, res, next) => {
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
 * /group/post:
 *   post:
 *     summary: Create a new group
 *     tags: [Group]
 *     description: Create a new group with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               group_name:
 *                 type: string
 *                 description: The name of the group.
 *               lesson_start_time:
 *                 type: string
 *                 description: The start time of the lesson.
 *               lesson_continuous:
 *                 type: string
 *                 description: The continuous time of the lesson.
 *               lesson_week_day:
 *                 type: string
 *                 description: The week day of the lesson.
 *               group_stage_id:
 *                 type: string
 *                 description: The stage ID of the group.
 *               room_number:
 *                 type: string
 *                 description: The room number of the group.
 *               room_floor:
 *                 type: string
 *                 description: The floor of the room of the group.
 *               branch_id:
 *                 type: string
 *                 description: The branch ID of the group.
 *               lessons_quant:
 *                 type: string
 *                 description: The quantity of lessons for the group.
 *               is_active:
 *                 type: boolean
 *                 description: Indicates whether the group is active.
 *     responses:
 *       201:
 *         description: Group created successfully.
 *       500:
 *         description: Internal server error.
*/
group.post('/post', groupValidation(postGroupValidationSchema), postGroup);

/**
 * @swagger
 * /group/get:
 *   get:
 *     summary: Get all groups
 *     tags: [Group]
 *     description: Retrieve a list of all groups.
 *     responses:
 *       200:
 *         description: A list of groups.
 *       500:
 *         description: Internal server error.
*/
group.get('/get', getGroup);

/**
 * @swagger
 * /group/getById/{id}:
 *   get:
 *     summary: Get a group by ID
 *     tags: [Group]
 *     description: Retrieve a group by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the group to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The group details.
 *       404:
 *         description: Group not found.
 *       500:
 *         description: Internal server error.
*/
group.get('/getById/:id', getGroupById);

/**
 * @swagger
 * /group/update/{id}:
 *   patch:
 *     summary: Update a group by ID
 *     tags: [Group]
 *     description: Update a group by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the group to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               group_name:
 *                 type: string
 *                 description: The name of the group.
 *               lesson_start_time:
 *                 type: string
 *                 description: The start time of the lesson.
 *               lesson_continuous:
 *                 type: string
 *                 description: The continuous time of the lesson.
 *               lesson_week_day:
 *                 type: string
 *                 description: The week day of the lesson.
 *               room_number:
 *                 type: number
 *                 description: The room number of the group.
 *               room_floor:
 *                 type: number
 *                 description: The floor of the room of the group.
 *               lessons_quant:
 *                 type: string
 *                 description: The quantity of lessons for the group.
 *               is_active:
 *                 type: boolean
 *                 description: Indicates whether the group is active.
 *     responses:
 *       200:
 *         description: Group updated successfully.
 *       404:
 *         description: Group not found.
 *       500:
 *         description: Internal server error.
*/
group.patch('/update/:id', groupValidation(updateGroupValidationSchema), updateGroup);

/**
 * @swagger
 * /group/delete/{id}:
 *   delete:
 *     summary: Delete a group by ID
 *     tags: [Group]
 *     description: Delete a group by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the group to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Group deleted successfully.
 *       404:
 *         description: Group not found.
 *       500:
 *         description: Internal server error.
*/
group.delete('/delete/:id', deleteGroup);

module.exports = { group };