const { Router } = require('express');
const lesson = Router();

const {
  postLesson,
  getLesson,
  getLessonById,
  updateLesson,
  deleteLesson,
} = require('../controllers/lesson.controller');

lesson.post('/post', postLesson);
lesson.get('/get', getLesson);
lesson.get('/getById/:id', getLessonById);
lesson.patch('/update/:id', updateLesson);
lesson.delete('/delete/:id', deleteLesson);

module.exports = { lesson };