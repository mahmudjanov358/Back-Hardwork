const { Router } = require('express');
const student_lesson = Router();

const {
  postStudent_Lesson,
  getStudent_Lesson,
  getStudent_LessonById,
  updateStudent_Lesson,
  deleteStudent_Lesson,
} = require('../controllers/student_lesson.controller');

student_lesson.post('/post', postStudent_Lesson);
student_lesson.get('/get', getStudent_Lesson);
student_lesson.get('/getById/:id', getStudent_LessonById);
student_lesson.patch('/update/:id', updateStudent_Lesson);
student_lesson.delete('/delete/:id', deleteStudent_Lesson);

module.exports = { student_lesson };