const { Router } = require('express');
const student_lesson = Router();

const {
  postStudent_Lesson,
  getStudent_Lesson,
  getStudent_LessonById,
  updateStudent_Lesson,
  deleteStudent_Lesson,
} = require('../controllers/student_lesson.controller');

const {
  postStudentLessonValidationSchema,
  updateStudentLessonValidationSchema,
} = require('../validations/student_lessonValidation');
const studentLessonValidation = (schema) => (req, res, next) => {
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
 * /student_lesson/post:
 *   post:
 *     summary: Create a new Student Lesson item
 *     tags: [Student_Lesson]
 *     description: Create a new student lesson item with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lesson_id:
 *                 type: string
 *                 description: 
 *               student_id:
 *                 type: string
 *                 description: 
 *               is_there:
 *                 type: boolean
 *                 description: 
 *               reason:
 *                 type: string
 *                 description: 
 *               be_paid:
 *                 type: boolean
 *                 description: 
 *     responses:
 *       201:
 *         description: Student Lesson item created successfully!
 *       500:
 *         description: Internal Server Error!
*/
student_lesson.post('/post', studentLessonValidation(postStudentLessonValidationSchema), postStudent_Lesson);

/**
 * @swagger
 * /student_lesson/get:
 *   get:
 *     summary: Retrieve all Student Lesson items
 *     tags: [Student_Lesson]
 *     description: Get a list of all Student Lesson items.
 *     responses:
 *       200:
 *         description: Successfully retrieved student lesson items.
 *       500:
 *         description: Internal Server Error!
*/
student_lesson.get('/get', getStudent_Lesson);

/**
 * @swagger
 * /student_lesson/getById/{id}:
 *   get:
 *     summary: Retrieve a Student Lesson item by ID
 *     tags: [Student_Lesson]
 *     description: Get details of a specific student lesson item by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the student lesson item.
 *     responses:
 *       200:
 *         description: Details of the Student Lesson item found!
 *       404:
 *         description: Student Lesson not found!
 *       500:
 *         description: Internal Server Error!
*/
student_lesson.get('/getById/:id', getStudent_LessonById);

/**
 * @swagger
 * /student_lesson/update/{id}:
 *   patch:
 *     summary: Update a Student Lesson item by ID
 *     tags: [Student_Lesson]
 *     description: Update details of a specific student lesson item by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the student lesson item to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lesson_id:
 *                 type: string
 *                 description: 
 *               student_id:
 *                 type: string
 *                 description: 
 *               is_there:
 *                 type: boolean
 *                 description: 
 *               reason:
 *                 type: string
 *                 description: 
 *               be_paid:
 *                 type: boolean
 *                 description: 
 *     responses:
 *       200:
 *         description: Student Lesson item updated successfully!
 *       404:
 *         description: Student Lesson not found!
 *       500:
 *         description: Internal Server Error!
*/
student_lesson.patch('/update/:id', studentLessonValidation(updateStudentLessonValidationSchema), updateStudent_Lesson);

/**
 * @swagger
 * /student_lesson/delete/{id}:
 *   delete:
 *     summary: Delete a Student Lesson item by ID
 *     tags: [Student_Lesson]
 *     description: Delete a specific student lesson item by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the student lesson item to delete.
 *     responses:
 *       200:
 *         description: Student Lesson item deleted successfully!
 *       404:
 *         description: Student Lesson not found!
 *       500:
 *         description: Internal Server Error!
*/
student_lesson.delete('/delete/:id', deleteStudent_Lesson);

module.exports = { student_lesson };