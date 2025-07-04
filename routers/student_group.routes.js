const { Router } = require('express');
const student_group = Router();

const {
  postStudent_Group,
  getStudent_Group,
  getStudent_GroupById,
  deleteStudent_Group,
} = require('../controllers/student_group.controller');

const {
  postStudentGroupValidationSchema,
} = require('../validations/student_groupValidation');
const studentGroupValidation = (schema) => (req, res, next) => {
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
 * /student_group/post:
 *   post:
 *     summary: Create a new Student Group
 *     tags: [Student_Group]
 *     description: Create a new student group item with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               students_id:
 *                 type: string
 *                 description: The cancel reason ID of the Students item.
 *               group_id:
 *                 type: string
 *                 description: The cancel reason ID of the Group item.
 *     responses:
 *       201:
 *         description: Student Group item created successfully!
 *       500:
 *         description: Internal Server Error!
*/
student_group.post('/post', studentGroupValidation(postStudentGroupValidationSchema), postStudent_Group);

/**
 * @swagger
 * /student_group/get:
 *   get:
 *     summary: Retrieve all student group statuses
 *     tags: [Student_Group]
 *     description: Get a list of all student group statuses.
 *     responses:
 *       200:
 *         description: List of student group statuses retrieved successfully.
 *       500:
 *         description: Internal server error.
*/
student_group.get('/get', getStudent_Group);

/**
 * @swagger
 * /student_group/getById/{id}:
 *   get:
 *     summary: Retrieve a student group status by ID
 *     tags: [Student_Group]
 *     description: Get a student group status by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the student group status to retrieve.
 *     responses:
 *       200:
 *         description: Student Group status retrieved successfully.
 *       404:
 *         description: Student Group status not found.
 *       500:
 *         description: Internal server error.
*/
student_group.get('/getById/:id', getStudent_GroupById);

/**
 * @swagger
 * /student_group/delete/{id}:
 *   delete:
 *     summary: Delete a student group status by ID
 *     tags: [Student_Group]
 *     description: Delete a student group status by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the student group status to delete.
 *     responses:
 *       200:
 *         description: Student Group status deleted successfully.
 *       404:
 *         description: Student Group status not found.
 *       500:
 *         description: Internal server error.
*/
student_group.delete('/delete/:id', deleteStudent_Group);

module.exports = { student_group };