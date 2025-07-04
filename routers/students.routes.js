const { Router } = require('express');
const students = Router();

const {
  postStudents,
  getStudents,
  getStudentsById,
  updateStudents,
  deleteStudents,
} = require('../controllers/students.controller');

const {
  postStudentsValidationSchema,
  updateStudentsValidationSchema,
} = require('../validations/studentsValidation');
const studentsValidation = (schema) => (req, res, next) => {
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
 * /students/post:
 *   post:
 *     summary: Create a new student
 *     tags: [Students]
 *     description: Create a new student record with personal information and enrollment details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lid_id:
 *                 type: string
 *                 description: The unique identifier for the lead/prospect source.
 *               first_name:
 *                 type: string
 *                 description: The student's first name.
 *               last_name:
 *                 type: string
 *                 description: The student's last name or surname.
 *               phone_number:
 *                 type: string
 *                 description: The student's contact phone number.
 *               birthday:
 *                 type: string
 *                 format: date
 *                 description: The student's date of birth in YYYY-MM-DD format.
 *               gender:
 *                 type: string
 *                 description: The student's gender (male, female, or other).
 *     responses:
 *       201:
 *         description: Student successfully created and saved to database.
 *       500:
 *         description: Internal server error occurred while creating student.
 */
students.post('/post',
  studentsValidation(postStudentsValidationSchema),
  postStudents);

/**
 * @swagger
 * /students/get:
 *   get:
 *     summary: Retrieve all Students items
 *     tags: [Students]
 *     description: Get a list of all students items.
 *     responses:
 *       200:
 *         description: A list of students items!
 *       500:
 *         description: Internal Server Error!
*/
students.get('/get', getStudents);

/**
 * @swagger
 * /students/getById/{id}:
 *  get:
 *    summary: Retrieve a Students item by ID
 *    tags: [Students]
 *    description: Get details of a specific students item by its ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *          description: The ID of the students item.
 *    responses:
 *      200:
 *        description: Details of the students item!
 *      500:
 *        description: Internal Server Error!
*/
students.get('/getById/:id', getStudentsById);

/**
 * @swagger
 * /students/update/{id}:
 *  patch:
 *    summary: Update a Students item by ID
 *    tags: [Students]
 *    description: Update details of a specific students item by its ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: The ID of the students item to update.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *               first_name:
 *                 type: string
 *                 description: The student's first name.
 *               last_name:
 *                 type: string
 *                 description: The student's last name or surname.
 *               phone_number:
 *                 type: string
 *                 description: The student's contact phone number.
 *               birthday:
 *                 type: string
 *                 format: date
 *                 description: The student's date of birth in YYYY-MM-DD format.
 *               gender:
 *                 type: string
 *                 description: The student's gender (male, female, or other).
 *    responses:
 *      200:
 *        description: Students item updated successfully!
 *      404:
 *        description: Students not found!
 *      500:
 *        description: Internal Server Error!
 */
students.patch('/update/:id',
  studentsValidation(updateStudentsValidationSchema),
  updateStudents);

/**
 * @swagger
 * /students/delete/{id}:
 *  delete:
 *    summary: Delete a Students item by ID
 *    tags: [Students]
 *    description: Delete a specific students item by its ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: The ID of the students item to delete.
 *    responses:
 *      200:
 *        description: Students item deleted successfully!
 *      404:
 *        description: Students not found!
 *      500:
 *        description: Internal Server Error!
 */
students.delete('/delete/:id', deleteStudents);

module.exports = { students };