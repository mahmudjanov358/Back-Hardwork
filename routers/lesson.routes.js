const { Router } = require('express');
const lesson = Router();

const {
  postLesson,
  getLesson,
  getLessonById,
  updateLesson,
  deleteLesson,
} = require('../controllers/lesson.controller');

const {
  postLessonValidationSchema,
  updateLessonValidationSchema,
} = require('../validations/lessonValidation');
const lessonValidation = (schema) => (req, res, next) => {
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
 * /lesson/post:
 *   post:
 *     summary: Create a new lesson
 *     tags: [Lesson]
 *     description: Create a new lesson with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lesson_theme:
 *                 type: string
 *                 description: The theme of the lesson.
 *               lesson_number:
 *                 type: string
 *                 description: The number of the lesson.
 *               group_id:
 *                 type: string
 *                 description: The ID of the group associated with the lesson.
 *               lesson_date:
 *                 type: string
 *                 format: date
 *                 description: The date of the lesson.
 *     responses:
 *       201:
 *         description: Lesson created successfully.
 *       500:
 *         description: Internal server error.
 */
lesson.post('/post', lessonValidation(postLessonValidationSchema), postLesson);

/**
 * @swagger
 * /lesson/get:
 *   get:
 *     summary: Get all lessons
 *     tags: [Lesson]
 *     description: Retrieve a list of all lessons.
 *     responses:
 *       200:
 *         description: A list of lessons.
 *       500:
 *         description: Internal server error.
 */
lesson.get('/get', getLesson);

/**
 * @swagger
 * /lesson/getById/{id}:
 *   get:
 *     summary: Get lesson by ID
 *     tags: [Lesson]
 *     description: Retrieve a lesson by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the lesson.
 *     responses:
 *       200:
 *         description: Lesson retrieved successfully.
 *       404:
 *         description: Lesson not found.
 *       500:
 *         description: Internal server error.
 */
lesson.get('/getById/:id', getLessonById);

/**
  * @swagger
  * /lesson/update/{id}:
  *   patch:
  *     summary: Update lesson by ID
  *     tags: [Lesson]
  *     description: Update a lesson by its ID with the provided details.
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         schema:
  *           type: string
  *         description: The ID of the lesson to update.
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             type: object
  *             properties:
  *               lesson_theme:
  *                 type: string
  *                 description: The theme of the lesson.
  *               lesson_number:
  *                 type: string
  *                 description: The number of the lesson.
  *               group_id:
  *                 type: string
  *                 description: The ID of the group associated with the lesson.
  *               lesson_date:
  *                 type: string
  *                 format: date
  *                 description: The date of the lesson.
  *     responses:
  *       200:
  *         description: Lesson updated successfully.
  *       404:
  *         description: Lesson not found.
  *       500:
  *         description: Internal server error.
  */
lesson.patch('/update/:id', lessonValidation(updateLessonValidationSchema), updateLesson);

/**
 * @swagger
 * /lesson/delete/{id}:
 *   delete:
 *     summary: Delete lesson by ID
 *     tags: [Lesson]
 *     description: Delete a lesson by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the lesson to delete.
 *     responses:
 *       200:
 *         description: Lesson deleted successfully.
 *       404:
 *         description: Lesson not found.
 *       500:
 *         description: Internal server error.
 */
lesson.delete('/delete/:id', deleteLesson);

module.exports = { lesson };